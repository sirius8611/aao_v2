const { expect } = require("chai");

const Bejeweled = require("../class/bejeweled.js");
const Cursor = require("../class/cursor.js");

describe("Bejeweled", function () {
  beforeEach(() => {
    bejeweled = new Bejeweled();
  });

  describe("Bejeweled constructor function", function () {
    it('should have a "playerTurn" property', function () {
      expect(bejeweled).to.have.property("playerTurn");
    });
    it('should have a "grid" property', function () {
      expect(bejeweled).to.have.property("grid");
    });
    it('should have a "cursor" property', function () {
      expect(bejeweled).to.have.property("cursor");
    });
    it('should set the "playerTurn" property to the initial value', function () {
      expect(bejeweled.playerTurn).to.equal("O");
    });
    it('should set the"grid" property to the initial value', function () {
      expect(bejeweled.grid).to.eql([]);
    });
    it('should set the "cursor" property to a new Cursor instance', function () {
      expect(bejeweled.cursor).to.be.an.instanceof(Cursor);
    });
  });

  // Add tests for a valid swap that matches 3

  // Add tests for swaps that set up combos

  // Add tests to check if there are no possible valid moves
});
