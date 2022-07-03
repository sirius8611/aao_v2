// Convert the integers in the console.logs below to base 2

/******************************************************************************/

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
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  let hex = 0;
  for (let idx = 0; idx < str.length; idx++) {
    let placeVal = 16 ** idx;
    let posVal = str[str.length - 1 - idx];
    hex += hexVal[posVal] * placeVal;
  }
  return hex;
};

const base10ToBase2 = (num) => {
  let placeVals = [];
  let placeVal = 1;
  while (placeVal <= num) {
    placeVals.unshift(placeVal);
    placeVal *= 2;
  }

  let tempNum = num;
  let base2 = [];

  for (const placeVal of placeVals) {
    if (tempNum - placeVal >= 0) {
      tempNum -= placeVal;
      base2.push("1");
    } else {
      base2.push("0");
    }
  }
  return base2.join("");
};

const convertToBase2 = (element) => {
  if (typeof element === "number") {
    return "0b" + base10ToBase2(element);
  }
  if (typeof element === "string") {
    const val = element.slice(2, element.length);

    return "0b" + base10ToBase2(hexToBase10(val));
  } else {
    throw new TypeError("Invalid argument type");
  }
};

module.exports = base10ToBase2;
/******************************************************************************/

// console.log(convertToBase2(4) === "0b100"); // 0b100
// console.log(convertToBase2(65) === "0b1000001"); // 0b1000001
// console.log(convertToBase2(256) === "0b100000000"); // 0b100000000
// console.log(convertToBase2(123) === "0b1111011"); // 0b1111011
// console.log(convertToBase2(1000) === "0b1111101000"); // 0b1111101000

// console.log("––––––");

// console.log(convertToBase2("0xf") === "0b1111"); // 0b1111
// console.log(convertToBase2("0xfa") === "0b11111010"); // 0b11111010
// console.log(convertToBase2("0x1234") === "0b1001000110100"); // 0b1001000110100
// console.log(convertToBase2("0xc9a1") === "0b1100100110100001"); // 0b1100100110100001
// console.log(convertToBase2("0xbf12") === "0b1011111100010010"); // 0b1011111100010010
