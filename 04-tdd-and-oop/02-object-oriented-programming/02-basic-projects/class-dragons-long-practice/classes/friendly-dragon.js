const Dragon = require("./dragon");

class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }

  hasLifeGoals() {
    this.lifeGoals.forEach((goal) => {
      console.log(`${this.name} likes to ${goal}.`);
    });
  }

  helpsPeople() {
    console.log(`${this.name} helps their friend ${this.friend}.`);
  }
}

const toothless = new FriendlyDragon(
  "Toothless",
  "black",
  [
    "save the town of Burke",
    "fly with a kid on his back",
    "hang out with Vikings",
  ],
  "Hiccup"
);
console.log(toothless);
toothless.hasLifeGoals();
console.log(toothless.helpsPeople());
console.log(toothless.breathesFire());

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = FriendlyDragon;
} catch {
  module.exports = null;
}
