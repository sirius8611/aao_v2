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

function popper(array, num) {
  let filteredArray = []
  for (let i = 0; i < num; i++) {
    filteredArray.push(array.pop())
  }
  return filteredArray
}

// let arr1 = ["a", "b", "c", "d", "e"];
// console.log(popper(arr1, 2)); // [ 'e', 'd' ]
// console.log(arr1); // [ 'a', 'b', 'c' ]

// let arr2 = ["kale", "spinach", "collard greens", "cabbage"];
// console.log(popper(arr2, 1)); // [ 'cabbage' ]
// console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]


function rotateRight(array, num) {
  let rotatedArray = array.slice()
  for (let i = 0; i < num; i++) {
    rotatedArray.unshift(rotatedArray.pop())
  }
  return rotatedArray

}

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

const rotate = function (array, num) {
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      array.unshift(array.pop())
    }
  }
  if (num < 0) {
    for (let i = 0; i < (-1 * num); i++) {
      const first = array.shift()
      array.push(first)
    }
  }
}
// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

