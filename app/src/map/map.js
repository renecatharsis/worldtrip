import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4lang_de_DE from "@amcharts/amcharts4/lang/de_DE";
import am4geodata_lang_DE from "@amcharts/amcharts4-geodata/lang/DE";
import countries from "./countries";

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
    if (!countries[ev.target.dataItem.dataContext.id]) {
        return;
    }

    chart.panBehavior = PAN_BEHAVIOR_NONE;
    chart.closeAllPopups();

    // we cannot use a modal here since amcharts will always trigger its 'closed' events
    // preventing us from applying/removing classes to the body dynamically
    document.body.classList.add('disabled');
    let popup = chart.openPopup(
        countries[ev.target.dataItem.dataContext.id]['content'](),
        '<span class="flag-icon flag-icon-' + ev.target.dataItem.dataContext.id.toLowerCase() + '"></span>'
            + '&nbsp;' + ev.target.dataItem.dataContext.name
            + ' | <span class="coin-icon"></span>'
            + '&nbsp;' + countries[ev.target.dataItem.dataContext.id]['currency']
    );

    popup.showCurtain = true;
    popup.events.on('closed', function(ev) {
        document.body.classList.remove('disabled');

        if (chart.projection instanceof am4maps.projections.Orthographic) {
            chart.panBehavior = PAN_BEHAVIOR_ORTHOGRAPHIC;
        } else {
            chart.panBehavior = PAN_BEHAVIOR_MILLER;
        }
    });
});

for (const [key, value] of Object.entries(countries)) {
    polygonSeries.data.push({
        "id": key,
        "fill": am4core.color("#F05C5C")
    });

    polygonTemplate.propertyFields.fill = "fill";
}

// Create hover state and set alternative fill color
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

let linkContainer = chart.createChild(am4core.Container);
linkContainer.isMeasured = false;
linkContainer.layout = "horizontal";
linkContainer.x = am4core.percent(50);
linkContainer.y = am4core.percent(92);
linkContainer.horizontalCenter = "middle";

let equirectangular= linkContainer.createChild(am4core.TextLink);
equirectangular.margin(10,10,10,10);
equirectangular.fill = am4core.color('#000');
equirectangular.text = "Miller (2D)";
equirectangular.events.on("hit", function(){
    chart.projection = new am4maps.projections.Miller();
    chart.panBehavior = PAN_BEHAVIOR_MILLER;
})

let orthographic = linkContainer.createChild(am4core.TextLink);
orthographic.margin(10,10,10,10);
orthographic.fill = am4core.color('#000');
orthographic.text = "Orthographisch (3D)";
orthographic.events.on("hit", function(){
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = PAN_BEHAVIOR_ORTHOGRAPHIC;
})