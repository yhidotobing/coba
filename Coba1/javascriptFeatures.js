// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }

//   return Math.floor(Math.random() * numSides) + 1;
// }
// console.log(rollDie());

// function rollDie(numSides = 6) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }

//   return Math.floor(Math.random() * numSides) + 1;
// }
// console.log(rollDie());

// function greet(person, msg = "Hey There", punc = "!!!!!") {
//   return `${msg}, ${person} ${punc}`;
// }

// // console.log(greet("Hello", "Joaquin"));
// console.log(greet("Joaquin"));

// const maxNumber = Math.max(13, 3, 3, 3, 3, 3, 2, 12, 45);
// console.log(maxNumber);

// const nums = [13, 3, 3, 3, 3, 3, 2, 12, 45];
// console.log(Math.max(...nums));

// console.log("Hello");
// console.log(..."Hello");

// const cats = ["Blue", "Pussy", "Rasta"];
// const dogs = ["Alvin", "Aqilah"];

// const allpets = [cats, dogs];
// const allpetsx = [...cats, ...dogs];

// console.log(allpets);
// console.log(allpetsx);

// const hello = ["hello"];
// const helloSpread = [..."hello"];
// console.log(helloSpread);

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

// const felineSpread = { ...feline, color: "Black", Breed: "Bulldog" };
// console.log(felineSpread);

// const felineXCanine = { ...feline, ...canine };
// const canineXFeline = { ...canine, ...feline };
// console.log(felineXCanine);
// console.log(canineXFeline);

// const arrayX = { ...[2, 4, 6, 8] };
// console.log(arrayX);

// const stringSpread = { ..."Hello bro" };
// console.log(
//   "🚀 ~ file: javascriptFeatures.js ~ line 63 ~ stringSpread",
//   stringSpread
// );

const dataFromForm = {
  email: "yhidotobing@gmail.com",
  password: "123456",
  username: "yhidotobing",
};

const newUser = { ...dataFromForm, gender: "Male", address: "Medan" };
console.log(dataFromForm);
console.log(newUser);
