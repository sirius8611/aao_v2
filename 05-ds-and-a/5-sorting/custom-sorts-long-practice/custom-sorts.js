function ageSort(users) {
  return users.sort((obj1, obj2) => obj1.age - obj2.age);
}
function oddEvenCompare(a, b) {
  if (a % 2 === 1 && b % 2 === 0) return -1;
  if (a % 2 === 0 && b % 2 === 1) return 1;
  return a - b;
}
function oddEvenSort(arr) {
  return arr.sort(oddEvenCompare);
}

function validAnagrams(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

function reverseBaseSort(arr) {
  let groupArr = [];

  arr.forEach((num) => {
    let placeVal = Math.floor(Math.log10(num));

    Array.isArray(groupArr[placeVal])
      ? groupArr[placeVal].push(num)
      : (groupArr[placeVal] = [num]);
  });

  groupArr.map((subArr) => subArr.sort((a, b) => a - b));

  return groupArr.reverse().flat();
}

function frequencySort(arr) {
  let obj = {};
  arr.forEach((num) => {
    num in obj ? (obj[num] += 1) : (obj[num] = 1);
  });
  return arr.sort((a, b) => {
    if (obj[a] === obj[b]) {
      return b - a;
    } else {
      return obj[a] - obj[b];
    }
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
