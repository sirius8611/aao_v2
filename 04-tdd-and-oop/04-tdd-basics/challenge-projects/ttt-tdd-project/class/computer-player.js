const { checkWin } = require("./ttt.js");

class ComputerPlayer {
  static getValidMoves(grid) {
    let validMoves = [];
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (grid[row][col] === " ") {
          validMoves.push({ row: row, col: col });
        }
      }
    }
    return validMoves;
  }

  static randomMove(grid) {
    let validMoves = this.getValidMoves(grid);
    return validMoves[Math.floor(Math.random() * validMoves.length)];
  }

  static getWinningMoves(grid, symbol) {
    let winningMoves = [];

    let validMoves = this.getValidMoves(grid);

    validMoves.forEach((move) => {
      let testGrid = grid.slice();
      testGrid[move.row][move.col] = symbol;
      let winningState = checkWin(testGrid);
      console.log(testGrid);
      if (winningState) {
        winningMoves.push(move);
      }
      testGrid = {};
    });
    return winningMoves;
  }

  static getSmartMove(grid, symbol) {}
}

module.exports = ComputerPlayer;

cpu = new ComputerPlayer();
grid = [
  ["X", "X", " "],
  ["O", " ", " "],
  ["O", " ", " "],
];
console.log(ComputerPlayer.getWinningMoves(grid, "X"));
