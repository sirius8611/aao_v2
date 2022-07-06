class DynamicArray {
  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length == this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    let popped = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return popped;
  }

  shift() {
    let shifted = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    return shifted;
  }

  unshift(val) {
    if (this.length == this.capacity) {
      this.resize();
    }
    for (let i = this.data.length; i >= 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity *= 2;
    let newArr = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.read(i);
    }
    this.data = newArr;
  }
}

module.exports = DynamicArray;
