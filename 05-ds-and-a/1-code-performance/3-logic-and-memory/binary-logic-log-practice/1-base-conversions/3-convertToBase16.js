// Convert the integers in the console.logs below to base 16:

/******************************************************************************/
const convertToBase16 = (element) => {
  if (typeof element === "number") {
    return base10ToBase16(element);
  } else if (typeof element === "string") {
    const val = element.slice(2, element.length);
    return base10ToBase16(binToBase10(val));
  } else {
    throw new TypeError("Invalid argument type");
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

const base10ToBase16 = (num) => {
  const pVals = placeVals(16, num);
  const hVals = hexVals();

  let remainder = num;
  let converted = [];

  for (const placeVal of pVals) {
    let currVal = Math.floor(remainder / placeVal);
    remainder = remainder % placeVal;
    converted.push(hVals[currVal]);
  }
  return "0x" + converted.join("");
};

const placeVals = (num, target) => {
  let placeVals = [];
  let placeVal = 1;
  while (placeVal <= target) {
    placeVals.unshift(placeVal);
    placeVal *= num;
  }
  return placeVals;
};

const hexVals = () => {
  return {
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
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
  };
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log("––––––");

console.log(convertToBase16("0b1100")); // 0xc
console.log(convertToBase16("0b0101")); // 0x5
console.log(convertToBase16("0b1000")); // 0x8
console.log(convertToBase16("0b0111")); // 0x7

console.log("––––––");

console.log(convertToBase16("0b10100101")); // 0xa5
console.log(convertToBase16("0b11111111")); // 0xff
console.log(convertToBase16("0b01010101")); // 0x55
console.log(convertToBase16("0b00110011")); // 0x33
