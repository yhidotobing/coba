const fruits = ["Apple", "Durian", "Orange", "Grape", "Duku"];

// let temp = fruits[0]; //Apple
// fruits[0] = fruits[4]; //Duku
// fruits[4] = temp; //D
// console.log(fruits);

// [fruits[0], fruits[1]] = [fruits[1], fruits[0]];
// console.log(fruits);

const numbers = [];
const randomNumber = Math.floor(Math.random() * 10);
for (let index = 0; index < randomNumber; index++) {
  numbers.push(Math.floor(Math.random() * 100));
}

// console.log(randomNumber);
// console.log(numbers);

numbers.sort((a, b) => a - b);
console.log("Ascending");
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log("Descending");
console.log(numbers);
