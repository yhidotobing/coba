//Arrow Function
function adderFunc(x, y) {
  return x + y;
}

const adderArrowReturn = (x, y) => x + y;

const adderArrow = (x, y) => {
  return x + y;
};

const adderArrowConsole = (x, y) => {
  console.log(x + y);
};

let adder1 = adderFunc(10, 100);
let adder2 = adderArrowReturn(10, 100);
let adder3 = adderArrow(10, 50);

console.log(`${adder1}, ${adder2}, ${adder3}`);

//Currying Function

function substractFunc(x, y) {
  return x - y;
}

const substractCurryreturn = (x) => (y) => x > y ? x - y : y - x;

const substractCurryConsole = (x) => (y, z) => {
  return x + y + z;
};

let substract1 = substractCurryreturn(10, 5);
let substract2 = substractCurryConsole(1, 1, 1);

let number = substractCurryreturn(50000);
let numberConsole = substractCurryConsole(3);
let numberConsole1 = numberConsole(1, 1);
let number1 = number(25000);
let number2 = number(30000);

console.log(`${number1}, ${number2}, ${numberConsole1}`);
