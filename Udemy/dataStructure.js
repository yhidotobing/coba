// const message = "Hello Yhido, How are you ?";

// let splitMessage = message.split("e");
// console.log(splitMessage);

// let includeMessage = message.includes("How");
// console.log(includeMessage);

// let replaceMessage = message.replace("Yhido", "Timo");
// console.log(replaceMessage);

// let includeSensitive = message.toLowerCase().includes("hello");
// console.log(includeSensitive);

// const yhido = "My Name is Yhido";
// const timo = "My Name is Timo";
// function tobing() {
//   return "Timo Tobing";
// }

// let template = `${yhido} and ${timo} and my Full name is ${tobing()}`;
// console.log(template);

// const fridge = ["Apple", "Orange", "Carrot", "Milk", "Cabbage"];

// let isAppleExist = "APPLE NYA ADA";
// fridge.map((item) => {
//   if (item.toUpperCase() === !"APPLE") {
//     isAppleExist = "APPLE TIDAK ADA";
//   }
// });
// console.log(isAppleExist);

// let mapFridge = fridge.map((buah) => buah);
// console.log(mapFridge);

// let joinFridge = mapFridge.join(", ");
// console.log(joinFridge);

// let splitFridge = joinFridge.split(",");
// console.log(splitFridge);

// let fruit = "Apel";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question() {
  rl.question("Whats your choice: ", (fruit) => {
    switch (fruit) {
      case "mangga":
        console.log(`You Choosed ${fruit}`);
        rl.close();
        break;
      case "jeruk":
        console.log(`You Choosed ${fruit}`);
        rl.close();
        break;

      case "manggis":
        console.log(`You Choosed ${fruit}`);
        rl.close();
        break;
      case "durian":
        console.log(`You Choosed ${fruit}`);
        rl.close();
        break;
      case "printer":
        console.log(`You Choosed ${fruit}`);
        rl.close();
        break;

      default:
        console.log(`Please choose 1 fruit :`);
        question();
        break;
    }
  });
}

question();
