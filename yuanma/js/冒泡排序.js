var arr1 = [12, 35, 23, 435, 64, 231, 5, 657, 78, 4, 3, 24, 6];
console.log(`old: ${arr1}`)
bubbleSort1(arr1);

function bubbleSort(arr) {
    if (arr.constructor !== Array) return false;

    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let flag = true;
        for (let j = len - 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                flag = false;
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
        if (flag) break;
    }
    return arr;
}
