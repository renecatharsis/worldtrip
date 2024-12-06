import { Circle, Country, Pin } from "../types/Country.ts";

const SolomonIslands = new Country(
    "SB",
    "Salomonen-Dollar",
    `
        <h3>Geographie & Menschen</h3>
        <ul>
            <li>Hauptstadt: Honiara</li>
            <li>zusammengesetzt aus den südlichen Salomon-Inseln, den Ontong-Java-Inseln und den Santa-Cruz-Inseln</li>
            <li>die nörlidchen Solomon-Inseln gehören politisch zu Papua-Neuguinea</li>
            <li>Gebiet besteht aus Guacalcanal, Santa Isabel, Makira, Malaita, New Georgia, Choiseul und etwa 992 kleinere Inseln</li>
            <li>4/5 der Inselflächen sind bewaldet, meist Hügellandschaften</li>
            <li>Teil des Commonwealth of Nations, das Land selber besteht aus neun Provinzen</li>
            <li>Ethnien: ~95% Melanesier und wenige Polynesier sowie Mikronesier</li>
            <li>Sprachen: ~95% melanesischer Dialekte, polynesisch und mikronesisch</li>
            <li>Religion: Anglikaner, Christen, Adventisten und Methodisten</li>
            
        </ul>
        <h3>Kultur</h3>
        <ul>
            <li>einer der ärmsten Staaten Ozeaniens, unter anderem bedingt durch ethnische Konflikte von 1998</li>
            <li>zwei Drittel der Bevölkerung lebst von Subsistenzwirtschaft</li>
            <li>wichtigste Exporte sind Holz, Fisch und Palmöl</li>
            <li>leidet stark unter steigenden Meeresspiegeln, vermeintlich bedingt durch den Klimawandel</li>
        </ul>
        <h3>Geschichte & Politik</h3>
        <ul>
            <li>vermutlich seit 60.000 Jahren bevölkert</li>
            <li>um etwa 7.000 v. Chr. Ackerbau und Viehzucht entwickelt</li>
            <li>die Inseln wurden praktisch mehrfach entdeckt, von Spaniern, Briten und Franzosen</li>
            <li>im 19 Jh. trafen Händler und Missionare ein</li>
            <li>1886 bis 1899 Kolonialherrschaft durch das Deutsche Reich (Papua-Neuguinea bis 1918)</li>
            <li>1899 bis zum zweiten Weltkrieg britische Kolonie </li>
            <li>während dem zweiten Weltkrieg von Japan besetzt und den USA Ende 1943 befreit</li>
            <li>1983 bis 2019 diplomatische Beziehungen zu Taiwan, seitdem zu China</li>
            <li>parlamentarische Monarchie unter Führung von Königin Elisabeth II. und dem eigenen Premierminister</li>
        </ul>
        <hr>
        <h3>Quellen</h3>
        <ul class="modal__content-list--wordwrapped">
            <li><a href="https://de.wikipedia.org/wiki/Salomonen">https://de.wikipedia.org/wiki/Salomonen</a></li>
            <li><a href="https://www.youtube.com/watch?v=mb3KoX7JT6g">https://www.youtube.com/watch?v=mb3KoX7JT6g</a></li>
            <li><a href="https://www.youtube.com/watch?v=8Gl6iy7OEM4">https://www.youtube.com/watch?v=8Gl6iy7OEM4</a></li>
        </ul>
    `,
    new Pin(160.25, -8.92),
    new Circle(160.25, -8.92, 3),
);

export default SolomonIslands;
