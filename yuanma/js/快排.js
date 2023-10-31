// 方式一：会改变原数组！！
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let midIndex = Math.floor(arr.length / 2);
  let midItem = arr.splice(midIndex, 1)[0];
  let left = [], right = [];
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if (cur < midItem) left.push(cur)
    else right.push(cur)
  }
  return quickSort(left).concat(midItem, quickSort(right))
}

let arr = [2, 4, 12, 9, 22, 10, 18, 6];
console.log(quickSort(arr))



// 方式二
const partition = function(arr, left, right) {
  // 基准值
  let pivotValue = arr[left];
  
  // 左区末尾下标
  let leftLast = left;

  // 遍历数组，除最左侧，因为其被设置成了基准
  for(let i = left + 1; i <= right; i++) {
    // 小于基准值的应被放到左区，这里注意，左区末尾下标需要先加1
    if(arr[i] <= pivotValue) {
      leftLast++;
      [arr[i], arr[leftLast]] = [arr[leftLast], arr[i]];
    }
  }

  // 循环结束后的数组的顺序应该已经是 基准+左区+右区，但是我们想要得到的顺序是 左区+基准+右区，故将基准和左区末尾元素交换
  [arr[left], arr[leftLast]] = [arr[leftLast], arr[left]];

  // 最后返回新的基准下标即可
  return leftLast;

}

const quickSort = function (arr, left = 0, right = arr.length - 1) {
  // 递归结束条件
  if (left >= right) return;

  // 基准下标
  let pivotIndex = partition(arr, left, right)

  // 对左区再选基准分区
  quickSort(arr, left, pivotIndex - 1);

  // 对右区再选基准分区
  quickSort(arr, pivotIndex + 1, right);

  // 返回拍好序的数组
  return arr;

}
