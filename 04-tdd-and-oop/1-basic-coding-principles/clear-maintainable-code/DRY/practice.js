function biggerNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  return biggerNumber(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return biggerNumber(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = biggerNumber(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

// Okay this is kind of ridiculous, but I want to try to reuse biggerNumber, just for kicks
function adoptSmallerDog(weight1, weight2) {
  let smallDog = -1 * biggerNumber(-1 * weight1, -1 * weight2);
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
