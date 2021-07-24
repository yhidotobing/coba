// const person = {
//   firstName: "Viggo",
//   lastName: "Mortensen",
//   fullName: () => {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   shoutName: function () {
//     setTimeout(() => {
//       console.log(this);
//       console.log(this.fullName());
//     }, 3000);
//   },
// };
// // console.log(person.fullName());
// // console.log(person.firstName);
// console.log(person.shoutName());

function multiTable(number) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}\n`;
  }
  return table;
}

console.log(multiTable(5));
