import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4lang_de_DE from "@amcharts/amcharts4/lang/de_DE";
import am4geodata_lang_DE from "@amcharts/amcharts4-geodata/lang/DE";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import countries from "./countries";

const HIGHLIGHT_COLOR = "#F05C5C";
const CSS_BREAKPOINT_LARGE = 992;
const PAN_BEHAVIOR_NONE = 'none';
const PAN_BEHAVIOR_MILLER = 'move';
const PAN_BEHAVIOR_ORTHOGRAPHIC = 'rotateLongLat';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_dark);
// Themes end

// Create map instance
let chart = am4core.create("map", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set German locale
chart.language.locale = am4lang_de_DE;
chart.geodataNames = am4geodata_lang_DE;

// Set projection
if (document.documentElement.clientWidth > CSS_BREAKPOINT_LARGE) {
    chart.projection = new am4maps.projections.Miller();
    chart.panBehavior = PAN_BEHAVIOR_MILLER;
} else {
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = PAN_BEHAVIOR_ORTHOGRAPHIC;
}

let grid = chart.series.push(new am4maps.GraticuleSeries());
grid.strokeWidth = 0;
grid.toBack();

// Create map polygon series
let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;
polygonSeries.mapPolygons.template.nonScalingStroke = true;
polygonSeries.mapPolygons.template.strokeOpacity = 0.5;

// Configure series
let polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = chart.colors.getIndex(0);

polygonTemplate.events.on("hit", function(ev) {
    showCountryPopup(ev.target.dataItem.dataContext.id, ev.target.dataItem.dataContext.name);
});

// PointedCircles for increased visibility of small countries/islands
let pinSeries = chart.series.push(new am4maps.MapImageSeries());
let pinTemplate = pinSeries.mapImages.template;
pinTemplate.propertyFields.longitude = "longitude";
pinTemplate.propertyFields.latitude = "latitude";

// Circles covering the underlying polygon
let circleSeries = chart.series.push(new am4maps.MapPolygonSeries())
let circleTemplate = circleSeries.mapPolygons.template;
circleTemplate.strokeOpacity = 0;
circleTemplate.fillOpacity = 0;

for (const [key, value] of Object.entries(countries)) {
    // Highlight countries
    polygonSeries.data.push({
        "id": key,
        "fill": am4core.color(HIGHLIGHT_COLOR)
    });

    polygonTemplate.propertyFields.fill = "fill";

    // Create a pin bullet
    if (value['pin']) {
        let pin = pinTemplate.createChild(am4plugins_bullets.PointedCircle);
        pin.fill = am4core.color(HIGHLIGHT_COLOR);
        pin.pointerBaseWidth = 20;
        pin.pointerLength = 10;
        pin.pointerAngle = 90;
        pin.radius = 5;

        pinSeries.data.push({
            latitude: value['pin']['latitude'],
            longitude: value['pin']['longitude'],
        });
    }

    // Create hidden circle
    if (value['circle']) {
        let polygon = circleSeries.mapPolygons.create();

        polygon.multiPolygon = am4maps.getCircle(value['circle']['longitude'], value['circle']['latitude'], value['circle']['radius']);
        polygon.events.on("hit", function (ev) {
            let countryPolygon = polygonSeries.getPolygonById(key);

            showCountryPopup(countryPolygon.dataItem.dataContext.id, countryPolygon.dataItem.dataContext.name);
        });
        polygon.events.on("over", function (ev) {
            let countryPolygon = polygonSeries.getPolygonById(key);
            countryPolygon.isHover = true;
        });
        polygon.events.on("out", function (ev) {
            let countryPolygon = polygonSeries.getPolygonById(key);
            countryPolygon.isHover = false;
        });
    }
}

// Create hover state and set alternative fill color
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

// Add links to change projection
let linkContainer = chart.createChild(am4core.Container);
linkContainer.isMeasured = false;
linkContainer.layout = "horizontal";
linkContainer.x = am4core.percent(50);
linkContainer.y = am4core.percent(92);
linkContainer.horizontalCenter = "middle";

let miller= linkContainer.createChild(am4core.TextLink);
miller.margin(10,10,10,10);
miller.fill = am4core.color('#000');
miller.text = "Miller (2D)";
miller.events.on("hit", function(){
    chart.projection = new am4maps.projections.Miller();
    chart.panBehavior = PAN_BEHAVIOR_MILLER;
});

let orthographic = linkContainer.createChild(am4core.TextLink);
orthographic.margin(10,10,10,10);
orthographic.fill = am4core.color('#000');
orthographic.text = "Orthographisch (3D)";
orthographic.events.on("hit", function(){
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = PAN_BEHAVIOR_ORTHOGRAPHIC;
});

function showCountryPopup(countryId, countryName) {
    if (!countries[countryId]) {
        return;
    }

    chart.panBehavior = PAN_BEHAVIOR_NONE;

    const title = `
    <div class="ampopup-title--wrapper">
        <span class="ampopup-title--inner">
            <span class="ampopup-title-inner-item flag-icon flag-icon-${countryId.toLowerCase()}"></span>
            <span class="ampopup-title-inner-item">${countryName}</span>
            <span class="ampopup-title-inner-item">&vert;</span>
        </span>
        <span class="ampopup-title--inner">
            <span class="ampopup-title-inner-item coin-icon"></span>
            <span class="ampopup-title-inner-item">${countries[countryId]['currency']}</span>
        </span>
    </div>
    `;

    // we cannot use a modal here since amcharts will always trigger its 'closed' events
    // preventing us from applying/removing classes to the body dynamically
    document.body.classList.add('disabled');
    let popup = chart.openPopup(
        countries[countryId]['content'](),
        title
    );

    popup.showCurtain = true;
    popup.events.once('closed', function (ev) {
        document.body.classList.remove('disabled');

        if (chart.projection instanceof am4maps.projections.Orthographic) {
            chart.panBehavior = PAN_BEHAVIOR_ORTHOGRAPHIC;
        } else {
            chart.panBehavior = PAN_BEHAVIOR_MILLER;
        }
    });
}