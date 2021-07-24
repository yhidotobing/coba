// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filteredNumbers = numbers.filter((n) => {
//   return n % 2 === 0;
// });

// console.log(filteredNumbers);

// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//     year: 2004,
//   },
//   {
//     title: "Stand By Me",
//     score: 85,
//     year: 1990,
//   },
//   {
//     title: "Parasite",
//     score: 95,
//     year: 1930,
//   },
//   {
//     title: "Alien",
//     score: 90,
//     year: 1950,
//   },
// ];

// const bestScoreMovie = movies.filter((n) => {
//   return n.score > 90;
// });
// const badScoreMovie = movies.filter((n) => {
//   return n.score < 90;
// });

// const newMovie = movies.filter((n) => {
//   return n.year > 1990;
// });

// const goodScore = movies.map((n) => {
//   return n.score;
// });

// console.log(goodScore);
// console.log(bestScoreMovie);
// console.log(badScoreMovie);
// console.log(newMovie);

const userNames = [
  "mark",
  "staceysmom1978",
  "q29832128238983",
  "carrie98",
  "MoanaFan",
];

// const validUserNames = userNames.filter((username) => {
//   return username.length < 10;
// });

// console.log(validUserNames);

// const username = [];
// const validUserNames = username.filter((usernamex) => {
//   return usernamex.length < 10;
// });

// console.log(validUserNames);

// function validUserNames(array) {
//   return array.filter((n) => n.length < 10);
// }

// console.log(
//   validUserNames([
//     "mark",
//     "staceysmom1978",
//     "q23824u8324729347324392",
//     "carrie98",
//     "MoanaFan",
//   ])
// );

function allEvens(array) {
  array.every((n) => n % 2 === 0);
}

console.log(allEvens([2, 4, 6, 8]));
console.log(allEvens([1, 4, 6, 8]));
console.log(allEvens([1, 2, 3]));
