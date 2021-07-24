// let totalEggs = 0;
// function collectEggs() {
//   totalEggs = 6;
//   console.log(totalEggs);
// }
// console.log(totalEggs);
// collectEggs();

// const bird = "Scarlet Macaw";

// function birdWatch() {
//   const bird = "Great Blue Heron";
//   console.log(bird);
// }
// birdWatch();

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = "Hiii";
// }
// console.log(radius);
// console.log(PI);

// for (let i = 0; i < 5; i++) {
//   var msg = "askdfksak";
//   //   console.log(msg);
// }
// console.log(msg);

// function bankRobbery() {
//   const heroes = ["spiderman", "Wolverine", "Black panther"];
//   function cryForHelp() {
//     let color = "purple";
//     function inner() {
//       for (let hero of heroes) {
//         console.log(`Please help us, ${hero.toUpperCase()}`);
//       }
//     }
//     inner();
//   }
//   cryForHelp();
// }
// bankRobbery();

// const square = function (x, y) {
//   return x * y;
// };
// console.log(square(2, 3));

// const square = function (x) {
//   return x * x;
// };
// console.log(square(4));
// console.log(square(3));

// let greet = function () {
//   console.log("Hi");
// };

// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// console.log(callTenTimes(rollDie));

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log(rand);
//       console.log("Congrats, Iam Good Function");
//       console.log("You win a Million dollars");
//     };
//   } else {
//     return function () {
//       console.log(rand);
//       console.log("You Have been infected by a computer virus");
//       console.log("Stop Trying to close this windows");
//       console.log("Stop Trying to close this windows");
//       console.log("Stop Trying to close this windows");
//       console.log("Stop Trying to close this windows");
//       console.log("Stop Trying to close this windows");
//     };
//   }
// }
// console.log(makeMysteryFunc());

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// function numberMinMax(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// const isChild = numberMinMax(0, 10);
// const isAdult = numberMinMax(18, 50);

// console.log(isChild(30));
// console.log(isAdult(30));

// function multiply(x,y){
//   return x
// }

// const myMath = {
//   PI: 3.14159,
//   square(num) {
//     return num * num;
//   },
//   cube(num) {
//     return num ** 3;
//   },
// };

// console.log(myMath.PI);
// console.log(myMath.square(3));
// console.log(myMath.cube(3));

// const square = {
//   area(side) {
//     return side * side;
//   },
//   perimeter(side) {
//     return side * 4;
//   },
// };

// console.log(square.area(10));
// console.log(square.perimeter(10));

// const cat = {
//   name: "Blue steele",
//   color: "Grey",
//   breed: "Scottish fold",
//   meow() {
//     console.log(`${this.name} says MEOWWW`);
//   },
// };

// const meow2 = cat.meow;

// const cat = {
//   name: "Yhido Tobing",
//   color: "Blue",
//   breed: "American",
//   meow() {
//     return `${this.name} color ${this.color} breed ${this.breed}`;
//   },
// };

// const meoww = cat.meow();

// console.log(meoww);

// const hen = {
//   name: "Helen",
//   eggCount: 0,
//   layAnEgg() {
//     this.eggCount++;
//     return "EGG";
//   },
// };
// console.log(hen.name);
// console.log(hen.eggCount);
// console.log(hen.layAnEgg());
// console.log(hen.layAnEgg());
// console.log(hen.eggCount);

// try {
//   hello.toUpperCase();
// } catch {
//   console.log(`Error!!`);
// }

// hello.toUpperCase();

// console.log("After");

// function yell(msg) {
//   try {
//     console.log(msg.toUpperCase().repeat(3));
//   } catch (e) {
//     console.log("Please pass a string next time");
//   }
// }

function sc(floor) {
  if (floor > 1) {
    const app = "Aa~";
    for (let i = 2; i <= 10; i++) {
      console.log(app);
    }
  }
}

sc(3);
