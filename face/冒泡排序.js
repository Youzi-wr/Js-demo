// 冒泡排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (flag) break;
    }
    console.log(arr)
}
var arr = [34, 4, 56, 67, 3, 2, 56, 6, 34, 57];
bubbleSort(arr)



function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = arr.length; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                flag = false;
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
        if (flag) break;
    }
    console.log(arr)
}
var arr = [34, 4, 56, 67, 3, 2, 56, 6, 34, 57];
bubbleSort(arr)

// https://github.com/biaochenxuying/blog/issues/39

// 直接插入排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    console.log(arr)
}
var arr = [2, 1, 4, 3, 5];
bubbleSort(arr)