// const arrays = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let array of arrays) {
//   console.log(array);
// }

// for (let i = 0; i < arrays.length; i++) {
//   console.log(arrays[i]);
// }

// function squareSum(numbers) {
//   let result = [];
//   const square = numbers.map((x) => x ** 2);
//   const sum = square.reduce((x, y) => x + y);
//   result += sum;
//   return result;
// }
// console.log(squareSum([]));
// console.log(squareSum([2, 2]));

var replaceDots = function (str) {
  return str.split(".").join("-");
};
console.log(replaceDots("abc.def.ghi"));
