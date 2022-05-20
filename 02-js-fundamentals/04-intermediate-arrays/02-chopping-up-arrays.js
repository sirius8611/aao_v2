function removeFromArray(location, arr) {
  if (["FRONT", "BACK"].includes(location)) {
    if (location === "FRONT") {
      arr.shift();
    } else if (location === "BACK") {
      arr.pop();
    }
  } else {
    console.log("ERROR");
  }
}

testArray = [0, 1, 2, 3, 4];

// removeFromArray("FRONT", testArray);
// console.log(testArray); // [1,2,3,4]

// removeFromArray("BACK", testArray);
// console.log(testArray); // [1,2,3]

// removeFromArray("MIDDLE", 4, testArray); // "ERROR"
// console.log(testArray); // [1,2,3]

let arr1 = ["a", "b", "c", "d", "e"];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ["kale", "spinach", "collard greens", "cabbage"];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]
