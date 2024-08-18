//Aufgabe: "Convert a Number to a String"
// Beschreibung:
// Schreibe eine Funktion, die eine Zahl entgegennimmt und sie in eine Zeichenkette (String) umwandelt.
// Du darfst keine integrierten Methoden verwenden, die direkt eine Zahl in einen String konvertieren, wie z.B. toString() oder String().
//
// Beispiel:
//
// numberToString(123) gibt "123" zurück.
// numberToString(999) gibt "999" zurück.
// numberToString(-100) gibt "-100" zurück.
// Hinweise:
//
// Die Eingabe kann jede Ganzzahl sein, sowohl positiv als auch negativ.
// Die Ausgabe sollte eine Zeichenkette (String) sein, die die Zahl repräsentiert.


function numberToString(num) {
    return '' +  num;
}

let result = numberToString(123)

// Testfälle
console.log(numberToString(123));  // Erwartete Ausgabe: "123"
console.log(numberToString(999));  // Erwartete Ausgabe: "999"
console.log(numberToString(-100)); // Erwartete Ausgabe: "-100"


console.log(typeof result)
