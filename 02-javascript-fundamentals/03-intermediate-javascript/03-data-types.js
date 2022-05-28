function hasDoubleLetter(str) {
  if (typeof str !== "string") {
    return null;
  }
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}

// console.log(hasDoubleLetter("deer")); // true
// console.log(hasDoubleLetter("boot camp")); // true
// console.log(hasDoubleLetter("toggle")); // true
// console.log(hasDoubleLetter("taco")); // false
// console.log(hasDoubleLetter("jumper")); // false
// console.log(hasDoubleLetter(18)); // null
// console.log(hasDoubleLetter(["array"])); // null

function firstVowel(str) {
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) return str[i];
  }
  return null;
}

// console.log(firstVowel("battery")); // 'a'
// console.log(firstVowel("tunnel")); // 'u'
// console.log(firstVowel("dog")); // 'o'
// console.log(firstVowel("conventional")); // 'o'
// console.log(firstVowel("rhythm")); // null

function lastVowel(str) {
  let lowerStr = str.toLowerCase();
  for (let i = str.length - 1; i > 0; i--) {
    if ("aeiou".includes(lowerStr[i])) return str[i];
  }
  return null;
}

// console.log(lastVowel("battery")); // 'e'
// console.log(lastVowel("TUNNEL")); // 'E'
// console.log(lastVowel("dog")); // 'o'
// console.log(lastVowel("conventional")); // 'a'
// console.log(lastVowel("rhythm")); // null

function minValue(nums) {
  if (nums.length === 0) {
    return null;
  } else {
    let smallest = nums[0];
    pos = 1;
    while (pos < nums.length) {
      if (nums[pos] < smallest) {
        smallest = nums[pos];
      }
      pos++;
    }
    return smallest;
  }
}

// console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
// console.log(minValue([-2, -3, -7, 3])); // -7
// console.log(minValue([])); // null

function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function avgVal(arr) {
  if (arr.length === 0) {
    return null;
  }
  return sumArray(arr) / arr.length;
}

// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null

function maxValue(arr) {
  if (arr.length === 0) {
    return null;
  }
  let largest = arr[0];
  pos = 1;
  while (pos < arr.length) {
    if (arr[pos] > largest) {
      largest = arr[pos];
    }
    pos++;
  }
  return largest;
}
// console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
// console.log(maxValue([-2, -3, -7, 3])); // 3
// console.log(maxValue([])); // null

function reverb(str) {
  if (typeof str === "string") {
    return str + str.slice(str.indexOf(lastVowel(str)), str.length);
  }
  return null;
}
// console.log(reverb("running")); // runninging
// console.log(reverb("FAMILY")); // FAMILYILY
// console.log(reverb("trash")); // trashash
// console.log(reverb("DISH")); // DISHISH
// console.log(reverb(197393)); // null

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

function prevPrime(num) {
  if (num <= 2) {
    return null;
  }

  let prevNum = num - 1;
  while (true) {
    if (isPrime(prevNum)) {
      return prevNum;
    }
    prevNum--;
  }
}

// console.log(prevPrime(32)); // 31
// console.log(prevPrime(33)); // 31
// console.log(prevPrime(14)); // 13
// console.log(prevPrime(7)); // 5
// console.log(prevPrime(4)); // 3
// console.log(prevPrime(2)); // null
// console.log(prevPrime(1)); // null

function additionMutator(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + num;
  }
}

// let nums1 = [3, 7, 1, 2];
// additionMutator(nums1, 4);
// console.log(nums1); // [ 7, 11, 5, 6 ]

// let nums2 = [11, 9, 4];
// additionMutator(nums2, -1);
// console.log(nums2); // [ 10, 8, 3 ]

function alternatingWords(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
}

// let words1 = ["Belka", "STRELKA", "laika", "DEZIK", "Tsygan"];
// alternatingWords(words1);
// console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

// let words2 = ["Yellowstone", "Yosemite", "Zion", "Acadia"];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]

function reverseString(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }
  return newStr;
}

// console.log(reverseString("fish")); // 'hsif'
// console.log(reverseString("marathon")); // 'nohtaram'

function lastVowelIndex(str) {
  let lowerStr = str.toLowerCase();
  for (let i = str.length - 1; i > 0; i--) {
    if ("aeiou".includes(lowerStr[i])) return i;
  }
  return null;
}

function removeLastVowel(word) {
  let lastVowelPos = lastVowelIndex(word);
  if (lastVowelPos) {
    let firstHalf = word.slice(0, lastVowelPos);
    let secondHalf = word.slice(lastVowelPos + 1);

    return firstHalf + secondHalf;
  } else {
    return word;
  }
}

// console.log(removeLastVowel("bootcamp")); // 'bootcmp'
// console.log(removeLastVowel("better")); // 'bettr'
// console.log(removeLastVowel("graph")); // 'grph'
// console.log(removeLastVowel("thy")); // 'thy'

function removeEWords(sentence) {
  newStr = [];
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (!words[i].toLowerCase().includes("e")) {
      newStr.push(words[i]);
    }
  }
  return newStr.join(" ");
}

// console.log(removeEWords("What time is it everyone?")); // 'What is it'
// console.log(removeEWords("Enter the building")); // 'building'
