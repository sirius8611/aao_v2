const chai = require("chai");
const reverseString = require("../problems/reverse-string.js");
const expect = chai.expect;

describe("reverseString()", function () {
  myString = "fun";
  it("should reverse the order of characters in a string", function () {
    expect(reverseString(myString)).to.equal("nuf");
  });

  it("should throw an error if the argument isn't a string", function () {
    expect(reverseString.bind(null, 5)).to.throw(TypeError);
  });
});
