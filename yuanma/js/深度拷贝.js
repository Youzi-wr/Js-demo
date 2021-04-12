// 一、🔴
function deepCopy(obj) {
    if (typeof obj !== 'object') return obj;
    if (typeof window !== 'undefined' && window.JSON) {
        return JSON.parse(JSON.stringify(obj));
    } else {
        var newObj = obj.constructor == Array ? [] : {};
        for (let i in obj) {
            newObj[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i]
        }
        return newObj;
    }
}

// 测试1
// let obj = { a: 1, b: [12] };
// let newObj = deepCopy(obj);
// newObj.b[1] = 100;
// console.log(obj);
// console.log(newObj);

// 测试2
// let fn = function () {
//     return 123
// }
// var a = [[1, 2], [4, 5, 6, 7, fn]];
// var b = JSON.parse(JSON.stringify(a));
// b[0].push('2')
// console.log(a);
// console.log(b);

// 分析：
//      1.用typeof obj !== 'object'的方式能区分出[]和{}吗  
//          答：不能，不能识别的还有null
//      2.obj.constructor == Array，用构造函数判断方式的优劣
//      3.JSON方法不能实现Function的拷贝



// 二、加强版 ✅
function isType(o) {
    return /\[object\s(.*?)\]/.exec(Object.prototype.toString.call(o))[1];
}

function cloneDeep(obj) {
    var type = isType(obj);
    if (type == 'Object' || type == 'Array') {
        var newObj = obj instanceof Array ? [] : {};
        for (let i in obj) {
            newObj[i] = cloneDeep(obj[i]);
        }
        return newObj;
    } else {
        return obj;
    }
}

// 测试1
// let c = new Date();
// var b = cloneDeep(c);
// console.log(b)
// console.log(c)

// 测试2
let fn = function () {
    return 123
}
var a = [[1, 2, undefined, null, ["wdd"], NaN], new Date(), [4, 5, 6, 7, fn]];
var b = cloneDeep(a);
b[0].push('2')
console.log(a);
console.log(b);



// 标准写法
function deepClone(arr) {
    const res = arr.constructor == Array ? [] : {};
    for (let i in arr) {
        if (arr.hasOwnProperty(i)) {
            if (arr[i] !== null && typeof arr == 'object') {
                res[i] = deepClone(arr[i])
            } else {
                res[i] = arr[i]
            }
        }
    }
    return res;
}

