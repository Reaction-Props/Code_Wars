//Aufgabe: "Return Negative"
// Beschreibung:
// In dieser Aufgabe bekommst du eine Zahl und sollst sie, falls sie positiv ist, in eine negative Zahl umwandeln. Falls die Zahl bereits negativ ist, gib sie unverändert zurück.
//
// Beispiel:
//
// makeNegative(1) gibt -1 zurück.
// makeNegative(-5) gibt -5 zurück.
// makeNegative(0) gibt 0 zurück.
// Hinweise:
//
// Die Eingabe kann jede Ganzzahl sein.
// Du darfst keine Multiplikation verwenden, um das Vorzeichen zu ändern.
// Wie würdest du an diese Aufgabe herangehen?


function makeNegative(num) {
    if (num > 0) {
        return -num;
    }
    return num;
}

// Testfälle
console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(42));
