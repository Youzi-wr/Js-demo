function add(arr) {
    return arr.reduce((prev, cur) => prev + cur, 0);
}
// console.log(add([100, 200, 10]));
// console.log(add([100, 200]));

// 对比使用柯里化优势：
function curry(fn) {
    var args = [];
    return function fe() {
        if (arguments.length === 0) {
            return fn.apply(this, args);
        }
        [].push.apply(args, arguments);
        return fe;
    }
}

const count = curry(function (...rest) { //注意这里参数形式
    return rest.reduce((prev, cur) => prev + cur, 0);
})
console.log(count(100)(200)(10)());
console.log(count(100)(200)());