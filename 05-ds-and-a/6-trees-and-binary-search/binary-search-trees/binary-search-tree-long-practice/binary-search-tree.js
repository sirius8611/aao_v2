// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currNode = this.root) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    if (val < currNode.val) {
      if (!currNode.left) {
        currNode.left = newNode;
      } else {
        this.insert(val, currNode.left);
      }
    } else {
      if (!currNode.right) {
        currNode.right = newNode;
      } else {
        this.insert(val, currNode.right);
      }
    }
  }

  search(val, currentNode = this.root) {
    if (!currentNode) return false;
    if (val < currentNode.val) {
      return this.search(val, currentNode.left);
    } else if (val > currentNode.val) {
      return this.search(val, currentNode.right);
    } else {
      return true;
    }
  }

  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal(currentNode = this.root) {
    let nodes = [currentNode];

    while (nodes.length) {
      let node = nodes.shift();

      console.log(node.val);

      if (node.left) nodes.push(node.left);
      if (node.right) nodes.push(node.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal(currentNode = this.root) {
    let nodes = [currentNode];

    while (nodes.length) {
      let node = nodes.pop();

      console.log(node.val);

      if (node.left) nodes.push(node.left);
      if (node.right) nodes.push(node.right);
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
