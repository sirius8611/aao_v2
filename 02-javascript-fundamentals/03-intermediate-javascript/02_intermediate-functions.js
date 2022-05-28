function isPrime(number) {
  i = 2;
  while (i < number) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

// console.log(isPrime(2)); // => true
// console.log(isPrime(10)); // => false
// console.log(isPrime(11)); // => true
// console.log(isPrime(9)); // => false
// console.log(isPrime(2017)); // => true

function choosePrimes(array) {
  let primes = [];
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      primes.push(array[i]);
    }
  }
  return primes;
}

// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

function nextPrime(num) {
  let nextNum = num + 1;

  while (true) {
    if (isPrime(nextNum)) {
      return nextNum;
    }
    nextNum++;
  }
}

// console.log(nextPrime(2)); // 3
// console.log(nextPrime(3)); // 5
// console.log(nextPrime(7)); // 11
// console.log(nextPrime(8)); // 11
// console.log(nextPrime(20)); // 23
// console.log(nextPrime(97)); // 101

function primeFactors(num) {
  let factors = [];
  possibleFactor = 2;
  while (possibleFactor <= num) {
    if (isPrime(possibleFactor) && num % possibleFactor === 0) {
      factors.push(possibleFactor);
    }
    possibleFactor++;
  }
  return factors;
}

// console.log(primeFactors(12)); // [2, 3]
// console.log(primeFactors(7)); // [7]
// console.log(primeFactors(16)); // [2]
// console.log(primeFactors(30)); // [2, 3, 5]
// console.log(primeFactors(35)); // [5, 7]
// console.log(primeFactors(49)); // [7]
// console.log(primeFactors(128)); // [2]

function divisors(num) {
  let divisors = [];
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      divisors.push(i);
    }
    i++;
  }
  return divisors;
}

function isAntiPrime(num) {
  let numDivisors = divisors(num).length;
  //   console.log(num, divisors(num), numDivisors);
  let i = 2;
  while (i < num) {
    // console.log(i, divisors(i), divisors(i).length);
    if (divisors(i).length >= numDivisors) {
      return false;
    }
    i++;
  }
  return true;
}

// console.log(isAntiPrime(24)); // true
// console.log(isAntiPrime(36)); // true
// console.log(isAntiPrime(48)); // true
// console.log(isAntiPrime(360)); // true
// console.log(isAntiPrime(1260)); // true
// console.log(isAntiPrime(27)); // false
// console.log(isAntiPrime(5)); // false
// console.log(isAntiPrime(100)); // false
// console.log(isAntiPrime(136)); // false
// console.log(isAntiPrime(1024)); // false

function mostVowels(sentence) {
  sentenceArr = sentence.split(" ");
  wordCount = [];
  for (let sentencePos = 0; sentencePos < sentenceArr.length; sentencePos++) {
    let vowelCount = 0;

    for (
      let wordPos = 0;
      wordPos < sentenceArr[sentencePos].length;
      wordPos++
    ) {
      if ("aeiou".includes(sentenceArr[sentencePos][wordPos])) {
        vowelCount++;
      }
    }
    wordCount.push(vowelCount);
  }
  let mostVowels = wordCount.slice().sort()[wordCount.length - 1];
  let mostVowelsPos = wordCount.indexOf(mostVowels);
  return sentenceArr[mostVowelsPos];
}

// console.log(mostVowels("what a wonderful life")); // "wonderful"

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function allElseEqual(arr) {
  let halfSum = sum(arr) / 2;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === halfSum) {
      return arr[i];
    }
  }
  return null;
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4])); // null
