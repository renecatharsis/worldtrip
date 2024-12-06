import { Country } from "../types/Country.ts";

const Hungary = new Country(
    "HU",
    "Forint",
    `
        <h3>Geographie & Menschen</h3>
        <ul>
            <li>Hauptstadt: Budapest (früher Buda und Pest)</li>
            <li>anstelle von Bundesländern gibt es 19 Komitate (plus Budapest)</li>
            <li>Donau und Theiße teilen das Land in westliche entwickelte Teile und rurale Teile</li>
            <li>im Westen liegen die Voralpen, im Osten das Bakonygebirge- und Wald</li>
            <li>bekannte Gewässer sind der Plattensee und der größte europäische Thermalsee Hévíz</li>
            <li>Ethnien: ~90% Magyaren und wenige Roma, Ungarndeutsche, Slowaken und Kroaten</li>
            <li>Sprachen: ungarisch und an der Grenze zu Österreich vereinzelt deutsch</li>
            <li>Religion: primär katholisch christlich und evangelisch</li>
        </ul>
        <h3>Kultur</h3>
        <ul>
            <li>starke Badekultur, sowohl aus eigener als auch osmanischer Geschichte</li>
            <li>Gebäude wie Kirchen, Museen oder Institute sind oft europäischen Musikern und Philosophen gewidmet</li>
            <li>sehr viele Naturschutzgebiete für Zugvögel und denkmalgeschützte Gebäude</li>
            <li>Landesgericht ist Pörölt (Gulasch, in Ungarn ist Gulasch eher eine Gulaschsuppe)</li>
        </ul>
        <h3>Geschichte & Politik</h3>
        <ul>
            <li>bis 15. Jh. von Árpád und Nachfolgern regiert</li>
            <li>im 16. Jh. von den Osmanen erobert</li>
            <li>1686 bis 1849 monarchisch durch die Habsburger regiert, kurz danach Doppelmonarchie mit Österreich</li>
            <li>1918 unabhängig zur demokratischen Republik Ungarn ernannt</li>
            <li>1920 nach dem 1. Weltkrieg etwa 2/3 des Landes an Tschechoslowakei, Rumänien, den südslawischen Staat und Österreich abgegeben (Vertrag von Trianon)</li>
            <li>1938 - 1941 ehemalige Gebiete im 2. Weltkrieg zurückerobert, 1945 aber alle wieder verloren</li>
            <li>1945 - 1953 stalinistisch regiert</li>
            <li>1956 landesweit Proteste, die schließlich blutig von Russland niedergestreckt wurden, aber den Gulaschkommunismus eingeleitet haben</li>
            <li>nach den "Revolutionen im Jahr 1989" und dem Fall des Eisernen Vorhangs 1990 erneut zur Republik Ungarn ernannt</li>
            <li>1999 der NATO beigetreten, 2004 der EU</li>
            <li>Staatsoberhaupt ist der Präsident, regiert aber primär durch den Ministerpräsidenten (aktuell Orbán)</li>
        </ul>
        <hr>
        <h3>Quellen</h3>
        <ul class="modal__content-list--wordwrapped">
            <li><a href="https://de.wikipedia.org/wiki/Ungarn">https://de.wikipedia.org/wiki/Ungarn</a></li>
            <li><a href="https://www.youtube.com/watch?v=2U41I_DtQzQ">https://www.youtube.com/watch?v=2U41I_DtQzQ</a></li>
            <li><a href="https://www.youtube.com/watch?v=omx66rFK5yM">https://www.youtube.com/watch?v=omx66rFK5yM</a></li>
        </ul>
    `,
);

export default Hungary;
