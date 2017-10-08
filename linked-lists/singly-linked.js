/* jshint strict:false */
var prettyPrinter = require('../utils/pretty-printer');

function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  // head will be the top of the list
  // we'll define it as null for now
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.addToTail = function (data) {
  var nodeToAdd = new Node(data);
  var currentNode = this.head; // set the current node

  if (!currentNode) { // if the head is null
    this.head = nodeToAdd;
    ++this.length;
    return nodeToAdd;
  }

  while (currentNode.next !== null) { // loop until we find the end
    currentNode = currentNode.next;
  }

  ++this.length;
  currentNode.next = nodeToAdd; // once were at the end of the list

  return nodeToAdd;
};

LinkedList.prototype.reverse = function () {
  var currentNode = this.head; // set the current node
  var previous = null;

  if (!currentNode) { // if the head is null list is empty do nothing
    return this;
  }

  while (currentNode !== null) {
    var save = currentNode.next; // save next or you lose it

    currentNode.next = previous; // save next or you lose it
    previous = currentNode; // increment previous to currentNode

    currentNode = save; // increment currentNode to next node or null at end of list
  }

  return {
    head: previous,
    length: this.length
  }; // Change the list head
};

var sll = new LinkedList();

sll.addToTail(2);
sll.addToTail(5);
console.log('sll: ', prettyPrinter.makeJsonPretty(sll));
var reversed = sll.reverse();
console.log('\nreversed sll: ', prettyPrinter.makeJsonPretty(reversed));
