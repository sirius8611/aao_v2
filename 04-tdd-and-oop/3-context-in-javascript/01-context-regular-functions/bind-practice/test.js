const { Employee } = require("./employee");

const john = new Employee("John Wick", "Dog Lover");

const boundName = john.sayName.bind(john);

setTimeout(boundName, 2000);
