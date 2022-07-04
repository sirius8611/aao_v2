const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

function runNumTimes(num, cb) {
  let avg = 0;
  for (let i = 0; i < num; i++) {
    const startTime = Date.now();
    for (let i = 0; i < 1000; i++) {
      cb(i);
    }
    const endTime = Date.now();

    avg += endTime - startTime;
  }
  return avg / num;
}

const ll = new LinkedList();
console.log("LL addToHead: ", runNumTimes(10, ll.addToHead.bind(ll)));
console.log("LL addToTail: ", runNumTimes(10, ll.addToTail.bind(ll)));

const dll = new DoublyLinkedList();
console.log("DLL addToHead: ", runNumTimes(10, dll.addToHead.bind(dll)));
console.log("DLL addToTail: ", runNumTimes(10, dll.addToTail.bind(dll)));
