// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// const higherthan75 = exams.every((score) => score > 75);
// const somehigherthan100 = exams.some((score) => score > 100);

// console.log(higherthan75);
// console.log(somehigherthan100);

// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand By Me",
//     score: 85,
//   },
//   {
//     title: "Parasite",
//     score: 95,
//   },
//   {
//     title: "Alien",
//     score: 90,
//   },
// ];

// const newMovies = movies.some((n) => n.score < 90);
// const everyMovies = movies.every((n) => n.score < 90);

// console.log(newMovies);
// console.log(everyMovies);

function allEvens(array) {
  return array.every((n) => n % 2 === 0);
}

console.log(allEvens([2, 4, 6, 8]));
console.log(allEvens([1, 4, 6, 8]));
console.log(allEvens([1, 2, 3]));
