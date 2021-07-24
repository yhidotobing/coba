const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const birthyear = 1994;
let person = {
  name: "yhido",
  address: "Medan",
  age: currentYear - birthyear,
  "Full Name": "Yhido Tobing",
};

console.log(person.name, "Tobing");
console.log(person["Full Name"]);

if (person.age > 30) {
  console.log(person.name + "has been married");
} else {
  console.log(person.name + "is Single");
}
