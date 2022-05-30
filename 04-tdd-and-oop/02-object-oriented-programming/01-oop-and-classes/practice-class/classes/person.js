class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  }

  static introducePeople(people) {
    if (!Array.isArray(people)) {
      console.log("introducePeople only takes an array as an argument.");
    } else {
      const isPeople = people.reduce((prev, curr) => {
        return prev && curr instanceof Person;
      }, true);

      if (isPeople) {
        people.forEach((person) => person.introduce());
      } else {
        console.log("All items in array must be Person class instances.");
      }
    }
  }
}

// const person1 = new Person("joe", "bob", 80);
// const person2 = new Person("Marie", "Curie", 80);
// Person.introducePeople([person1, person2]);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
