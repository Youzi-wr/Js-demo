// 二叉树的搜索，输入一个普通二叉树的根节点，实现一个调度器，调用调度器的next()方法，
// 将返回二叉树中下一个最小的数；调用迭代器的hasNext()方法，将返回是否存在下一个数。二叉树节点是整数，无序。

// 实现
//     7
//    / \
//   3   15
//       / \
//      9   20

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const iterator = new BSTIterator(root);
iterator.next();    // 返回 3
iterator.next();    // 返回 7
iterator.hasNext(); // 返回 true
iterator.next();    // 返回 9
iterator.hasNext(); // 返回 true
iterator.next();    // 返回 15
iterator.hasNext(); // 返回 true
iterator.next();    // 返回 20
iterator.hasNext(); // 返回 false

/**
 * @param {TreeNode} root
 */
const stack = [];
let res = 0;
function BSTIterator(root) {
    while (root) {
        stack.push(root.left);
        root = root.left;
    }
}
/**
 * @return {number}
 */
BSTIterator.prototype.next = function (p) {
    p = stack.pop();
    res = p.val;
    p = p.right;
    while (p) {
        stack.push(p);
        p = p.left;
    }
    return res;
}

BSTIterator.prototype.hasNext = function () {
    return stack.length;
}