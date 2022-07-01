function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (typeof n === "number" && n !== 0 && n >= 1 && n <= 1000000) {
    return 1 / n;
  } else if (n === 0) {
    throw new TypeError(`${n} doesn't have a reciprocal`);
  } else if (n <= 1 || n >= 1000000) {
    throw new RangeError();
  } else {
    throw new TypeError(`${n} isn't a number`);
  }
}

module.exports = {
  returnsThree,
  reciprocal,
};
