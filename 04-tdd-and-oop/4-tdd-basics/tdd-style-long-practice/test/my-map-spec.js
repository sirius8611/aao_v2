const chai = require("chai");
const { myMap } = require("../problems/my-map.js");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

describe("myMap()", function () {
  beforeEach(() => {
    arr = [1, 2, 3];
    callback = (el) => el * 2;
  });

  it("should return a mapped array using the callback", function () {
    expect(myMap(arr, callback)).to.eql([2, 4, 6]);
  });

  // I'm not satisfied with this test, as it doesn't fail unless myMap is
  // written to mutate.  Not sure how to write it more effectively though.
  it("should not mutate the original array", function () {
    myMap(arr, callback);
    expect(arr).to.eql([1, 2, 3]);
  });

  it("should not call Array.map", function () {
    const spy = chai.spy.on(arr, "map");
    myMap(arr, callback);
    expect(spy).to.not.have.been.called();
  });

  // Currently stuck on this one, the commented out line won't pass
  it("should call the callback once on each element in the array", function () {
    const spy = chai.spy(callback);
    myMap(arr, spy);
    expect(spy).to.have.been.called.exactly(3);
    // expect(spy).to.have.been.called();
  });
});
