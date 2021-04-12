// function add(arr) {
//     return arr.reduce((prev, cur) => prev + cur, 0);
// }
// // console.log(add([100, 200, 10]));
// // console.log(add([100, 200]));

// // 对比使用柯里化优势：
// function curry(fn) {
//     var args = [];
//     return function fe() {
//         if (arguments.length === 0) {
//             return fn.apply(this, args);
//         }
//         [].push.apply(args, arguments);
//         return fe;
//     }
// }

// const count = curry(function (...rest) { //注意这里参数形式
//     return rest.reduce((prev, cur) => prev + cur, 0);
// })
// console.log(count(100)(200)(10)());
// console.log(count(100)(200)());


// -------------------------
function curry1(fn) {
    if (fn.length <= 1) return fn;
    const generator = (...args) => {
        if (fn.length === args.length) {
            return fn(...args)
        } else {
            return (...args2) => {
                return generator(...args, ...args2)
            }
        }
    }
    return generator
}

// --------------------------
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) { // 通过函数的length属性，来获取函数的形参个数
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    }
}

function bar(a, b, c) {
    return a + b + c;
}
// 把函数传进去就可以了
var f = curry(bar)

console.log(f(1)(2)(3));
console.log(f(1)(2, 3));
console.log(f(1, 2)(3));
console.log(f(1, 2, 3, 4));



// 标准
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}
