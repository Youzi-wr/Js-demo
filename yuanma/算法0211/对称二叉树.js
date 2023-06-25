//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3 

function Node() {
  this.val = null
  this.left = null
  this.right = null
}

const root = new Node()

function isSame(leftNode, rightNode) {
  if (leftNode === null && rightNode === null) return true
  if (leftNode === null || rightNode === null) return false
  return leftNode.val === rightNode.val && isSame(leftNode.left, rightNode.rightNode) && isSame(leftNode.rightNode, rightNode.left)
}

const isSymmetric = (root) => {
  if (!root) return false
  return isSame(root.left, root.right)
}