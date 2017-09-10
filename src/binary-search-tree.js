// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
BinarySearchTree.prototype.push = (val) => {
  const root = this.root;

  if (!root) {
    this.root = new Node(val);
    return;
  }
  let currentNode = root;
  const newNode = new Node(val);

  while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    }
    if (!currentNode.right) {
      currentNode.right = newNode;
      break;
    } else {
      currentNode = currentNode.right;
    }
  }
};
module.exports = BinarySearchTree;
