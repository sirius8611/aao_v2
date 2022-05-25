/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

const addToTwelve = (array) => {
  // base case is if an array of two elements sums to 12
  if (array.length <= 2) {
    if (array.length === 2) {
      return array[0] + array[1] === 12;
    } else {
      return false;
    }
  }
  // return true if first two elements sums to 12
  if (array[0] + array[1] === 12) {
    return true;
  } else {
    // recursive step drops the first item
    // note that we have already checked indices 0 and 1, so we can drop 0
    return addToTwelve(array.splice(1));
  }
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
