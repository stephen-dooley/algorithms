/* jshint strict:false */
function DoublyLinkedList() {
  this.head = null;
}

DoublyLinkedList.prototype.add = function(val) {
  var dll = new
  var head = this.head;
  var current = head;
  var previous = head;

  if (!head) {
    this.head = {
      value: val,
      previous: null,
      next: null
    };
  } else{
    while (current && current.next) {
      previous = current;
      current = current.next;
    }

    current.next = {
      value: val,
      previous: current,
      next: null
    };
  }
}

var dll = new DoublyLinkedList();
dll.add(2);
console.log('dll: ', JSON.stringify(dll));
