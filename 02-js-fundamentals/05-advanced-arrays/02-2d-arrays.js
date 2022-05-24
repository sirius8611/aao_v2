function twoDimensionalSum(arr) {
  let totalCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) {
        count = count + arr[i][j];
      }
    }
    totalCount = totalCount + count;
  }
  return totalCount;
}

// let arr1 = [[1, 3], [-4, 7, 10], [2]];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [[], [3, 1, 2]];
// console.log(twoDimensionalSum(arr2)); // 6

function twoDimensionalProduct(arr) {
  let totalProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) {
        product = product * arr[i][j];
      }
    }
    totalProduct = totalProduct * product;
  }
  return totalProduct;
}

// let arr1 = [[6, 4], [5], [3, 1]];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [[11, 4], [2]];
// console.log(twoDimensionalProduct(arr2)); // 88

function maxInMatrix(matrix) {
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (max < matrix[i][j]) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}

// matrix = [
//   [11, 2, -99],
//   [20, 19, 10],
//   [47, 72, 56],
// ];

// console.log(maxInMatrix(matrix)); // 72

function maxColumn(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;

  const maxCols = [];

  for (let col = 0; col < width; col++) {
    let colMax = matrix[0][col];
    for (let row = 1; row < height; row++) {
      if (colMax < matrix[row][col]) {
        colMax = matrix[row][col];
      }
    }
    maxCols.push(colMax);
  }
  return maxCols;
}

// matrix = [
//   [5, 9, 21],
//   [9, 19, 6],
//   [12, 14, 15],
// ];

// console.log(maxColumn(matrix)); // [12, 19, 21]

function zip(arr1, arr2) {
  let zipped = [];
  for (let i = 0; i < arr1.length; i++) {
    zipped.push([arr1[i], arr2[i]]);
  }
  return zipped;
}

// console.log(zip([1, 2, 3, 4], ["eins", "zwei", "drei", "vier"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

// console.log(zip(["eins", "zwei", "drei"], [1, 2, 3]));
// // [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

// console.log(zip(["alef", "bet"], ["alpha", "beta"]));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

function zanyZip(arr1, arr2) {
  let zipped = [];
  let size = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < size; i++) {
    let el1 = arr1[i] ? arr1[i] : null;
    let el2 = arr2[i] ? arr2[i] : null;

    zipped.push([el1, el2]);
  }
  return zipped;
}

// console.log(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

// console.log(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

// console.log(zanyZip(["alef", "bet"], ["alpha", "beta"]));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

function matrixAddition(matrix1, matrix2) {
  let height = matrix1.length;
  let width = matrix1[0].length;
  let matrixSum = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push(matrix1[i][j] + matrix2[i][j]);
    }
    matrixSum.push(row);
  }
  return matrixSum;
}

let matrixA = [
  [2, 5],
  [4, 7],
];
let matrixB = [
  [9, 1],
  [3, 0],
];
let matrixC = [
  [-1, 0],
  [0, -1],
];
let matrixD = [
  [2, -5],
  [7, 10],
  [0, 1],
];
let matrixE = [
  [0, 0],
  [12, 4],
  [6, 3],
];

// console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
// console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
// console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
// console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]

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

function luckyNumbers(matrix) {
  let maxCols = maxColumn(matrix);
  let lucky = [];

  for (let height = 0; height < matrix.length; height++) {
    let minimumRowVal = minValue(matrix[height]);
    for (let width = 0; width < matrix[0].length; width++) {
      let el = matrix[height][width];
      if (el === maxCols[width] && el === minimumRowVal) {
        lucky.push(el);
      }
    }
  }
  return lucky;
}

// matrix = [
//   [5, 9, 21],
//   [9, 19, 6],
//   [12, 14, 15],
// ];

// console.log(luckyNumbers(matrix)); // [12]

// matrix = [
//   [5, 10, 8, 6],
//   [10, 2, 7, 9],
//   [21, 15, 19, 10],
// ];

// console.log(luckyNumbers(matrix)); // [10]

// [0, 1, 2],
// [7, 8, 3],
// [6, 5, 4],

