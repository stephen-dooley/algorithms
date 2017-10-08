/* jshint strict:false */
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.root) {
    this.root = node;
  } else {
    var current = this.root;
    while (current) {
      if (node.data < current.data) {
        if (!current.left) {
          current.left = node;
          break;
        }

        current = current.left;
      }

      if (node.data > current.data) {
        if(!current.right) {
          current.right = node;
          break;
        }

        current = current.right;
      }

      break;
    }
  }
};

BinarySearchTree.prototype.print = function(message) {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('|');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + ' ';
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  console.log(message, string.slice(0, -2).trim());
};

BinarySearchTree.prototype.contains = function(data) {
  var current = this.root;
  while(current) {
    if(data === current.data) {
      return true;
    }
    if(data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return false;
};

var binarySearchTree = new BinarySearchTree();
binarySearchTree.add(5);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(2);
binarySearchTree.add(4);
binarySearchTree.add(4);
binarySearchTree.add(6);
binarySearchTree.add(8);

binarySearchTree.print('Printing tree: \n'); // => 5 | 3 7 | 2 4 6 8

console.log('\nTree contains number 6?:\n', binarySearchTree.contains(6));
