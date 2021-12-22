function search(arr, key) {
  let low = 0, hight = arr.length - 1, mid
  while (low <= hight) {
    mid = Math.floor((low + hight) / 2)
    if (arr[mid] === key) {
      return mid
    } else if (arr[mid] < key) {
      low = mid + 1
    } else {
      hight = mid - 1
    }
  }
  return -1
}

const arr = [1, 2, 4, 6, 8, 14, 35, 46, 57, 68, 79, 80]
console.log(search(arr, 68))