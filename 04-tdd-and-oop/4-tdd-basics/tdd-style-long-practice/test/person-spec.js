const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Person = require("../problems/person.js");

describe("Person", function () {
  beforeEach(() => {
    myPerson = new Person("Jon Arbuckle", 35);
    otherPerson = new Person("Dr. Liz Wilson", 35);
    newObj = { name: "Garfield", age: 18 };
    invalidObj = { nickName: "Gar", eyeColor: "white" };
  });

  describe("Person constructor function", function () {
    it('should have a "name" property', function () {
      expect(myPerson).to.have.property("name");
    });
    it('should have an "age" property', function () {
      expect(myPerson).to.have.property("age");
    });

    it('should set the "name" property to the passed name value', function () {
      expect(myPerson.name).to.equal("Jon Arbuckle");
    });

    it('should set the "age" property to the passed age value', function () {
      expect(myPerson.age).to.equal(35);
    });
  });

  describe("sayHello()", function () {
    it("should return a greeting with the person's name", function () {
      expect(myPerson.sayHello()).to.equal("Hello, Jon Arbuckle!");
    });
  });

  describe("visit()", function () {
    it("should return a string stating that this person visited another person", function () {
      expect(myPerson.visit(otherPerson)).to.equal(
        "Jon Arbuckle visited Dr. Liz Wilson"
      );
    });
  });

  describe("switchVisit()", function () {
    it("should invoke visit() on the other person using this person as the arg", function () {
      expect(myPerson.switchVisit(otherPerson)).to.equal(
        "Dr. Liz Wilson visited Jon Arbuckle"
      );
    });
  });

  describe("update()", function () {
    describe("when the argument is not an object", function () {
      it("should throw a TypeError with a message", function () {
        expect(myPerson.update.bind(null, null)).to.throw(TypeError);
      });
    });

    describe("when the argument is an object", function () {
      describe("when the object arg has name and age properties", function () {
        it("should update the instance properties to match the passed object's values", function () {
          myPerson.update(newObj);
          expect(myPerson.name).to.equal("Garfield");
          expect(myPerson.age).to.equal(18);
        });
      });
      describe("when the object arg doesn't have name and age properties", function () {
        it("should throw an error", function () {
          expect(myPerson.update.bind(myPerson.update, invalidObj)).to.throw(
            TypeError
          );
        });
      });
    });
  });

  describe("tryUpdate()", function () {
    it("should return true if an update was successful", function () {
      expect(myPerson.tryUpdate(newObj)).to.be.true;
    });
    it("should return false if an update was unsuccessful", function () {
      expect(myPerson.tryUpdate(invalidObj)).to.be.false;
    });
  });

  describe("greetAll()", function () {
    it("should call sayHello() on each person of an array of Person instances", function () {
      people = [myPerson, otherPerson];
      const spy1 = chai.spy.on(myPerson, "sayHello");
      const spy2 = chai.spy.on(otherPerson, "sayHello");
      Person.greetAll(people);
      expect(spy1).to.have.been.called.once;
      expect(spy2).to.have.been.called.once;
    });
  });
});
