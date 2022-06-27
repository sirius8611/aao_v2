const Screen = require("./screen");

class Cursor {
  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.selectedRow1 = null;
    this.selectedCol1 = null;
    this.selectedRow2 = null;
    this.selectedCol2 = null;

    this.gridColor = "black";
    this.cursorColor = "white";
    this.selectedColor = "blue";
  }

  pos() {
    return [this.row, this.col];
  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    // console.log(this);
    this.resetBackgroundColor();
    if (this.valid_pos(this.row - 1, this.col)) {
      // Move cursor up
      this.row -= 1;
    }

    this.setBackgroundColor();
    Screen.render();
  }

  down() {
    // console.log(this);
    this.resetBackgroundColor();
    if (this.valid_pos(this.row + 1, this.col)) {
      // Move cursor down
      this.row += 1;
    }
    this.setBackgroundColor();
    Screen.render();
  }

  left() {
    // console.log(this);
    this.resetBackgroundColor();
    if (this.valid_pos(this.row, this.col - 1)) {
      // Move cursor left
      this.col -= 1;
    }
    this.setBackgroundColor();
    Screen.render();
  }

  right() {
    // console.log(this);
    this.resetBackgroundColor();
    if (this.valid_pos(this.row, this.col + 1)) {
      // Move cursor right
      this.col += 1;
    }

    this.setBackgroundColor();
    Screen.render();
  }

  valid_pos(row, col) {
    return 0 <= row && row < this.numRows && 0 <= col && col < this.numCols;
  }
}

module.exports = Cursor;
