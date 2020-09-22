// 🔴这样写只能实现一次单层的两两比较
function bubbleSort(arr) {
    let len = arr.length;
    let t;
    for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            t = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = t;
        }
    }
    console.log(`new: ${arr}`)
    return arr;
}

var arr = [12, 35, 23, 435, 64, 231, 5, 23, 657, 435, 78, 5, 4, 3, 24, 6];
console.log(`old: ${arr}`)
bubbleSort(arr);

// 🔴这样写只能实现i后面的两两比较：只把最大项移到后面了，没有把最小项移到前面
function bubbleSort(arr) {
    let len = arr.length;
    let t;

    for (let i = 0; i < len; i++) {
        console.log(arr[i], arr)
        for (let j = i; j < len - i; j++) {
            // console.log(arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
    console.log(`new: ${arr}`)
    return arr;
}

var arr = [12, 35, 23, 435, 64, 231, 5, 657, 78, 4, 3, 24, 6];
console.log(`old: ${arr}`)
bubbleSort(arr);

// ✅循环了13次
function bubbleSort(arr) {
    let len = arr.length;
    let t;
    for (let i = 0; i < len; i++) {
        console.log(arr[i], arr)
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
    console.log(`new: ${arr}`)
    return arr;
}

var arr = [12, 35, 23, 435, 64, 231, 5, 657, 78, 4, 3, 24, 6];
console.log(`old: ${arr}`)
bubbleSort(arr);

// ✅优化：循环了11次
function bubbleSort1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        console.log(arr[i], arr)
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (flag) break;  //如果没有交换过，意味着排序已经完成
    }
    return arr;
}

var arr1 = [12, 35, 23, 435, 64, 231, 5, 657, 78, 4, 3, 24, 6];
console.log(`old: ${arr1}`)
bubbleSort1(arr1);


// 总结：
// 冒泡排序应该是0~i次，0~（i-1）次，0~（i-2）次的两两循环；
// 优化：如果没有交换过，意味着排序已经完成

