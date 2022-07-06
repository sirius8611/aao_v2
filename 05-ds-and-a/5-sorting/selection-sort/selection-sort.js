function selectionSort(arr) {
  // Copy the original array
  let dupArr = [...arr];

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (dupArr.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minPos = 0;
    for (let i = 1; i < dupArr.length; i++) {
      if (dupArr[minPos] > dupArr[i]) {
        minPos = i;
      }
    }

    // Save and remove the value at the min index
    let minVal = dupArr.splice(minPos, 1);

    // Add the min value to the end of the sorted array
    sorted.push(...minVal);
  }
  return sorted;
}

function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    let currentMinPos = arr[divider];

    for (let i = divider; i < arr.length; i++) {
      if (arr[i] < arr[currentMinPos]) {
        currentMinPos = i;
      }
    }

    if (arr[currentMinPos] < arr[divider]) {
      [arr[currentMinPos], arr[divider]] = [arr[divider], arr[currentMinPos]];
    }
    divider++;
  }
}
// let arr = [3, 2, 0, 4, 1];
// selectionSortInPlace(arr);
// console.log(arr);

module.exports = [selectionSort, selectionSortInPlace];
