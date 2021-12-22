/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
`* 链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof
 */

// 给定 target = 5，返回 true。
// 给定 target = 20，返回 false。
var arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

// 以左下角为原点，大于当前点往右，小于当前点往上
function findArrayIn2DArray(matrix, target) {
  if (!matrix.length) return
  let x = matrix.length - 1
  let y = 0
  while (x > 0 && y < matrix[x].length) {
    if (matrix[x][y] === target) {
      return true
    } else if (matrix[x][y] > target) {
      x--
    } else {
      y++
    }
  }
  return false
}

console.log(arr)

