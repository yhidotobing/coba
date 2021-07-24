// let die1 = Math.floor(Math.random() * 6) + 1;

// function singSong() {
//   console.log("DO");
//   console.log("RE");
//   console.log("MI");
// }

// singSong();

// function greet() {
//   console.log("Hi");
// }

// function greet(person) {
//   console.log(`Hi ${person} Good Morning!`);
// }

// greet(3);

// DEFINE YOUR FUNCTION:
// function rant(message) {
//   console.log(message.toUpperCase());
//   console.log(message.toUpperCase());
//   console.log(message.toUpperCase());
// }

// rant("I hate beets");

// function greet(firstName, lastName) {
//   console.log(`Hey there, ${firstName}`);
// }

// greet("George");

// function repeat(str, numTimes) {
//   let kalimat = "";
//   for (let i = 0; i < numTimes; i++) {
//     kalimat += str;
//   }
//   console.log(kalimat);
// }

// repeat("Anjing ", 5);

// function isSnakeEyes(numberOne, numberTwo) {
//   if (numberOne === 1 && numberTwo === 1) {
//     console.log("Snake Eyes!");
//   } else {
//     console.log("Not Snake Eyes!");
//   }
// }

// isSnakeEyes("1", "1");

// function isShortsWeather(temperature) {
//   if (temperature >= 75) {
//     return true;
//   } else return false;
// }

// console.log(isShortsWeather(80));
// console.log(isShortsWeather(48));
// console.log(isShortsWeather(75));

// function lastElement(array){
//     if
// }

// let a = [2, 3, 4];

// console.log(a[a.length - 1]);

// let a = [2, 3, 4];
// let array = a[a.length - 1];

// console.log(a);
// console.log(array);

// function lastElement(array) {
//   if (array.length > 0) {
//     return array[array.length - 1];
//   }
//   return null;
// }

// console.log(lastElement([3, 4, 5]));

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function sumArray(num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   return sum;
// }

// const weekDay = new Array(7);
// weekDay[1] = "Monday";
// weekDay[2] = "Tuesday";
// weekDay[3] = "Wednesday";
// weekDay[4] = "Thursday";
// weekDay[5] = "Friday";
// weekDay[6] = "Saturday";
// weekDay[7] = "Sunday";
// function returnDay(day) {
//   if (day < 1 || day > 7) {
//     return null;
//   } else {
//     return weekDay[day];
//   }
// }

// console.log(returnDay(2));

function returnDay(day) {
  if (day < 1 || day > 7) return null;

  switch (day) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 7:
      return "Sunday";
  }
}

console.log(returnDay(1));
