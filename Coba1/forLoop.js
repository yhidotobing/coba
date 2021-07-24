// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 1; i <= 10; i++) {
//   console.log("Im in Loop");
//   console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }
// for (let i = 1000; i >= 0; i /= 10) {
//   console.log(i);
// }

// const animals = ["tiger", "lion", "puma"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//   console.log(i, animals[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
// for (i = 0; i < people.length; i++) {
//   console.log(people[i].toUpperCase());
// }

// for (i = 1; i <= 10; i++) {
//   console.log(`i is ${i}`);
//   for (j = 1; j <= 5; j++) {
//     console.log(`j is ${j}`);
//   }
// }

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`Row ${i}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// const seatingChart2 = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
//   ["XXX", "Sakura", "Jack", "Erika"],
//   ["Yuma", "BBBB", "Jack", "Erika"],
//   ["Yuma", "Sakura", "YYYY", "ZZZZ"],
// ];

// for (let i = 0; i < seatingChart2.length; i++) {
//   const row1 = seatingChart2[i];
//   console.log(` Row ${i}`);
//   for (let j = 0; j < row1.length; j++) {
//     console.log(row1[j]);
//   }
// }

// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the code ");

// while (guess !== SECRET) {
//   guess = prompt(`you're wrong , try again`);
// }
// console.log(`Congrats Youre right`);

// let input = prompt("Hey, say something");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("Ok you win");

// for (let i = 0; i <= 1000; i++) {
//   console.log(i);
//   if (i === 300) break;
// }
// let maximum = parseInt(prompt("Enter the number"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number !"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   attempts++;
//   if (guess > targetNum) {
//     guess = parseInt(prompt("Too High, enter a new guess"));
//   } else {
//     guess = parseInt(prompt("Too low enter a  new guesss"));
//   }
// }

// console.log(`You got it , it took you ${attempts} guesses`);

// const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];

// for (let i = 0; i < subreddits.length; i++) {
//   console.log(` Visit reddit.com/r/${subreddits[i]}`);
// }

// for (let sub of subreddits) {
//   console.log(` Visit reddit.com/r/${sub}`);
// }
