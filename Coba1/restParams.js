function sum(...numbers) {
  return numbers.reduce((total, number) => total + number);
}

console.log(sum(3, 4, 5, 6, 7, 8, 89, 9, 9, 9, 9));

// function raceResults(gold, silver, ...everyone) {
//   console.log(`Winnner goes to ${gold}`);
//   console.log(`Second goes to ${silver}`);
//   console.log(`Everyone goes to ${everyone}`);
// }

// raceResults("Timo", "Tono", "Yhido", "Nena", "Geyl");

function raceResults(gold, silver, ...everyone) {
  return `Gold goes to ${gold}\nSilver goes to ${silver}\nEveryone goes to ${everyone}`;
}
console.log(raceResults("Timo", "Tono", "Yhido", "Bono", "Lewis"));
