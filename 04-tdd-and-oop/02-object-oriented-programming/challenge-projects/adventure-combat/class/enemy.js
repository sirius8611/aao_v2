const { Character } = require("./character");

class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    const availableMoves = this.currentRoom.getExits();
    const newDirection = this.random(availableMoves);
    this.currentRoom = this.currentRoom.getRoomInDirection(newDirection);
    this.cooldown = 3000;
  }

  takeSandwich() {
    if (this.currentRoom.items.find((item) => item.name === "sandwich")) {
      this.items.push(this.currentRoom.getItemByName("sandwich"));
      console.log("Gee, thanks. Yum, yum.  I'll save this for later.");
    }
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = () => {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(() => {
      resetCooldown();
    }, this.cooldown);
  }

  act() {
    if (this.health <= 0) {
      this.die();
    } else if (this.cooldown > 0) {
      this.rest();
    } else if (this.attackTarget !== null) {
      // this.cooldown = 3000;
      this.attack();
    } else {
      this.scratchNose();
      this.takeSandwich();
      this.rest();
    }
  }

  attack() {
    console.log(`${this.name} attacks for ${this.strength} damage!`);
    this.attackTarget.applyDamage(this.strength);
    console.log(this.cooldown);
    this.cooldown = 3000;
    this.rest();
  }

  targetPlayer() {
    this.attackTarget = this.player;
    this.act();
  }

  applyDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    } else {
      this.targetPlayer();
    }
  }

  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);
  }

  random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

module.exports = {
  Enemy,
};
