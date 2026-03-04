import "./style.scss";
import WorldMap from "./map/WorldMap.ts";

const mapElement = document.getElementById("map");
if (!mapElement) {
    throw new Error("Cannot find root element for map");
}

const map = new WorldMap(mapElement);
map.boot();
