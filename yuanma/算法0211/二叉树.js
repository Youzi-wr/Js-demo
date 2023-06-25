import { tree as root } from './tree.js'

// 前序遍历
function treePre(root) {
  const stack = [],res = []
  while (root || stack.length) {
    while (root) {
      res.push(root.value)
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    root = root.right
  }
  return res
}

// 中序遍历
function treeMiddle(root) {
  const stack = [],res = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.value)
    root = root.right
  }
  return res
}

// 后序遍历
function treeNext(root) {
  const stack = [],res = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      res.unshift(root.value)
      root = root.right
    }
    root = stack.pop()
    root = root.left
  }
  return res
}


console.log('前序遍历：', treePre(root))
console.log('中序遍历：', treeMiddle(root))
console.log('后序遍历：', treeNext(root))