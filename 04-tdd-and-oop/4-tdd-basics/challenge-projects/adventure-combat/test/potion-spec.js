const { expect } = require("chai");

const { Player } = require("../class/player.js");
const { Room } = require("../class/room.js");
const { Item } = require("../class/item.js");
const { Food } = require("../class/food.js");
const { Potion } = require("../class/potion.js");

describe("Potion", function () {
  beforeEach(() => {
    potion = new Potion("health potion", "heals your wounds", 5);
  });
  it("should have name and description attributes", function () {
    expect(potion.name).to.equal("health potion");
    expect(potion.description).to.equal("heals your wounds");
    expect(potion.healthBoost).to.equal(5);
  });

  it("should be an instance of Item, Food, and Potion", function () {
    let item = new Item("rock", "just a simple rock");
    let food = new Food("sandwich", "pb and j");

    expect(potion instanceof Item).to.be.true;
    expect(potion instanceof Food).to.be.true;
    expect(potion instanceof Potion).to.be.true;

    expect(food instanceof Food).to.be.true;
    expect(food instanceof Item).to.be.true;
    expect(food instanceof Potion).to.be.false;

    expect(item instanceof Item).to.be.true;
    expect(item instanceof Potion).to.be.false;
  });

  it("can be eaten by a player", function () {
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(potion);
    expect(player.items.length).to.equal(1);
    player.eatItem("health potion");
    expect(player.items.length).to.equal(0);
  });

  it("should add health to player after being eaten", function () {
    let room = new Room("Test Room", "A test room");
    let player = new Player("player", room);

    player.items.push(potion);
    expect(player.health).to.equal(100);
    player.eatItem("health potion");
    expect(player.health).to.equal(105);
  });
});
