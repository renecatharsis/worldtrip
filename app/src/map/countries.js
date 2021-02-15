export default {
    'UZ': {
        currency: 'So\'m',
        content: () => {
            return `
                <h3>Geographie & Menschen</h3>
                <ul>
                    <li>Hauptstadt: Taschkent</li>
                    <li>andere große Städte: Bukhara, Samarkand (bekannt für alte Koranschulen)</li>
                    <li>etwa 4/5 sind Wüste, Steppe und was vom Aralsee übrig ist</li>
                    <li>Ethnien: ~70% Usbekisch, ansonsten Russisch, Koranisch und von umliegenden Ländern</li>
                    <li>Sprachen: Usbekisch, Karakalpakistanisch, Russisch, Arabisch, Deutsch (ca. die Hälfte aller Schüler lernt dt.)</li>
                    <li>Religion: Islam und russisch-orthodox</li>
                </ul>
                <h3>Kultur</h3>
                <ul>
                    <li>Teil der "Seidenstraße" (Handelsroute von Indien und China)</li>
                    <li>viele alte Kunstarten (Malerien, Holzarbeiten und Stoffe)</li>
                    <li>beliebte Sportarten sind Wrestling und Kopkari ("wer bekommt die kopflose Ziege")</li>
                    <li>Baumwolle, Seide, Teppiche, fossile Rohstoffe und Gold</li>
                    <li>Landesgericht ist Plov/Pilav (Reis mit Gemüse und Lammfleisch)</li>
                </ul>
                <h3>Geschichte & Politik</h3>
                <ul>
                    <li>bis 19. Jh. unterschiedliche muslimische Dynatien (u.a. Amir Temur, der erste große Eroberer)</li>
                    <li>bis 20. Juni 1991 Teil der UdSSR (Usbekische SSR)</li>
                    <li>nur zwei Präsidenten (bis 2016 Islom Karimov, seitdem Shavkat Mirziyoyev)</li>
                    <li>seit zweitem Präsidenten liberaler, aber immer noch stark oppressiv</li>
                    <li>keine freie Presse (TV, Print, Internet)</li>
                </ul>
                <hr>
                <h3>Quellen</h3>
                <ul class="modal__content-list--wordwrapped">
                    <li><a href="https://de.wikipedia.org/wiki/Usbekistan">https://de.wikipedia.org/wiki/Usbekistan</a></li>
                    <li><a href="https://www.youtube.com/watch?v=HFb5C7WHdvM">https://www.youtube.com/watch?v=HFb5C7WHdvM</a></li>
                </ul>
            `;
        }
    },
    'HU': {
        currency: 'Forint',
        content: () => {
            return `
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
                </ul>
            `;
        }
    },
    'SB': {
        currency: 'Salomonen-Dollar',
        pin: {
            longitude: 160.25,
            latitude: -8.92,
        },
        circle: {
            longitude: 160.75,
            latitude: -8.96,
            radius: 3
        },
        content: () => {
            return `
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
                </ul>
            `;
        }
    },
    'BB': {
        currency: 'Barbados-Dollar',
        pin: {
            longitude: -59.5,
            latitude: 13.3,
        },
        circle: {
            longitude: -59.5,
            latitude: 13.3,
            radius: 1.25
        },
        content: () => {
            return `
                <h3>Geographie & Menschen</h3>
                <ul>
                    <li>Hauptstadt: Bridgetown</li>
                </ul>
                <h3>Kultur</h3>
                <ul>
                </ul>
                <h3>Geschichte & Politik</h3>
                <ul>
                    <li>parlamentarische Monarchie unter Führung von Königin Elisabeth II. und dem eigenen Premierminister</li>
                </ul>
                <hr>
                <h3>Quellen</h3>
                <ul class="modal__content-list--wordwrapped">
                    <li><a href="https://de.wikipedia.org/wiki/Barbados">https://de.wikipedia.org/wiki/Barbados</a></li>
                </ul>
            `;
        }
    },
}