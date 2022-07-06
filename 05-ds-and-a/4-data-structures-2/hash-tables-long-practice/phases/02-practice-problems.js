function anagrams(str1, str2) {
  const setStr1 = new Set(str1.split(""));
  const setStr2 = new Set(str2.split(""));

  return (
    setStr1.length === setStr2.length &&
    Array.from(setStr1).every((char) => setStr2.has(char)) &&
    Array.from(setStr2).every((char) => setStr1.has(char))
  );
}

function commonElements(arr1, arr2) {
  const set2 = new Set(arr2);

  return arr1.filter((el) => set2.has(el));
}

function duplicate(arr) {
  let obj = {};
  for (const key of arr) {
    if (key in obj) {
      return key;
    } else {
      obj[key] = 1;
    }
  }
}

function twoSum(nums, target) {
  let set = new Set();

  for (const num of nums) {
    if (set.has(target - num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

function wordPattern(pattern, strings) {
  // Your code here
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
