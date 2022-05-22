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
