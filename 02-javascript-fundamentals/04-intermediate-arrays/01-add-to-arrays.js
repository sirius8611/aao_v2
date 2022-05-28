function addToArray(location, element, arr) {
  if (["FRONT", "BACK"].includes(location)) {
    if (location === "FRONT") {
      arr.unshift(element);
    } else if (location === "BACK") {
      arr.push(element);
    }
  } else {
    console.log("ERROR");
  }
}

// testArray = [1, 2, 3];

// addToArray("FRONT", 0, testArray);
// console.log(testArray); // [0,1,2,3]

// addToArray("BACK", 4, testArray);
// console.log(testArray); // [0,1,2,3,4]

// addToArray("MIDDLE", 4, testArray); // "ERROR"
// console.log(testArray); // [0,1,2,3,4]

const range = function (min, max) {
  let range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  return range;
};

// console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
// console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
// console.log(range(10, 3)); // []

const evenNumbers = function (num) {
  let evenNumbers = [];
  i = 2;
  while (i < num) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
    i++;
  }
  return evenNumbers;
};

// console.log(evenNumbers(7)); // [ 2, 4, 6 ]
// console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
// console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]

const logBetweenStepper = function (min, max, step) {
  let i = min;

  while (i <= max) {
    if (i % step === 0) {
      console.log(i);
    }
    i++;
  }
};
// Examples:
// logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9

// logBetweenStepper(-10, 15, 5); // prints out:
// -10
// -5
// 0
// 5
// 10
// 15

const factorsOf = function (num) {
  let factors = [];
  let i = 1;
  while (i < num) {
    if (num % i === 0) {
      factors.push(i);
    }
    i++;
  }
  return factors;
};

// console.log(factorsOf(5)); // [ 1, 5 ]
// console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
// console.log(factorsOf(9)); // [ 1, 3, 9 ]
// console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
// console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
// console.log(factorsOf(2017)); // [ 1, 2017 ]

const fizzBuzz = function (max) {
  let fizzBuzz = [];
  i = 0;
  while (i < max) {
    if (!(i % 5 === 0 && i % 3 === 0)) {
      if (i % 3 === 0) {
        fizzBuzz.push(i);
      }
      if (i % 5 === 0) {
        fizzBuzz.push(i);
      }
    }
    i++;
  }
  return fizzBuzz;
};

// console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
// console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

const pitPat = function (max) {
  let pitPat = [];
  i = 0;
  while (i <= max) {
    if (!(i % 4 === 0 && i % 6 === 0)) {
      if (i % 6 === 0) {
        pitPat.push(i);
      }
      if (i % 4 === 0) {
        pitPat.push(i);
      }
    }
    i++;
  }
  return pitPat;
};

// console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
// console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]

const doubleSequence = function (base, length) {
  let doubleSequence = [];
  for (i = 0; i < length; i++) {
    doubleSequence.push(base * 2 ** i);
  }
  return doubleSequence;
};
// console.log(doubleSequence(7, 3)); // [7, 14, 28]
// console.log(doubleSequence(3, 5)); // [3, 6, 12, 24, 48]
// console.log(doubleSequence(5, 3)); // [5, 10, 20]
// console.log(doubleSequence(5, 4)); // [5, 10, 20, 40]
// console.log(doubleSequence(5, 0)); // [ ]

function tripleSequence(start, length) {
  let tripleSequence = [];
  for (i = 0; i < length; i++) {
    tripleSequence.push(start * 3 ** i);
  }
  return tripleSequence;
}

// console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
// console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]

