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