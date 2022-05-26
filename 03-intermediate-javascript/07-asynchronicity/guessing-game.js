const { maxHeaderSize } = require("http");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomFromInterval(min, max) {
  min = parseInt(min);
  max = parseInt(max);
  return Math.floor(Math.random() * max - min + 1) + min;
}

const playGame = () => {
  let min = 0;
  let max = 0;
  let targetNumber = 0;

  rl.question("Enter a min number: ", minResponse);

  function minResponse(minNum) {
    min = minNum;
    rl.question("Enter a max number: ", maxResponse);
  }

  function maxResponse(maxNum) {
    max = maxNum;
    targetNumber = getRandomFromInterval(min, max);
    console.log(`I'm thinking of a number between ${min} and ${max}`);

    rl.question("Enter a guess: ", guessResponse);
  }

  function guessResponse(guess) {
    guess = parseInt(guess);

    if (guess < targetNumber) {
      console.log("Too low.");
      rl.question("Enter a guess: ", guessResponse);
    } else if (guess > targetNumber) {
      console.log("Too high.");
      rl.question("Enter a guess: ", guessResponse);
    } else {
      console.log("Correct!");
      declareWinner();
    }
  }

  function declareWinner() {
    console.log("YOU WON.");
    rl.close();
  }
};

playGame();
