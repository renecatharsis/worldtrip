import "./style.scss";
import Map from "./map/Map.ts";

const mapElement = document.getElementById("map");
if (!mapElement) {
    throw new Error("Cannot find root element for map");
}

const map = new Map(mapElement);
map.boot();
