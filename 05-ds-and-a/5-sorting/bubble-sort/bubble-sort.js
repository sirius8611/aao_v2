function bubbleSort(arr) {
  // Iterate through the array
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // Swap those values
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        sorted = false;
        // Do not move this console.log
        console.log(arr.join(","));

        // Otherwise, repeat from the beginning
      }
      // If you get to the end of the array and no swaps have occurred, return
    }
  }
}

module.exports = bubbleSort;
