//Aufgabe: "Remove First and Last Character"
// Beschreibung:
// Schreibe eine Funktion, die einen String entgegennimmt und einen neuen String zurückgibt, bei dem das erste und das letzte Zeichen entfernt wurden.
//
// Beispiel:
//
// removeChar("hello") gibt "ell" zurück.
// removeChar("world") gibt "orl" zurück.
// removeChar("javascript") gibt "avascrip" zurück.
// Hinweise:
//
// Der String wird immer mindestens zwei Zeichen lang sein.
// Die Eingabe ist ein einfacher String ohne Leerzeichen am Anfang oder Ende.

//Kleine test mit slice
// function removeChar(str) {
//     return str.slice(1, -1);
// }

function removeChar(str) {
    return str.split("").filter((_, i) => i !== 0 && i !== str.length - 1).join("");
}


// Testfälle
console.log(removeChar("hello"));  // Erwartete Ausgabe: "ell"
console.log(removeChar("world"));  // Erwartete Ausgabe: "orl"
console.log(removeChar("javascript")); // Erwartete Ausgabe: "avascrip"
