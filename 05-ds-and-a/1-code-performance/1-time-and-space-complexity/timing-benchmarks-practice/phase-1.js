// Adds up positive integers from 1-n
function addNums(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function range(min, max) {
  let range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  return range;
}

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  return range(1, n).reduce((sum, curr) => sum + addNums(curr), 0);
}

module.exports = [addNums, addManyNums];
