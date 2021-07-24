// function mouthSize(animal) {
//   if (
//     animal === "ALLIGATOR".toLowerCase() ||
//     animal === "ALLIGATOR".toUpperCase()
//   ) {
//     return "small";
//   }
//   return "wide";
// }
// console.log(mouthSize("alligator"));
// console.log(mouthSize("ant bear"));
// console.log(mouthSize("ALLIGATOR"));

// const mouthSize = (animal) => {
//   return animal.toLowerCase() === "alligator" ? "small" : "wide";
// };

// console.log(mouthSize("alligator"));
// console.log(mouthSize("bear"));

// function digitize(n) {
//   for(let n = -1; n.length)
// }

// console.log(digitize([3, 4, 5, 6, 7, 8]));

// function digitize(n) {
//   return n.toString().split("").reverse().map(Number);
// }
// console.log(digitize(3456789));

function digitize(n) {
  let array = [];
  for (let i = 0; n.length - 1; i--) {
    array += n[i];
  }
  return array;
}

console.log(digitize(34567787));
