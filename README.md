# Documentation

## Teknologier
Til dette projekt har jeg valgt at bruge EJS, Gulp og Sass, såvel som vanilla JavaScript.
Jeg valgte at bruge EJS på grund af de modulære systemer. Det samme gælder for Sass.
Jeg valgte Gulp fordi jeg havde brugt den før i sammenhæng med EJS og Sass. Det hjalp også med at flytte færdige filer.
Vanilla JavaScript var valgt på grund af hastighed.

Alle teknologier var valgt fordi jeg syntes at de var hurtigst at starte på og arbejde med uden at skulle tænke for meget over det. Det var på grund af den 1-uges deadline vi havde. Jeg overvejede hurtigt React, Gatsby og nogle andre, men kom til konklusionen at de ville komme med for mange udfordringer, for en opgave der skulle laves så hurtigt.

## Teknisk dokumentation
```javascript
const emailRegex = /(?:[^\s]+)@(?:[^\s\.]+)\.[A-z](?:[A-z]+)/;
```
Linjen over dette er en regular expression, som jeg selv har skrevet. Inputtede emails er sammenlignet med den for at sikre at de er mulige.
Den leder efter alt det ikke er whitespace, fulgt af et @, fulgt af alt der ikke er whitespace eller et punktum, fulgt af et punkt, fulgt af mindst to bogstaver af en hvilken som helst størrelse.

Skrevet mere forståeligt, `not_white.space @ notWhitespaceOrPeriod . minTwoLetters`
Absolut minimum for en rigtig email er `a@a.aa`

Det er nok en af de mere komplicerede ting i min kode.

---

```javascript
const data = new URLSearchParams();

for (const pair of new FormData(newsletterFormDOM)) {
    data.append(pair[0], pair[1]);
}
```
Denne kode er brugt til alle formularerne. Den laver et URLSearchParams objekt. Derefter looper den igennem alle form elementerne fra FormData objektet og tilføjer nøgle/værdi parrene til URLSearchParams objektet. Dette er for at lave et element der kan sendes via POST til API-en.

---

```javascript

```


## "Soft" dokumentation
De forskellige navne i navigationsbaren leder til forskellige sider, dog kun "Home", "Book Table", og "Contact Us" er udviklet til denne opgave.

"Home" (forsiden) har sektioner #1, #2, #3, #6 og #8.
Billederne på sektion #1 viser information om de ting de representerer hvis brugeren flytter musen hen over dem.

Sektion #2 er et automatisk slideshow der viser information hvis brugeren flytter musen over dem. Brugeren kan derefter booke bord til en af dem. Der er også knapper til manuelt at skifte slides.

Sektion #3 er et simpelt galleri med billeder fra tidligere events. Billederne kan trykkes på og åbnes i stor størrelse i en lightbox.

Sektion #6 er et slideshow af folk der beskriver hvad de synes om Night Club. Brugeren skal selv trykke på knapperne for at skifte slide.

Sektion #8 har et inputfelt til en email, såvel som en knap. Når der trykkes på knappen, tjekkes den indskrevne email med en regular expression (kan ses i teknisk dokumentation). Hvis det er dømt at det er en rigtig email, indsendes den til API-en og gemmes.

---

"Book Table" består af en liste over alle bordene og en formular. Hvis der trykkes på et bord, er bordets nummer automatisk indsat i formularen. Formularen består af en masse input felter og en knap. Hvis der trykkes på knappen, bliver alle felterne tjekket (emailen bliver tjekket med en regular expression). Hvis systemet synes at der ingen problemer er, bliver informationen sendt til API-en og gemt.

---

"Contact Us" er en simpel side med en kontaktformular og en boks med kontaktinformationer. Formularen har nogle inputfelter og en knap. Knappen gør stort set det samme som knappen på "Book Table" siden gør. Informationen er gemt i API-en.


## Arbejdsprocess
Jeg udviklede først desktop versionen af hjemmeside i dele. Jeg brugte sektionerne defineret i opgavebeskrivelsen som guidelines.
Når jeg faldt over elementer der kunne gøres modulere (eller hvis deres CSS kunne være globalt), gik jeg tilbage i koden og lavede de ændringer det ville kræve. Efter at have færdiggjort 9/10 af hjemmesiden, omskrev jeg hurtigt noget af koden sådan så at den var mere responsiv.

Jeg nedskrev ikke nogen planlagt struktur før jeg begyndte opgaven, da jeg sjældent ender med at bruge dem alligevel. Jeg planlage intet i forvejen, og fokuserede i stedet på at maksimere hastigheden for at blive færdi med opgaven til tiden.