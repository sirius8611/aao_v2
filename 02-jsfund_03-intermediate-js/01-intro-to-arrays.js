//////////////////////////////////////////////////////////
// Problem Solving II
//////////////////////////////////////////////////////////

function longestName(names) {
  // Set the first name to be the longest
  let currentLongest = names[0];

  // Check each other name in the array starting from the second
  for (let i = 1; i < names.length; i++) {
    // If the name we're checking is longer than our
    // current longest, set that name to be the new longest
    if (names[i].length > currentLongest.length) {
      currentLongest = names[i];
    }
  }

  return currentLongest;
}

testNames = [
  "James",
  "Patricia",
  "Michael",
  "Elizabeth",
  "Christopher",
  "Sarah",
  "Margaret",
  "Kenneth",
  "Stephanie",
  "Jonathan",
  "Jeremy",
  "Samantha",
  "Alexander",
  "Catherine",
  "Benjamin",
];

// console.log(longestName(testNames)); // "Christopher"

//////////////////////////////////////////////////////////
// Intro to Arrays
//////////////////////////////////////////////////////////

function wordWithinArray(array, word) {
  return array.indexOf(word) !== -1;
}

// console.log(
//   wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
// ); //=> true

// console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "camel")); //=> true

// console.log(
//   wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
// ); //=> false

// console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "panther")); //=> false

function firstAndLast(array) {
  let len = array.length - 1;
  let first = array[0];
  let last = array[len];
  return array.length % 2 === 0 ? first + last : first - last;
}

// console.log(firstAndLast([1, 2, 3, 4])); // 5
// console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
// console.log(firstAndLast([12, 5])); // 17
// console.log(firstAndLast([12])); // 0
// console.log(firstAndLast([7, 11, 3])); // 4

function combineArray(array1, array2) {
  return array1.concat(array2);
}

// console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
// console.log(combineArray([17, 5], [6, 7])); // => [17, 5, 6, 7]

function threeIncreasing(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let count = 1;
    for (let j = i; j < array.length; j++) {
      if (count === 3) {
        return true;
      }
      if (array[j] + 1 === array[j + 1]) {
        count++;
      } else {
        break;
      }
    }
  }
  return false;
}

// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // true
// console.log(threeIncreasing([2, 7, 8, 9])); // true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // false
// console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8])); // false

function myIncludes(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}

// console.log(myIncludes(["a", "b", "c", "e"], "c")); // true
// console.log(myIncludes(["a", "b", "c", "e"], "a")); // true
// console.log(myIncludes(["a", "b", "c", "e"], "z")); // false
// console.log(myIncludes([43, -7, 11, 13], 11)); // true
// console.log(myIncludes([43, -7, 11, 13], 1)); // false

function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

// console.log(myIndexOf(["a", "b", "c", "e"], "c")); // 2
// console.log(myIndexOf(["a", "b", "c", "e"], "e")); // 3
// console.log(myIndexOf(["a", "b", "c", "e"], "z")); // -1
// console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
// console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30

function productWithReduce(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
}

// console.log(productWithReduce([10, 3, 5, 2])); // 300
// console.log(productWithReduce([4, 3])); // 12

function doubler(array) {
  let doubled = [];
  for (let i = 0; i < array.length; i++) {
    doubled.push(array[i] * 2);
  }
  return doubled;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
