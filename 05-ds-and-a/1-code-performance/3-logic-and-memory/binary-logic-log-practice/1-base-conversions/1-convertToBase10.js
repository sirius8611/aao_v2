// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = (str) => {
  let numType = str.slice(0, 2);
  let numStr = str.slice(2, str.length);
  if (numType === "0b") {
    return binToBase10(numStr);
  }
  if (numType === "0x") {
    return hexToBase10(numStr);
  }
};

const binToBase10 = (str) => {
  let base10 = 0;
  for (let idx = 0; idx < str.length; idx++) {
    let placeVal = 2 ** idx;
    base10 += parseInt(str[str.length - 1 - idx]) * placeVal;
  }
  return base10;
};

const hexToBase10 = (str) => {
  let hexVal = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 11,
    b: 12,
    c: 13,
    d: 14,
    e: 15,
    f: 16,
  };
  return str.split("").reduce((sum, curr) => {
    return sum + hexVal[curr];
  }, 0);
};

/******************************************************************************/

console.log(convertToBase10("0b1100")); // 12
console.log(convertToBase10("0b0101")); // 5
console.log(convertToBase10("0b1000")); // 8
console.log(convertToBase10("0b0111")); // 7

console.log("––––––");

console.log(convertToBase10("0b10100101")); // 165
console.log(convertToBase10("0b11111111")); // 255
console.log(convertToBase10("0b01010101")); // 85
console.log(convertToBase10("0b00110011")); // 51

console.log("––––––");

console.log(convertToBase10("0xf")); // 15
console.log(convertToBase10("0xfa")); // 250
console.log(convertToBase10("0x1234")); // 4660
console.log(convertToBase10("0xc9a1")); // 51617
console.log(convertToBase10("0xbf12")); // 48914
