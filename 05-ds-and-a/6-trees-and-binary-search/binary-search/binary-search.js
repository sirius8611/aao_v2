function linearSearch(arr, target) {
  return arr.indexOf(target); // Can you solve this in one line?
}

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;
  // While high and low indices do not overlap...
  while (low <= high) {
    // Find the midpoint between high and low indices
    let midpoint = Math.floor((high + low) / 2);

    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
    if (arr[midpoint] === target) {
      // Return the midpoint index
      return midpoint;
    }
    // If the target is higher than the midpoint...
    if (arr[midpoint] < target) {
      // Move the low pointer to midpoint + 1
      low = midpoint + 1;
    }
    // If the target is less than the midpoint...
    if (arr[midpoint] > target) {
      // Move the high pointer to midpoint - 1
      high = midpoint - 1;
    }
  }
  return -1;
  // Return -1 if the loop exits with overlapping pointers
}
let target = 100;

arr = [];

for (let i = 0; i < 1000000; i++) {
  arr.push(i);
}

console.log(binarySearch(arr, target));
module.exports = [linearSearch, binarySearch];
