import { tree } from './tree.js'

function findMaxDeep(tree) {
  if (!tree) return 0

  let deep = 1

  function dfs(node, depth) {
    if (!node.left && !node.right) {
      deep = Math.max(depth, deep)
      return
    }
    node.left && dfs(node.left, depth + 1)
    node.right && dfs(node.right, depth + 1)
  }
  dfs(tree, deep)
  return deep
}


console.log('最大深度：', findMaxDeep(tree))