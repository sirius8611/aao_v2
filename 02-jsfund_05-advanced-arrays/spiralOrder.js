///////////////////////////////////////////////////////////////////////
// SPIRAL ORDER
///////////////////////////////////////////////////////////////////////

// I used a matrix rotation to solve this.
// To rotate, you'll need to first reverse each row of the matrix, than transpose
// See ./2d-arrays.md for a visual on why a reverse + transpose = rotate

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
