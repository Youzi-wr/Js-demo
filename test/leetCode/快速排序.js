function quickSort(arr, key, map) {
  if (arr.length <= 1) return arr
  const midIndex = Math.floor(arr.length / 2)
  const mid = arr.splice(midIndex, 1)[0]
  const left = [], right = []
  for (let i = 0; i < arr.length; i++) {
    map[arr[i][key]] <= map[mid[key]] ? left.push(arr[i]) : right.push(arr[i])
  }
  return quickSort(left, key, map).concat([mid], quickSort(right, key, map))
}

// const arr = [12, 4, 5, 6, 2, 3, 4, 5, 5, 23, 45, 67, 23, 45, 3]
// console.log(quickSort(arr))

const sort = ['a', 'b', 'c', 'd', 'e', 'h', 'l', 's', 't']
const arr = [{ type: 'a' }, { type: 't' }, { type: 'h' }, { type: 'c' }, { type: 's' }, { type: 'l' }, { type: 'a' }, { type: 't' }, { type: 'b' }]

const map = {}
for (let i = 0; i < sort.length; i++) {
  map[sort[i]] = i
}
console.log(quickSort(arr, 'type', map))