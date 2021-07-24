// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// const highPrices = prices.reduce((currPrices, highestPrices) => {
//   if (currPrices < highestPrices) {
//     return currPrices;
//   }
//   return highestPrices;
// });
// console.log(highPrices);

// let total = 0;
// for (let price of prices) {
//   total += price;
// }

// console.log(total);

// const total = prices.reduce((total, price) => {
//   return total + price;
// });

// console.log(total);

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

const moviesRated = movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});

// const number = [50, 175, 25];

// const total = number.reduce((total, num) => {
//   return total - num;
// });

// console.log(total);

// const numbers = [2.3, 15.5, 1.1, 4.7];

// const hasil = numbers.reduce((first, second) => {
//   return Math.round(first) * Math.round(second);
// });
// console.log(hasil);

const evens = [2, 4, 6, 8];

const tryIt = evens.reduce((sum, num) => {
  return sum + num, 100;
});

console.log(tryIt);
