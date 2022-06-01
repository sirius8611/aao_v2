const { Item } = require("./item");

class Food extends Item {
  constructor(name, description) {
    super(name, description);
    this.isFood = true;
  }
}

try {
  module.exports = { Food };
} catch {
  module.exports = null;
}
