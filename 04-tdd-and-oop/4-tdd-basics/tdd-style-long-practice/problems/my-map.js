function myMap(inputArray, callback) {
  let newArr = [];
  inputArray.forEach((el) => {
    newArr.push(callback(el));
  });
  return newArr;
}

module.exports = { myMap };

// const arr = [1, 2, 3];
// const callback = (el) => el * 2;

// console.log(myMap(arr, callback)); // prints [2,4,6]
// console.log(arr); // prints [1,2,3]
