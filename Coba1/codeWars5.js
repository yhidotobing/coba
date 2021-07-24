function squareSum(numbers) {
  const square = numbers.map((x) => x ** 2);
  const sum = square.reduce((x, y) => x + y, 0);
  return sum;
}
console.log(squareSum([]));
console.log(squareSum([2, 2]));
