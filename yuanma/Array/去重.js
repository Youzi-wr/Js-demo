var arr1 = [1, 3, 5, 4, 3, 2, 4, 6, 3, 2, 4, 6, 7, 8, 9, 4, 3, 3];

// 方式一
var con1 = arr1.reduce((acc, cur) => {
    if (!acc.length || acc.indexOf(cur) == -1) {
        acc.push(cur)
    }
    return acc;
}, [])

// 方式二
var con2 = arr1.sort().reduce((acc, cur) => {
    if (!acc.length || acc[acc.length - 1] !== cur) {
        acc.push(cur)
    }
    return acc;
}, [])

// 方式三
Array.from(new Set(arr1));