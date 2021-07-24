// Make Class Human
class Human {
  constructor(name, gender, city) {
    this.name = name;
    this.gender = gender;
    this.city = city;
  }

  //Instance Function
  identity() {
    return `${this.identityx()}, ${this.name} is a ${
      this.gender
    }nese and from ${this.city} will come to my house `;
  }
  identityx() {
    return `${this.name} ngantuk`;
  }
}

// Instance Method
Human.prototype.salam = function () {
  return `Hello, ${this.name}`;
};

//Static Method
Human.address = function () {
  return `I live in medan`;
};

module.exports = Human;

// class Hobby {
//   constructor(hobby, strength, weakness) {
//     this.hobby = hobby;
//     this.strength = strength;
//     this.weakness = weakness;
//   }
//   hobbyX() {
//     return `${this.name} like ${this.hobby}, his strenght is ${this.strength} and have a weakness ${this.weakness}`;
//   }
// }

// let freddy = new Human("Freddy", "Batak", "Medan");
// console.log(freddy.salam());

// let yhido = new Human("Yhido", "Batak", "Jakarta");
// console.log(yhido.identity());

// let freddy = new Hobby("Playing games", "Detail", "perfectionist");
// console.log(freddy.hobbyX());
// let yhido = new Human("Yhido", "Male", "Medan");
// console.log(yhido.identityx());
