function greeting(...messages) {
  return messages.map((message) => {
    return `${this.firstName} says ${message}`;
  });
}

const derek = {
  firstName: "Derek",
};

const derekMessages = greeting.bind(derek, "Hello class!");
console.log(derekMessages("Goodbye class!"));
