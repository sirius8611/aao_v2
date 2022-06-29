const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
// function addNums10(n, increment) {
//   return range(1, n, 10).reduce((sum, curr) => sum + curr, 0);
// }

// function addNumsIncr(increment, cb) {
//   let nums = [];
//   let val = 1;
//   for (let i = 0; i < 10; i++) {
//     nums.push(cb.call(null, val));
//     val += increment;
//   }
//   return nums;
// }

// function addNums10(increment, addNums) {
//   return addNumsIncr(increment, addNums);
// }

// // Runs `addManyNums` in 10 increasing increments
// function addManyNums10(increment, addManyNums) {
//   return addNumsIncr(increment, addManyNums);
// }

function addNums10(increment) {
  let nums = [];
  let val = 0;
  for (let i = 0; i < 10; i++) {
    val += increment;
    nums.push(addNums(val));
  }
  return nums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let nums = [];
  let val = 0;
  for (let i = 0; i < 10; i++) {
    val += increment;
    nums.push(addManyNums(val));
  }
  return nums;
}

module.exports = [addNums10, addManyNums10];
