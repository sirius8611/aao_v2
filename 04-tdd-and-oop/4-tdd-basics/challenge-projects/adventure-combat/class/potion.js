const { Food } = require("./food");

class Potion extends Food {
  constructor(name, description, healthBoost) {
    super(name, description);
    this.isFood = true;
    this.isPotion = true;
    this.healthBoost = healthBoost;
  }
}

module.exports = {
  Potion,
};
