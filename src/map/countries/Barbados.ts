import { Circle, Country, Pin } from "../types/Country.ts";

const Barbados = new Country(
    "BB",
    "Barbados-Dollar",
    `
        <h3>Geographie & Menschen</h3>
        <ul>
            <li>Hauptstadt: Bridgetown</li>
            <li>unabhängiger Inselstatt in Inselkette der Kleinen Antillen</li>
            <li>Teil des Commonwealth of Nations, besteht aus 19 Parishes (Gemeinden)</li>
            <li>früher sehr viel tropischer Regendwald, viele der Flächen für Zuckerrohrplantagen gerodet</li>
            <li>über 400 unterschiedliche Strände</li>
            <li>Ethnien: 80%  Barbadier, die primär Nachkommen afrikanischer Sklaven sind, einzelne Weiße & Asiaten</li>
            <li>Sprache: Bajan, ein auf dem Englischen basierender kreolischer Dialekt</li>
            <li>Religion: Anglikaner, Anhänger der Pfingsbewegung, Adventisten und Methodisten</li>
        </ul>
        <h3>Kultur</h3>
        <ul>
            <li>wichtigster Export ist nach wie vor Zuckerrohr und Rum</li>
            <li>war jahreland Startplatz von Forschungsraketen</li>
            <li>unterhält das Barbados Cloud Observatory zusammen mit dem Hamburger Max-Planck-Institut für Meteorologie</li>
            <li>Pferdesportarten wie Polo unter der wohlhabenden Bevölkerung beliebt</li>
            <li>Fliegende Fische sind Teil typischer Nationalgerichte und Symbole im Alltag</li>
        </ul>
        <h3>Geschichte & Politik</h3>
        <ul>
            <li>ursprünglich von Arawak und Kariben besiedelt</li>
            <li>1536 vom Portugiesen Pedro Campos entdeckt, die Bewohner wurden versklavt</li>
            <li>1625 von England übernommen, aufgrund der vielen Fliehenden war die Insel aber nahezu verwaist</li>
            <li>1627 wurden Sklaven aus Irland und Indentur-Sklaven von den britischen Inseln angesiedelt</li>
            <li>1652 nach Konflikten mit England wurden die Rechte des Parlaments und die der Bürger in der „Charta of Barbados, or Articles of Agreement“ niedergelegt</li>
            <li>1838 nach der Emanzipation die anfangs nur für englische Plantagenbesitzer geltenden Rechte wurden für Sklaven ausgeweitet</li>
            <li>1966 zur Unabhängigkeit auf die schwarze Bevölkerungsmehrheit ausgedehnt</li>
            <li>noch heute eine parlamentarische Monarchie unter Führung von Königin Elisabeth II. und dem eigenen Premierminister</li>
            <li>anlässlich der 55. Wiederkehr des Unabhängigkeitstages soll das Land am 30. November 2021 zur Republik erklärt werden</li>
        </ul>
        <hr>
        <h3>Quellen</h3>
        <ul class="modal__content-list--wordwrapped">
            <li><a href="https://de.wikipedia.org/wiki/Barbados">https://de.wikipedia.org/wiki/Barbados</a></li>
            <li><a href="https://www.youtube.com/watch?v=xZn6MfDJlHk">https://www.youtube.com/watch?v=xZn6MfDJlHk</a></li>
            <li><a href="https://www.youtube.com/watch?v=uvA3DUJCxpY">https://www.youtube.com/watch?v=uvA3DUJCxpY</a></li>
        </ul>
    `,
    new Pin(-59.5, 13.3),
    new Circle(-59.5, 13.3, 1.25),
);

export default Barbados;