// [00, 01, 02],
// [10, 11, 12],
// [20, 21, 22],

///////////////////////////////////////////////////////////////////////
// SPIRAL ORDER
///////////////////////////////////////////////////////////////////////

// used in rotateMatrix
function reverse(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.unshift(array[i]);
  }
  return newArr;
}

// used in rotateMatrix
function transpose(matrix) {
  let transposed = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let transposedRow = [];
    for (let row = 0; row < matrix.length; row++) {
      transposedRow.push(matrix[row][col]);
    }
    transposed.push(transposedRow);
  }
  return transposed;
}

// matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(transpose(matrix));

// rotate matrix by first reversing each row, then transposing
function rotateMatrix(matrix) {
  let reversedMatrix = [];
  for (let row = 0; row < matrix.length; row++) {
    reversedMatrix.push(reverse(matrix[row]));
  }
  return transpose(reversedMatrix);
}

// matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(rotateMatrix(matrix));

function spiralOrder(matrix) {
  let spiralNums = [];

  let remainingMatrix = matrix.slice(); //copy matrix

  //while remainingMatrix not empty
  while (remainingMatrix.length > 0) {
    let is2DArray = remainingMatrix[0].length > 1;
    let topRow = remainingMatrix.shift();
    // console.log("top row: ", topRow);
    // console.log("remaining matrix: ", remainingMatrix);

    // if 2D, push values from top row, then rotate remaining array
    if (is2DArray) {
      for (let rowPos = 0; rowPos < topRow.length; rowPos++) {
        spiralNums.push(topRow[rowPos]);
      }

      remainingMatrix = rotateMatrix(remainingMatrix);
      // console.log("rotated matrix: ", remainingMatrix);
    } else {
      // 1D array
      for (let rowPos = 0; rowPos < topRow.length; rowPos++) {
        spiralNums.push(topRow[rowPos]);
      }
    }
  }

  return spiralNums;
}

// matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

///////////////////////////////////////////////////////////////////////

function pyramidArray(base) {
  let pyramid = [base];
  for (let layer = 0; layer < base.length; layer++) {
    let newRow = [];
    let pyramidRow = pyramid[0];

    for (let rowPos = 0; rowPos < pyramidRow.length - 1; rowPos++) {
      newRow.push(pyramidRow[rowPos] + pyramidRow[rowPos + 1]);
    }
    pyramid.unshift(newRow);
  }
  return pyramid;
}

// let p1 = pyramidArray([2, 3, 7, 5, 9]);
// console.log(p1);
// // [
// //   [ 85 ],
// //   [ 37, 48 ],
// //   [ 15, 22, 26 ],
// //   [ 5, 10, 12, 14 ],
// //   [ 2, 3, 7, 5, 9 ]
// // ]

// let p2 = pyramidArray([2, 2, 2, 2]);
// console.log(p2);
// // [
// //   [ 16 ],
// //   [ 8, 8 ],
// //   [ 4, 4, 4 ],
// //   [ 2, 2, 2, 2 ]
// // ]

function pascalsTriangle(num) {
  let triangle = [[1], [1, 1]];

  for (let level = 1; level < num - 1; level++) {
    let currLevel = triangle[level].slice();
    currLevel.unshift(0);
    currLevel.push(0);

    let newLevel = [];
    for (let rowPos = 0; rowPos < currLevel.length - 1; rowPos++) {
      newLevel.push(currLevel[rowPos] + currLevel[rowPos + 1]);
    }

    triangle.push(newLevel);
  }
  return triangle;
}

// console.log(pascalsTriangle(5));
// // [
// //     [1],
// //     [1, 1],
// //     [1, 2, 1],
// //     [1, 3, 3, 1],
// //     [1, 4, 6, 4, 1]
// // ]

// console.log(pascalsTriangle(7));
// // [
// //     [1],
// //     [1, 1],
// //     [1, 2, 1],
// //     [1, 3, 3, 1],
// //     [1, 4, 6, 4, 1],
// //     [1, 5, 10, 10, 5, 1],
// //     [1, 6, 15, 20, 15, 6, 1]
// // ]
