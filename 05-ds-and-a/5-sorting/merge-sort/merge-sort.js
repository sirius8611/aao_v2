// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array in half
  // Recursively sort the left half
  let leftHalf = mergeSort(arr.slice(0, arr.length / 2));
  // Recursively sort the right half
  let rightHalf = mergeSort(arr.slice(arr.length / 2, arr.length));

  // Merge the halves together and return
  return merge(leftHalf, rightHalf);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let merged = [];
  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;

  // While there are still values in each array...
  while (merged.length < arrA.length + arrB.length) {
    // console.log("indexA", indexA, "indexB", indexB);
    if (arrA[indexA] <= arrB[indexB] || indexB === arrB.length) {
      merged.push(arrA[indexA]);
      indexA++;
    } else {
      merged.push(arrB[indexB]);
      indexB++;
    }
  }

  // Return the return array
  return merged;
}

module.exports = [merge, mergeSort];
