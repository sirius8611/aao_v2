function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number === "number") {
    return number % 2 === 1 || number % 2 === -1;
  } else {
    throw new Error();
  }
}

function myRange(min, max, step = 1) {
  let range = [];
  if (
    typeof min === "number" &&
    typeof max === "number" &&
    typeof step === "number"
  ) {
    for (let num = min; num <= max; num += step) {
      range.push(num);
    }
    return range;
  } else {
    throw new Error();
  }
}

module.exports = { isFive, isOdd, myRange };
