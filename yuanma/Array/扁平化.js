// repeat 1
var arr = [3, 43, 35, 45, [234, 56, [36, 7, [98], 9], 76], 86]
var flatten = (arr, depth = 1) =>
    depth == 1 ?
        arr.reduce((a, v) => a.concat(v), []) :
        arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
console.log(flatten(arr, 3))

// 注意，这里要先concat再判断是否是数组