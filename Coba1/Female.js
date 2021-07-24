const Human = require("./class");

class Female extends Human {
  constructor(name) {
    super("Female");
    this.name = name;
  }
}

module.exports = Female;
