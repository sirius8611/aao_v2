const chai = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun.js");
const expect = chai.expect;

describe("returnsThree()", function () {
  it("should return the number 3", function () {
    expect(returnsThree()).to.equal(3);
  });
});

describe("reciprocal()", function () {
  describe("when passed a valid argument", function () {
    it("should return the reciprocal of the argument", function () {
      expect(reciprocal(2)).to.equal(0.5);
    });
  });
  describe("when passed an invalid argument", function () {
    it("should throw an error if the argument is 0", function () {
      expect(reciprocal.bind(null, 0)).to.throw(TypeError);
    });

    it("should throw an error if the argument isn't a number", function () {
      expect(reciprocal.bind(null, "Aang")).to.throw(TypeError);
    });

    it("should throw an error if the argument isn't between 1 and 1000000", function () {
      expect(reciprocal.bind(null, "-1")).to.throw(RangeError);
    });
  });
});
