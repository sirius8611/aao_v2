class DynamicArray {
  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    for (let i = this.data.length; i >= 0; i--) {
      if (this.data[i - 1]) {
        this.data[i] = this.data[i - 1];
      }
    }
    this.data[0] = val;
    this.length++;
  }
}

// let d = new DynamicArray(10);
// d.unshift("b");
// d.unshift("a");
// console.log(d);

module.exports = DynamicArray;
