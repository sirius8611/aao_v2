function printObject(obj) {
  for (const key in obj) {
    console.log(`${key} - ${obj[key]}`);
  }
}

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120,
};

// printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120

function catBuilder(name, color, toys) {
  obj = {};
  (obj["name"] = name), (obj["color"] = color), (obj["toys"] = toys);
  return obj;
}

// console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// // prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

// console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
// // prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }

let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"

[firstEl, secondEl, thirdEl, fourthEl, { name }, last] = bigArray;
console.log(last);
