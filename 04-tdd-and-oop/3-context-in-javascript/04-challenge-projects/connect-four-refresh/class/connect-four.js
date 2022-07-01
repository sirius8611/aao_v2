const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

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

    Screen.addCommand(
      "x",
      "adds X to the board",
      ConnectFour.move.bind(this, "X")
    );
    Screen.addCommand(
      "o",
      "adds O to the board",
      ConnectFour.move.bind(this, "O")
    );

    Screen.render();
  }

  static checkWin(grid) {
    if (ConnectFour.isEmpty(grid)) {
      return false;
    }

    let isRowWin = ConnectFour.rowWin(grid);
    if (isRowWin) {
      return isRowWin;
    }

    let isColWin = ConnectFour.colWin(grid);
    if (isColWin) {
      return isColWin;
    }

    let isDiagWin = ConnectFour.diagWin(grid);
    if (isDiagWin) {
      return isDiagWin;
    }

    let tied = ConnectFour.isFilled(grid);
    if (tied) {
      return "T";
    }

    if (ConnectFour.anyEmpty(grid)) {
      return false;
    }
  }

  static endGame(winner) {
    if (winner === "O" || winner === "X") {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === "T") {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

  static move(symbol) {
    let row = ConnectFour.topRowInCol(this.grid, this.cursor.col);

    this.grid[row][this.cursor.col] = symbol;

    Screen.setGrid(row, this.cursor.col, symbol);

    let isWinner = ConnectFour.checkWin(this.grid);
    if (isWinner) {
      ConnectFour.endGame(isWinner);
    }
  }

  static topRowInCol(grid, col) {
    const column = ConnectFour.transpose(grid)[col].reverse();
    for (let i = 0; i < column.length; i++) {
      if (column[i] === " ") {
        return column.length - 1 - i;
      }
    }
    return false;
  }

  static rowWin(grid) {
    for (let row = 0; row < grid.length; row++) {
      let allFour = ConnectFour.fourInARow(grid[row]);
      if (allFour === "O" || allFour === "X") {
        return allFour;
      }
    }
    return false;
  }

  static colWin(grid) {
    let cols = ConnectFour.cols(grid);
    for (let row = 0; row < cols.length; row++) {
      let fourInARow = ConnectFour.fourInARow(cols[row]);
      if (fourInARow) {
        return fourInARow;
      }
    }
    return false;
  }

  static diagWin(grid) {
    let diags = ConnectFour.allDiags(grid);
    for (let row = 0; row < diags.length; row++) {
      let fourInARow = ConnectFour.fourInARow(diags[row]);
      if (fourInARow) {
        return fourInARow;
      }
    }
    return false;
  }

  static allDiags(grid) {
    const downDiags = ConnectFour.downDiags(grid).filter(
      (arr) => arr.length > 3
    );
    const upDiags = ConnectFour.upDiags(grid).filter((arr) => arr.length > 3);
    return [...downDiags, ...upDiags];
  }

  static downDiags(grid) {
    let diags = [];
    for (let row = 0; row < grid.length; row++) {
      diags.push(ConnectFour.diag(grid, [row, 0], [1, 1]));
    }
    for (let col = 1; col < grid[0].length; col++) {
      diags.push(ConnectFour.diag(grid, [0, col], [1, 1]));
    }
    return diags;
  }

  static upDiags(grid) {
    let diags = [];
    for (let row = 0; row < grid.length; row++) {
      diags.push(ConnectFour.diag(grid, [row, 0], [-1, 1]));
    }
    for (let col = 1; col < grid[0].length; col++) {
      diags.push(ConnectFour.diag(grid, [grid.length - 1, col], [-1, 1]));
    }
    return diags;
  }

  static diag(grid, initalPos, dirs) {
    let [x_dir, y_dir] = dirs;
    let [row, col] = initalPos;
    let diag = [grid[row][col]];
    while (ConnectFour.valid_pos(grid, row + x_dir, col + y_dir)) {
      [row, col] = [row + x_dir, col + y_dir];
      diag.push(grid[row][col]);
    }
    return diag;
  }

  static fourInARow(arr) {
    let first = 0;
    let count = 1;
    let next = first + 1;

    while (next < arr.length) {
      if (arr[first] === arr[next] && arr[first] != " ") {
        count++;
        if (count >= 4) {
          return arr[first];
        }
      } else {
        first = next;
        count = 1;
      }
      next++;
    }
    return false;
  }

  static valid_pos(grid, row, col) {
    return 0 <= row && row < grid.length && 0 <= col && col < grid[0].length;
  }

  static cols(grid) {
    return ConnectFour.transpose(grid);
  }

  static transpose(grid) {
    let transposed = [];
    for (let col = 0; col < grid[0].length; col++) {
      let cols = [];
      for (let row = 0; row < grid.length; row++) {
        cols.push(grid[row][col]);
      }
      transposed.push(cols);
    }
    return transposed;
  }

  static arrEqual(arr) {
    if (arr.every((el) => el === arr[0] && el !== " ")) {
      return arr[0];
    } else {
      return false;
    }
  }

  static isEmpty(grid) {
    let empty = true;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        empty = empty && grid[row][col] === " ";
      }
    }
    return empty;
  }

  static isFilled(grid) {
    let filled = true;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        filled = filled && grid[row][col] != " ";
      }
    }
    return filled;
  }

  static anyEmpty(grid) {
    let any = false;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        any = any || grid[row][col] === " ";
      }
    }
    return any;
  }
}

module.exports = ConnectFour;
