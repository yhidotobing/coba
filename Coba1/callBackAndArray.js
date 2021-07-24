const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

// movies.forEach((element) => console.log(`${element.title} - ${element.score}`));

// movies.forEach(function (el) {
//   console.log(`${el.title}- ${el.score}`);
// });

// function sc(floor) {
//   if (floor > 1) {
//     const app = "Aa~";
//     const i = floor;
//     for (let i = 2; i <= 2; i++) {
//       console.log(`${app}`);
//     }
//   }
// }

// sc(3);

// function sc(floor) {
//   if (floor <= 1) return "";
//   return "Aa~".repeat(floor - 1) + "Pa!" + (floor <= 6 ? "Aa" : "");
// }

// console.log(sc(5));

// function sc(floor) {
//   if (floor <= 1) return "";
//   return "Aa~ ".repeat(floor - 1) + "Pa!" + (floor <= 6 ? " Aa!" : "");
// }

// console.log(sc(6));

// function sc(floor) {
//   if (floor <= 1) return "";
//   return "Aa~ ".repeat(floor - 1) + "Pa !" + (floor <= 6 ? "Aa!" : "");
// }

// function sc(floor) {
//   const jumpVoice = "Aa~ ";
//   const fellVoice = "Pa! ";
//   const finalVoice = "Aa! ";
//   if (floor <= 1) return "";
//   if (floor <= 6) return jumpVoice.repeat(floor - 1) + fellVoice + finalVoice;
//   return jumpVoice.repeat(floor - 1) + fellVoice;
// }

// console.log(sc(2));
// console.log(sc(12));
// console.log(sc(6));

// function sc(floor) {
//   const jumpVoice = "Aa~ ";
//   const fellVoice = "Pa! ";
//   const finalVoice = "Aa! ";
//   if (floor <= 1) return "", "good luck!";
//   if (floor <= 6)
//     return jumpVoice.repeat(floor - 1) + fellVoice + finalVoice, "good luck!";
//   return jumpVoice.repeat(floor - 1) + finalVoice, "good luck!";
// }

// console.log(sc(2));
// console.log(sc(6));
// console.log(sc(7));
// console.log(sc(10));
// console.log(sc(1));
// console.log(sc(-1));

// function sc(floor) {
//   const jumpVoice = "Aa~ ";
//   const fellVoice = "Pa! ";
//   const finalVoice = "Aa! ";
//   if (floor <= 1) return "";
//   if (floor <= 6) return jumpVoice.repeat(floor - 1) + fellVoice + finalVoice;
//   return jumpVoice.repeat(floor - 1) + finalVoice;
// }
// console.log(sc(2)), console.log("Good Luck");
// console.log(sc(6));
// console.log(sc(7));
// console.log(sc(10));
// console.log(sc(1));
// console.log(sc(-1));

// function sc(floor) {
//   const jumpVoice = "Aa~ ";
//   const fellVoice = "Pa! ";
//   const finalVoice = "Aa! ";
//   if (floor <= 1) return "";
//   if (floor <= 6) return jumpVoice.repeat(floor - 1) + fellVoice + finalVoice;
//   return jumpVoice.repeat(floor - 1) + finalVoice;
// }
