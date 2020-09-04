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

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(search(arr, 6)) // 5