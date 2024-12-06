import { Behavior } from "./types/MapChartPanBehavior.ts";
import AmchartsGeodataRepresentation from "./types/AmchartsGeodataRepresentation.ts";
import { Country } from "./types/Country.ts";
import { availableCountries } from "./CountryProvider.ts";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4lang_de_DE from "@amcharts/amcharts4/lang/de_DE";
import am4geodata_lang_DE from "@amcharts/amcharts4-geodata/lang/DE";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import { MapChart, MapPolygon, MapPolygonSeries } from "@amcharts/amcharts4/maps";

class Map {
    readonly HIGHLIGHT_COLOR: string = "#F05C5C";
    readonly CSS_BREAKPOINT_LARGE: number = 992;

    protected mapElement: HTMLElement;
    protected chart: MapChart;

    constructor(mapElement: HTMLElement) {
        this.mapElement = mapElement;

        am4core.useTheme(am4themes_dark);

        this.chart = am4core.create(this.mapElement, am4maps.MapChart);
        this.chart.geodata = am4geodata_worldLow;

        // Set German locale
        this.chart.language.locale = am4lang_de_DE;
        this.chart.geodataNames = am4geodata_lang_DE;
    }

    boot(): void {
        // Set projection
        if (document.documentElement.clientWidth > this.CSS_BREAKPOINT_LARGE) {
            this.chart.projection = new am4maps.projections.Miller();
            this.chart.panBehavior = "move";
        } else {
            this.chart.projection = new am4maps.projections.Orthographic();
            this.chart.panBehavior = Behavior.ORTHOGRAPHIC;
        }

        const grid = this.chart.series.push(new am4maps.GraticuleSeries());
        grid.strokeWidth = 0;
        grid.toBack();

        // Create map polygon series
        const polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;
        polygonSeries.mapPolygons.template.nonScalingStroke = true;
        polygonSeries.mapPolygons.template.strokeOpacity = 0.5;

        // Configure series
        const polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = this.chart.colors.getIndex(0);

        polygonTemplate.events.on("hit", (ev) => {
            const polygonData: AmchartsGeodataRepresentation = ev.target.dataItem
                ?.dataContext as AmchartsGeodataRepresentation;
            this.showCountryPopup(polygonData.id, polygonData.name);
        });

        // Create hover state and set alternative fill color
        const hs = polygonTemplate.states.create("hover");
        hs.properties.fill = this.chart.colors.getIndex(0).brighten(-0.5);

        // Add links to change projection
        const linkContainer = this.chart.createChild(am4core.Container);
        linkContainer.isMeasured = false;
        linkContainer.layout = "horizontal";
        linkContainer.x = am4core.percent(50);
        linkContainer.y = am4core.percent(92);
        linkContainer.horizontalCenter = "middle";

        const miller = linkContainer.createChild(am4core.TextLink);
        miller.margin(10, 10, 10, 10);
        miller.fill = am4core.color("#000");
        miller.text = "Miller (2D)";
        miller.events.on("hit", () => {
            this.chart.projection = new am4maps.projections.Miller();
            this.chart.panBehavior = Behavior.MILLER;
        });

        const orthographic = linkContainer.createChild(am4core.TextLink);
        orthographic.margin(10, 10, 10, 10);
        orthographic.fill = am4core.color("#000");
        orthographic.text = "Orthographisch (3D)";
        orthographic.events.on("hit", () => {
            this.chart.projection = new am4maps.projections.Orthographic();
            this.chart.panBehavior = Behavior.ORTHOGRAPHIC;
        });

        this.addCountryHighlights(polygonSeries, polygonTemplate);
    }

    protected addCountryHighlights(polygonSeries: MapPolygonSeries, polygonTemplate: MapPolygon): void {
        // PointedCircles for increased visibility of small countries/islands
        const pinSeries = this.chart.series.push(new am4maps.MapImageSeries());
        const pinTemplate = pinSeries.mapImages.template;
        pinTemplate.propertyFields.longitude = "longitude";
        pinTemplate.propertyFields.latitude = "latitude";

        // Circles covering the underlying polygon
        const circleSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
        const circleTemplate = circleSeries.mapPolygons.template;
        circleTemplate.strokeOpacity = 0;
        circleTemplate.fillOpacity = 0;

        availableCountries.forEach((country: Country) => {
            // Highlight countries
            polygonSeries.data.push({
                id: country.id,
                fill: am4core.color(this.HIGHLIGHT_COLOR),
            });

            polygonTemplate.propertyFields.fill = "fill";

            // Create a pin bullet
            if (country.pin) {
                const pin = pinTemplate.createChild(am4plugins_bullets.PointedCircle);
                pin.fill = am4core.color(this.HIGHLIGHT_COLOR);
                pin.pointerBaseWidth = 20;
                pin.pointerLength = 10;
                pin.pointerAngle = 90;
                pin.radius = 5;

                pinSeries.data.push({
                    latitude: country.pin.latitude,
                    longitude: country.pin.longitude,
                });
            }

            // Create hidden circle
            if (country.circle) {
                const polygon = circleSeries.mapPolygons.create();

                polygon.multiPolygon = am4maps.getCircle(
                    country.circle.longitude,
                    country.circle.latitude,
                    country.circle.radius,
                );

                polygon.events.on("hit", () => {
                    const countryPolygon = polygonSeries.getPolygonById(country.id);
                    const polygonData: AmchartsGeodataRepresentation = countryPolygon.dataItem
                        .dataContext as AmchartsGeodataRepresentation;

                    this.showCountryPopup(polygonData.id, polygonData.name);
                });

                polygon.events.on("over", () => {
                    const countryPolygon = polygonSeries.getPolygonById(country.id);
                    countryPolygon.isHover = true;
                });

                polygon.events.on("out", () => {
                    const countryPolygon = polygonSeries.getPolygonById(country.id);
                    countryPolygon.isHover = false;
                });
            }
        });
    }

    protected showCountryPopup(countryId: string, countryName: string): void {
        const country: Country | undefined = availableCountries.find((country) => {
            return country.id === countryId;
        });

        if (!country) {
            return;
        }

        this.chart.panBehavior = Behavior.NONE;

        const title = `
            <div class="ampopup-title--wrapper">
                <span class="ampopup-title--inner">
                    <span class="ampopup-title-inner-item fi fi-${country.id.toLowerCase()}"></span>
                    <span class="ampopup-title-inner-item">${countryName}</span>
                    <span class="ampopup-title-inner-item">&vert;</span>
                </span>
                <span class="ampopup-title--inner">
                    <span class="ampopup-title-inner-item coin-icon"></span>
                    <span class="ampopup-title-inner-item">${country.currency}</span>
                </span>
            </div>
            `;

        // we cannot use a modal here since amcharts will always trigger its 'closed' events
        // preventing us from applying/removing classes to the body dynamically
        document.body.classList.add("disabled");
        const popup = this.chart.openPopup(country.content, title);

        if (!popup) {
            return;
        }

        popup.showCurtain = true;
        popup.events.once("closed", () => {
            document.body.classList.remove("disabled");

            if (this.chart.projection instanceof am4maps.projections.Orthographic) {
                this.chart.panBehavior = Behavior.ORTHOGRAPHIC;
            } else {
                this.chart.panBehavior = Behavior.MILLER;
            }
        });
    }
}

export default Map;
