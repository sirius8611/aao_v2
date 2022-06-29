const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  console.time("addNums10Timer");
  let nums = [];
  let val = 0;
  for (let i = 0; i < 10; i++) {
    val += increment;
    nums.push(addNums(val));
  }
  console.timeEnd("addNums10Timer");
  return nums;
  // Then, add timing code

  // Your code here
}

function addManyNums10Timing(increment) {
  console.time("addManyNums10Timer");
  let nums = [];
  let val = 0;
  for (let i = 0; i < 10; i++) {
    val += increment;
    nums.push(addManyNums(val));
  }
  console.timeEnd("addManyNums10Timer");
  return nums;
  // Then, add timing code

  // Your code here
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
