// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(`Wrong Type: ${error.message}`);
    }
  }
  return sum;
}

let res = sum(null);
console.log(res);

// 2.
// tests
try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.error(error.message);
}

// Your code here
function sayName(name) {
  if (name instanceof String) {
    console.log(name);
  } else {
    throw new TypeError("Invalid name! Must be a string!");
  }
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}
try {
  greet(false);
} catch (error) {
  console.log("Hello World");
}
