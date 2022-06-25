const Screen = require("./screen");

class Cursor {
  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.selectedRow = null;
    this.selectedCol = null;

    this.gridColor = "black";
    this.cursorColor = "white";
    this.selectedColor = "blue";
  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  setSelectedColor() {
    Screen.setBackgroundColor(this.row, this.col, this.selectedColor);
  }

  selected() {
    this.setSelectedColor();
    if (this.selectedRow === null && this.selectedCol === null) {
      this.selectedRow = this.row;
      this.selectedCol = this.col;
      return false;
    } else {
      let selected = [this.selectedRow, this.selectedCol];
      this.selectedRow = null;
      this.selectedCol = null;
      return selected;
    }
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
