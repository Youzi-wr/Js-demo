// https://mp.weixin.qq.com/s/klVQmjeWQipeoE3mDP2tGA

Array.prototype.push1 = function (...rest) {
    this.splice(this.length, 0, ...rest)
    return this.length;
}

Array.prototype.pop1 = function () {
    return this.splice(this.length - 1, 1)[0]
}

Array.prototype.mapUsingReduce = function (callback, thisArg) {
    return this.reduce(function (mappedArray, currentValue, index, array) {
        mappedArray[index] = callback.call(thisArg, currentValue, index, array);
        return mappedArray;
    }, []);
};
// 测试
// var arr1 = [1, 2, , 3].mapUsingReduce(
//     (currentValue, index, array) => {
//         return currentValue + index + array.length;
//     }
// ); // [5, 7, , 10]
// console.log(arr1)

Array.prototype.reduce1 = function (fn, initialValue) {
    if (!initialValue) {
        initialValue = this.shift()
    }

    this.forEach(item => {
        initialValue = fn(initialValue, item)
    })
    // for (let i in this) {  //会枚举出原型对象上的方法，push1,pop1,mapUsingReduce...
    //     initialValue = fn(initialValue, this[i]) + initialValue
    // }
    return initialValue
}
// 测试
// var aa = [1, 2, 3, 4].reduce1((acc, cur) => {
//     return acc + cur;
// })
// console.log(aa)


String.prototype.repeat1 = function (n) {
    return Array(n + 1).join(this);
}
String.prototype.repeat2 = function (n) {
    return Array(n).fill(this).join('');
}
// 测试
// 原生repeat
// 'ni'.repeat(3); // 'ninini'
// console.log('ni'.repeatString2(3));

function myInstanceOf(left, right) {
    // 如果是基础类型直接返回
    if (typeof left !== "object" || left === null) return false;
    // 获取__proto__
    var proto = Object.getPrototypeOf(left);
    while (true) {
        if (proto == null) return false;
        if (proto == right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}