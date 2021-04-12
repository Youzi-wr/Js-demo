// // https://zhuanlan.zhihu.com/p/263559621
// // 例1
// function decoder(html) {
//     let decoder = document.createElement('div')
//     decoder.innerHTML = html;
//     console.log(decoder.textContent)
// }

// // 例2
// const inBrowser = typeof window !== undefined;
// const UA = inBrowser && window.navigator.userAgent.toLowerCase()
// const isIE = UA && /msie|trident/.test(UA)
// const isIE9 = UA & UA.indexOf('msie 9.0') > 0
// const isEdge = UA && UA.indexOf('edge/') > 0
// const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
// const isFF = UA && UA.match(/firefox\/(\d+)/)

// // 例3
// function isNative(fn) {
//     return typeof fn == "function" && /native code/.test(fn.toString())
// }

// // 例4
// // repeat 1
// function once(fn) {
//     let ifCalled = false;
//     return function () {
//         if (!ifCalled) {
//             ifCalled = true;
//             fn.apply(this, arguments)
//         }
//     }
// }

// // 例5 缓存函数
// // repeat !!!
// function cached(fn) {
//     const cache = Object.create(null);
//     return function cachedFn(str) {
//         if (!cache[str]) {
//             cache[str] = fn(str);
//         }
//         return cache[str]
//     }
// }

// function computed(str) {
//     console.log("执行了10分钟")
//     return '算出来了'
// }

// const cacheComputed = cached(computed)
// console.log(cacheComputed("aaa"))
// console.log(cacheComputed("aaa"))

// // 例6
// // 将null和undefined直接转化为空字符串
// // 当转换一个数组或者对象时，我们会使用JSON.stringify
// // 如果对象的toString方法被重写了，那我们会偏向使用String()
// // 其它情况下，一般都用String()
// function isPlainObject(str) {
//     return Object.prototype.toString.call(str) == "[Object Object]"
// }

// function string(val) {
//     if (val == null || val == undefined) return "";
//     if (Array.isArray(val)) return JSON.stringify(val);
//     if (isPlainObject(val) && val.toString == Object.prototype.toString) return JSON.stringify(val);
//     return String(val)
// }

// // 例7 懒函数
// // 在第一次执行后，用一个新函数重写之前的函数
// function fn() {
//     let instance = null;
//     return function () {
//         if (!instance) instance = new User();
//         return instance;
//     }
// }

// var lazyFn = function () {
//     let instance = new User();
//     lazyFn = function () {
//         return instance;
//     }
//     return lazyFn();
// }

// // 例8 柯里化函数
// function sub(...args) {
//     return args.reduce((sub, v) => sub + v)
// }
// sub(1, 2, 3)

// sub(1)(2)(3)

function curry(fn) {
    let arr = [];
    return function fe() {
        if (arguments.length == 1)
            fn.apply(this, arguments)
    }
}

function sub() {
    
}