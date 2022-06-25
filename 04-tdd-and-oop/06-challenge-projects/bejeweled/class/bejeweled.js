const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {
  constructor() {
    this.playerTurn = "O";

    // Initialize this
    // let fruit = ["🥝", "🍓", "🥥", "🍇", "🍊"]

    this.grid = Bejeweled.generateGrid();
    this.cursor = new Cursor(8, 8);

    Screen.initialize(8, 8);
    Screen.setGridlines(false);

    Screen.addCommand(
      "up",
      "moves cursor up",
      this.cursor.up.bind(this.cursor)
    );
    Screen.addCommand(
      "down",
      "moves cursor down",
      this.cursor.down.bind(this.cursor)
    );
    Screen.addCommand(
      "left",
      "moves cursor left",
      this.cursor.left.bind(this.cursor)
    );
    Screen.addCommand(
      "right",
      "moves cursor right",
      this.cursor.right.bind(this.cursor)
    );

    Screen.addCommand("return", "selects the first element in swap", this.swap);

    this.populateGrid();
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  swap() {
    let selection = this.cursor.selected.call(this.cursor);

    if (selection()) {
      let firstRowPos = this.cursor.selectedRow;
      let firstColPos = this.cursor.selectedCol;

      let secondRowPos = this.cursor.row;
      let secondColPos = this.cursor.col;

      let first = this.grid[firstRowPos][firstColPos];
      let second = this.grid[secondRowPos][secondColPos];

      this.grid[firstRowPos][firstColPos] = second;
      this.grid[secondRowPos][secondColPos] = first;
    }
    // this.grid[this.cursor.row][this.cursor.col] = symbol;
    // Screen.setGrid(this.cursor.row, this.cursor.col, symbol);
    // let isWinner = TTT.checkWin(this.grid);
    // if (isWinner) {
    //   TTT.endGame(isWinner);
    // }
  }

  static generateGrid() {
    let arr = [];
    for (let row = 0; row < 8; row++) {
      arr.push(["", "", "", "", "", "", "", ""]);
    }
    return arr;
  }

  populateGrid() {
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        let randJewel = Bejeweled.getRandomJewel();
        this.grid[row][col] = randJewel;
        console.log(randJewel);
        Screen.setGrid(row, col, randJewel);
      }
    }
  }

  static getRandomJewel() {
    let allFruit = Bejeweled.fruit();
    return allFruit[[Math.floor(Math.random() * allFruit.length)]];
  }

  static fruit() {
    return ["🍇", "🍊", "🍉", "🍒", "🥥"];
  }

  static checkForMatches(grid) {
    // Fill this in
  }
}

module.exports = Bejeweled;

let b = new Bejeweled();
console.log(b.grid);
