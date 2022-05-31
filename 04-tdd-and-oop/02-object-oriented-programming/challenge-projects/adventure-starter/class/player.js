class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
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
    const roomItemIndex = room.items.indexOf(room.getItemByName(itemName));
    const takenItem = room.items.splice(roomItemIndex, 1);
    this.items.push(...takenItem);
  }

  dropItem(itemName) {
    const itemIndex = this.items.indexOf(this.getItemByName(itemName));
    const droppedItem = this.items.splice(itemIndex, 1);
    this.currentRoom.items.push(...droppedItem);
  }

  eatItem(itemName) {
    if (this.getItemByName(itemName).isFood) {
      let removalIdx = this.items.indexOf(this.getItemByName(itemName));
      this.items.splice(removalIdx, 1);
    } else {
      return "That's not food!";
    }
  }

  getItemByName(name) {
    return this.items.find((item) => item.name === name);
  }
}

module.exports = {
  Player,
};
