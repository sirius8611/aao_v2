const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    const newPair = new KeyValuePair(key, value);
    let existing = this.data[this.hash(newPair.key) % this.capacity];
    if (existing) {
      throw new Error("hash collision or same key/value pair already exists!");
    } else {
      this.data[this.hash(newPair.key) % this.capacity] = newPair;
    }
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    const newPair = new KeyValuePair(key, value);

    let existing = this.data[this.hash(newPair.key) % this.capacity];

    if (existing) {
      newPair.next = existing;
      this.data[this.hash(newPair.key) % this.capacity] = newPair;
    } else {
      this.data[this.hash(newPair.key) % this.capacity] = newPair;
    }

    this.count++;
  }

  insert(key, value) {
    const newPair = new KeyValuePair(key, value);

    let existing = this.data[this.hash(newPair.key) % this.capacity];

    if (existing) {
      // check for existing key/val
      let updated = false;
      let currNode = existing;
      while (currNode) {
        if (newPair.key === currNode.key) {
          currNode.value = newPair.value;
          updated = true;
        }
        currNode = currNode.next;
      }

      if (!updated) {
        newPair.next = existing;
        this.data[this.hash(newPair.key) % this.capacity] = newPair;
        this.count++;
      }
    } else {
      this.data[this.hash(newPair.key) % this.capacity] = newPair;
      this.count++;
    }
  }
}

module.exports = HashTable;
