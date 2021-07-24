// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((element) => console.log(element));

// numbers.forEach(function (el) {
//   console.log(el);
// });

// for (let el of numbers) {
//   console.log(el);
// }

// numbers.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// numbers.forEach((element) => {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// });

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

// movies.forEach((element) => console.log(`${element.title} - ${element.score}`));

// movies.forEach(function (el) {
//   console.log(`${el.title}- ${el.score}`);
// });

const newMovies = movies.map((movie) => {
  return ` ${movie.title} - ${movie.score / 10}`;
});

console.log(newMovies);
