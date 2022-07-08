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
  let stack = [rootNode];
  if (rootNode.val === target) {
    return null;
  }
  while (stack.length) {
    let node = stack.pop();

    if (node.left && node.left.val === target) {
      return node;
    }

    if (node.right && node.right.val === target) {
      return node;
    }

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return undefined;
}

function inOrderPredecessor(rootNode, target) {
  let stack = [rootNode];
  let node = rootNode;
  let predecessor = null;

  while (stack.length > 0) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      if (target === node.val) {
        return predecessor.val;
      }
      predecessor = node;
      node = node.right;
    }
  }
  return undefined;
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let parent = getParentNode(rootNode, target);
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

  if (!rootNode) return;

  if (rootNode.val === target) {
    if (!rootNode.left && !rootNode.right) {
      return null;
    }

    if (!rootNode.left && rootNode.right) {
      return rootNode.right;
    }
    if (rootNode.left && !rootNode.right) {
      return rootNode.left;
    }
  } else if (rootNode.val > target) {
    rootNode.left = deleteNodeBST(rootNode.left, target);
  } else {
    rootNode.right = deleteNodeBST(rootNode.right, target);
  }
  return rootNode;
}

// let bstRoot = new TreeNode(4);
// bstRoot.left = new TreeNode(2);
// bstRoot.left.left = new TreeNode(1);
// bstRoot.left.right = new TreeNode(3);
// bstRoot.right = new TreeNode(6);
// bstRoot.right.left = new TreeNode(5);
// bstRoot.right.right = new TreeNode(7);

// console.log(inOrderPredecessor(bstRoot, 3));

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
