const findMinimum = (arr) => {
  return arr.reduce((min, curr) => {
    return min < curr ? min : curr;
  }, arr[0]);
};

const runningSum = (arr) => {
  let sum = 0;
  let runningSum = [];
  for (const num of arr) {
    sum += num;
    runningSum.push(sum);
  }
  return runningSum;
};

const evenNumOfChars = (arr) => {
  const evens = arr.filter((str) => {
    return str.length % 2 == 0;
  });
  return evens.length;
};

const smallerThanCurr = (arr) => {
  let smaller = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (const num of arr) {
      if (arr[i] > num) {
        count++;
      }
    }
    smaller.push(count);
  }
  return smaller;
};

const twoSum = (arr, target) => {
  let twoSumSubsets = subsets(arr).filter((arr) => arr.length === 2);
  for (const subset of twoSumSubsets) {
    if (sum(subset) === target) {
      return true;
    }
  }
  return false;
};

function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  let last = arr[arr.length - 1];
  let subsArr = subsets(arr.splice(0, arr.length - 1));
  return subsArr.concat(subsArr.map((arr) => arr.concat(last)));
}

const sum = (arr) => {
  return arr.reduce((sum, curr) => {
    return sum + curr;
  }, 0);
};

const secondLargest = (arr) => {
  return arr.sort().reverse()[1];
};

const shuffle = (arr) => {
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
