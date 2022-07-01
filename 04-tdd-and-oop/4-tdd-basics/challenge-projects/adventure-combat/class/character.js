class Character {
  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.strength = 10;
    this.health = 100;
  }

  applyDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    this.dropAllItems();
    this.currentRoom = null;
  }

  dropAllItems() {
    while (this.items.length > 0) {
      const droppedItem = this.items.pop();
      this.currentRoom.addItem(droppedItem);
    }
  }
}

module.exports = {
  Character,
};