let unique = function (arr) {
  newArray = [];
  for (i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

// console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
// console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
// console.log(unique(["a", "b", "c", "b"])); // ['a', 'b', 'c']

function yeller(words) {
  newArr = [];
  for (i = 0; i < words.length; i++) {
    newArr.push(`${words[i].toUpperCase()}!`);
  }
  return newArr;
}
// console.log(yeller(["hello", "world"])); // [ 'HELLO!', 'WORLD!' ]
// console.log(yeller(["kiwi", "orange", "mango"])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

function tripler(nums) {
  newArr = [];
  for (i = 0; i < nums.length; i++) {
    newArr.push(nums[i] * 3);
  }
  return newArr;
}
// console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

function longWords(words) {
  let longWords = [];
  for (i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      longWords.push(words[i]);
    }
  }
  return longWords;
}

// console.log(longWords(["bike", "skateboard", "scooter", "moped"])); // [ 'skateboard', 'scooter' ]
// console.log(longWords(["couscous", "soup", "ceviche", "solyanka", "taco"])); // [ 'couscous', 'ceviche', 'solyanka' ]

function chooseyEndings(words, suffix) {
  let suffixEndings = [];
  for (i = 0; i < words.length; i++) {
    if (words[i].endsWith(suffix)) {
      suffixEndings.push(words[i]);
    }
  }
  return suffixEndings;
}

// console.log(
//   chooseyEndings(
//     ["family", "hound", "catalyst", "fly", "timidly", "bond"],
//     "ly"
//   )
// );
// // [ 'family', 'fly', 'timidly' ]

// console.log(
//   chooseyEndings(
//     ["family", "hound", "catalyst", "fly", "timidly", "bond"],
//     "nd"
//   )
// );
// // [ 'hound', 'bond' ]

// console.log(chooseyEndings(["simplicity", "computer", "felicity"], "icity"));
// // [ 'simplicity', 'felicity' ]

// console.log(chooseyEndings(["simplicity", "computer", "felicity"], "ily"));
// // [ ]

// console.log(chooseyEndings(17, "ily"));
// // [ ]

function commonFactors(num1, num2) {
  const num1Factors = factorsOf(num1);
  const num2Factors = factorsOf(num2);

  let commonFactors = [];
  for (i = 0; i < num1Factors.length; i++) {
    if (num2Factors.includes(num1Factors[i])) {
      commonFactors.push(num1Factors[i]);
    }
  }
  return commonFactors;
}

// console.log(commonFactors(50, 30)); // [1, 2, 5, 10]
// console.log(commonFactors(8, 4)); // [1, 2, 4]
// console.log(commonFactors(4, 8)); // [1, 2, 4]
// console.log(commonFactors(12, 24)); // [1, 2, 3, 4, 6, 12]
// console.log(commonFactors(22, 44)); // [1, 2, 11, 22]
// console.log(commonFactors(7, 9)); // [1]

function adjacentSums(arr) {
  let adjacentSums = [];
  for (i = 0; i < arr.length - 1; i++) {
    adjacentSums.push(arr[i] + arr[i + 1]);
  }
  return adjacentSums;
}

// console.log(adjacentSums([3, 8, 7, 1])); // [ 11, 15, 8 ]
// console.log(adjacentSums([10, 5, 4, 3, 9])); // [ 15, 9, 7, 12 ]
// console.log(adjacentSums([2, -3, 3])); // [-1, 0]

function fibonacciSequence(num) {
  if (num === 0) {
    return [];
  }

  if (num === 1) {
    return [1];
  }

  let fibonacciSequence = [];
  fibonacciSequence.push(1);
  fibonacciSequence.push(1);

  for (i = 2; i < num; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 2] + fibonacciSequence[i - 1]);
  }
  return fibonacciSequence;
}

// console.log(fibonacciSequence(4)); // [ 1, 1, 2, 3 ]
// console.log(fibonacciSequence(5)); // [ 1, 1, 2, 3, 5 ]
// console.log(fibonacciSequence(8)); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
// console.log(fibonacciSequence(0)); // [ ]
// console.log(fibonacciSequence(1)); // [ 1 ]
// console.log(fibonacciSequence(2)); // [ 1, 1 ]

function isPrime(number) {
  let i = 2;
  while (i < number) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

function pickPrimes(arr) {
  let primes = [];
  for (i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primes.push(arr[i]);
    }
  }
  return primes;
}

// console.log(pickPrimes([2, 3, 4, 5, 6])); // [2, 3, 5]
// console.log(pickPrimes([101, 20, 103, 2017])); // [101, 103, 2017]

function greatestFactorArray(arr) {
  let greatestFactors = [];
  for (i = 0; i < arr.length; i++) {
    let factors = factorsOf(arr[i]);
    let largestFactor = factors[factors.length - 1];
    greatestFactors.push(largestFactor);
  }
  return greatestFactors;
}

// How are 7, 9 , 3, and 21 in the results arrays when they specifically stated they should be?

// console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
// console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]

function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function summationSequence(start, length) {
  let summationSequence = [start];

  for (let i = 1; i < length; i++) {
    summationSequence.push(sumArray(range(0, summationSequence[i - 1])));
  }
  return summationSequence;
}

// console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
// console.log(summationSequence(5, 3)); // [5, 15, 120]
