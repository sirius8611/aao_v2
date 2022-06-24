Array.prototype.isEqual = function (array) {
  for (let i = 0; i < this.length; i++) {
    if (array[i] !== this[i]) {
      return false;
    }
  }
  return true;
};
