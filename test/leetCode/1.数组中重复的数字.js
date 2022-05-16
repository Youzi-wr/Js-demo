import { measure } from "../util/measure"

/**
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 输入：
  [2, 3, 1, 0, 2, 5, 3]
 输出：2 或 3
 */
var arr = [2, 3, 1, 0, 2, 5, 3]
// @measure
// function repeat(arr) {
//   var obj = {}
//   for (let i = arr.length; i > 0; i--) {
//     if (!obj.i) obj.i = 1
//     else {
//       obj.i++
//       return obj.i
//     }
//   }
// }
// console.log(repeat(arr))

class Test {
  constructor() { }

  @measure
  repeat(arr) {
    var obj = {}
    for (let i = arr.length; i > 0; i--) {
      if (!obj.i) obj.i = 1
      else {
        obj.i++
        return obj.i
      }
    }
  }
}

var test = new Test()
test.repeat(arr)