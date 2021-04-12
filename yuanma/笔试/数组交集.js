// 数组交集，编写一个函数，输入两个数组，输出它们的交集。

// 方法一 Runtime:0ms
function intersect(arr, arr1) {
    const map = {};
    const res = [];

    for (const n of arr) {
        map[n] = map[n] ? ++map[n] : 1; //注意++map[n]和map[n]++
    }
    console.log(map);
    for (const m of arr1) {
        if (map[m] > 0) {
            res.push(m)
            map[m]--;
        }
    }
    console.log(res)
}

// 方法二 Runtime:4ms
function intersect2(arr, arr1) {
    arr = arr.sort();
    arr1 = arr1.sort();
    let p0 = 0, p1 = 0;
    const res = [];
    while (p0 < arr.length && p1 < arr1.length) {
        if (arr[p0] > arr1[p1]) {
            p1++;
        } else if (arr[p0] < arr1[p1]) {
            p0++;
        } else {
            res.push(arr[p0]);
            p0++;
            p1++;
        }
    }
    console.log(res)
}

const nums1 = [1, 2, 2, 1], nums2 = [2, 2];
intersect2(nums1, nums2)
