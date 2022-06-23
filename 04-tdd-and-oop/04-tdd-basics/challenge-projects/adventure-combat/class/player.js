const { Character } = require("./character");
const { Enemy } = require("./enemy");
const { Food } = require("./food");

class Player extends Character {
  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    const room = this.currentRoom;
    const takenItem = room.removeItem(room.getItemByName(itemName));
    this.addItem(...takenItem);
  }

  eatItem(itemName) {
    if (this.getItemByName(itemName).isFood) {
      this.removeItem(this.getItemByName(itemName));
    } else {
      return "That's not food!";
    }
  }

  getItemByName(name) {
    return this.items.find((item) => item.name === name);
  }

  dropItem(itemName) {
    const droppedItem = this.removeItem(this.getItemByName(itemName));
    this.currentRoom.addItem(...droppedItem);
  }

  hit(name) {
    if (this.currentRoom.getEnemyByName(name)) {
      const enemy = this.currentRoom.getEnemyByName(name);
      enemy.applyDamage(this.strength);
      console.log(this.health, enemy.health);
    } else {
      console.log(`${name} isn't in the room!`);
    }
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const itemIndex = this.items.indexOf(item);
    return this.items.splice(itemIndex, 1);
  }
}

module.exports = {
  Player,
};
