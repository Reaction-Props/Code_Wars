//Aufgabe: "Even or Odd"
// Beschreibung:
// Schreibe eine Funktion, die eine Ganzzahl entgegennimmt und "Even" (gerade) zurückgibt, wenn die Zahl gerade ist, und "Odd" (ungerade), wenn die Zahl ungerade ist.
//
// Beispiel:
//
// evenOrOdd(2) gibt "Even" zurück.
// evenOrOdd(7) gibt "Odd" zurück.
// evenOrOdd(-42) gibt "Even" zurück.
// Hinweise:
//
// Die Eingabe kann jede Ganzzahl sein, sowohl positiv als auch negativ.
// Die Ausgabe sollte entweder "Even" oder "Odd" als String sein.


const evenOrOdd = (output) => {
    return output = output % 2 === 0 ? 'Even' : 'Odd'
}

// Testfälle
console.log(evenOrOdd(2));  // Erwartete Ausgabe: "Even"
console.log(evenOrOdd(7));  // Erwartete Ausgabe: "Odd"
console.log(evenOrOdd(-42)); // Erwartete Ausgabe: "Even"
console.log(evenOrOdd(19)); // Erwartete Ausgabe: "Odd"
