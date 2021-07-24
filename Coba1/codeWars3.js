// function getRealFloor(n) {
//   if (n <= 0) {
//     return n;
//   }
//   if (n <= 13) {
//     return n - 1;
//   }
//   return n - 2;
// }

// console.log(getRealFloor(1));
// console.log(getRealFloor(0));
// console.log(getRealFloor(5));
// console.log(getRealFloor(15));
// console.log(getRealFloor(-3));

const getRealFloor = (n) => {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
};

console.log(getRealFloor(1));
console.log(getRealFloor(0));
console.log(getRealFloor(5));
console.log(getRealFloor(15));
console.log(getRealFloor(-3));
