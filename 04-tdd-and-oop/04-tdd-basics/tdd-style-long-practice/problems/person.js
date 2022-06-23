class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, ${this.name}!`;
  }
  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }
  switchVisit(otherPerson) {
    return `${otherPerson.name} visited ${this.name}`;
  }
  update(obj) {
    if (obj instanceof Object) {
      if (obj.hasOwnProperty("name") && obj.hasOwnProperty("age")) {
        this.name = obj.name;
        this.age = obj.age;
      } else {
        throw new TypeError();
      }
    } else {
      throw new TypeError("argument not an object");
    }
  }
  tryUpdate(obj) {
    try {
      this.update(obj);
    } catch (error) {
      return false;
    }
    return true;
  }
  static greetAll(arr) {
    arr.forEach((person) => person.sayHello());
  }
}

module.exports = Person;
