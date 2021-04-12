function search(arr, key) {
    let l = 0,
        r = arr.length - 1;
    while (l <= r) {
        let middle = Math.floor((l + r) / 2);
        if (arr[middle] === key) return middle;
        if (arr[middle] > key) {
            r = middle - 1
        } else {
            l = middle + 1
        }
    }
    return -1;
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(search(arr, 6)) // 5


function middleSearch(arr, key, startIndex, endIndex) {
    if (startIndex > endIndex) {
        return false
    }
    middle = Math.floor((startIndex + endIndex) / 2)
    if (arr[middle] == key) {
        return middle
    } else if (arr[middle] > key) {
        return middleSearch(arr, key, startIndex, middle - 1)
    } else {
        return middleSearch(arr, key, middle + 1, endIndex)
    }
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
len = arr.length
middleSearch(arr, 6, 0, len - 1)
