const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  while (rootNode) {
    if (!rootNode.left) {
      return rootNode.val;
    }
    rootNode = rootNode.left;
  }
}

function findMaxBST(rootNode) {
  while (rootNode) {
    if (!rootNode.right) {
      return rootNode.val;
    }
    rootNode = rootNode.right;
  }
}

function findMinBT(rootNode) {
  let min = rootNode.val;
  let nodes = [rootNode];

  while (nodes.length) {
    let node = nodes.pop();
    if (min > node.val) {
      min = node.val;
    }

    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
  }
  return min;
}

function findMaxBT(rootNode) {
  let max = rootNode.val;
  let nodes = [rootNode];

  while (nodes.length) {
    let node = nodes.pop();
    if (max < node.val) {
      max = node.val;
    }

    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
  }
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) return -1;
  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
}

function countNodes(rootNode) {
  let allNodes = [];
  let nodes = [rootNode];

  while (nodes.length) {
    let node = nodes.pop();
    allNodes.push(node);

    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
  }
  return allNodes.length;
}

function balancedTree(rootNode) {
  if (!rootNode) return true;
  let heighDiff =
    Math.abs(getHeight(rootNode.left) - getHeight(rootNode.right)) <= 1;
  return (
    heighDiff && balancedTree(rootNode.left) && balancedTree(rootNode.right)
  );
}

function getParentNode(rootNode, target) {
  // let parentNode = null;
  // let stack = [rootNode];
  // while (stack.length) {
  //   let node = stack.shift();
  //   if (node.val !== target) {
  //     parentNode = node;
  //   } else {
  //     return parentNode;
  //   }
  //   if (node.left) stack.push(node.left);
  //   if (node.right) stack.push(node.right);
  // }
  // return undefined;
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   set the parent that points to it to null
  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
