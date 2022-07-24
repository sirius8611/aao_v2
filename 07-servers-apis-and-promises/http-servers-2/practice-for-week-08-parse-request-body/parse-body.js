class BodyParser {
  constructor(body) {
    this.body = body;
  }

  splitAnd() {
    this.body = this.body.split("&");
    return this;
  }

  splitEquals() {
    this.body = this.body.map((arr) => arr.split("="));
    return this;
  }

  swapPlus() {
    this.body = this.body.map((arr) => [arr[0], arr[1].replace("+", " ")]);
    return this;
  }

  decodeURI() {
    this.body = this.body.map((arr) => [arr[0], decodeURIComponent(arr[1])]);
    return this;
  }

  toObj() {
    return this.body.reduce((prev, arr) => {
      return { ...prev, [arr[0]]: arr[1] };
    }, {});
  }
}

let body = "name=Fido&color=black&age=1&description=Hello+World%21";

const parseBody = (body) => {
  console.log(body);
  return new BodyParser(body).splitAnd().splitEquals();
};
// { name: 'Fido', color: 'black', age: '1', description: 'Hello World!' }

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  parseBody,
};

// function arrToObjFor(input) {
//   let obj = {};
//   for (subarr of input) {
//     obj[subarr[0]] = subarr[1];
//   }
//   return obj;
// }

// function arrToObjReduce(arr) {
//   return arr.reduce((prev, arr) => {
//     return { ...prev, [arr[0]]: arr[1] };
//   }, {});
// }
