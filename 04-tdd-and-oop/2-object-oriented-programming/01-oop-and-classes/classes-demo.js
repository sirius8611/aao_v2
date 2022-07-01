class Person {
  constructor(firstName) {
    // The 'this' keyword is bound to the new object created by the constructor
    // Once the constructor finishes construction and returns the new object, this will be assigned to
    // `kristen`, but it hasn't been assigned yet.
    console.log("this: ", this); // logs 'this: Person {}'

    console.log(
      "this in constructor is an instance of Person: ",
      this instanceof Person
    ); // true

    this.firstName = "Caleb";
  }

  greet() {
    console.log("method this: ", this); // logs the kristen Person instance
    console.log(`${this.firstName} says hello!`);
  }

  static staticGreet() {
    console.log("static greet: Caleb");
  }
}

const kristen = new Person("Kristen");

/*
What is `kristen.firstname`?
    "Caleb", since `kristen` is the name of the new Person instance, and
    new instances are assigned the firstName property of 'Caleb'

What is the value of 'this' in the constructor?

*/

console.log(kristen.firstName); // "Caleb"
console.log(Person.firstName); // undefined
console.log(kristen.greet());

// Person.greet(); // throws error, not a function
// We can rewrite as static method for it to be invoked on the class
Person.staticGreet();
// likely this would need to be a class method, rather than an instance method
