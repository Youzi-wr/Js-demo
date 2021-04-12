// -------------------第一阶段-------------------
// 一、https://zhuanlan.zhihu.com/p/69070129

var jerry = {
    name: 'jerry'
};

function sayHello(to) {
    console.log(`${this.name} sayHello to ${to}`);
}

Function.prototype.myCall = function (context, ...arg) {
    context = context || window;
    let fn = Symbol();
    context[fn] = this;
    let fun = context[fn](...arg);
    delete context[fn]

    return fun
}

// //call
// sayHello.call(jerry, 'Tom');

// //apply
// sayHello.apply(jerry, ['Tom']);

// //bind
// var say = sayHello.bind(jerry);
// say('Tom');


Function.prototype.myCall = function (context, ...arg) {
    if (typeof context == undefined || context == null) {
        context = window;
    }

    let fn = Symbol();
    context[fn] = this;
    let fun = context[fn](...arg);
    delete context[fn];
    return fun;
}

Function.prototype.myApply = function (context, arg) {
    if (typeof context == undefined || context == null) {
        context = window;
    }

    let fn = Symbol();
    context[fn] = this;
    let fun = context[fn](...arg);
    delete context[fn];
    return fun;
}

Function.prototype.myBind = function (context, ...arg1) { //[error]
    if (typeof context == undefined || context == null) {
        context = window;
    }
    const self = this;
    return function (...arg) {
        return self.apply(context, [...arg1, ...arg])
    }
}

// sayHello.myCall(jerry, 'Tom');

// //apply
// sayHello.myApply(jerry, ['Tom']);

// //bind
// var say = sayHello.myBind(jerry);
// say('Tom');


// But >>>>>>>
function sayHi(to, from) {
    console.log(`${this.name} sayHi to ${to} from ${from}`);
}

//bind
var say = sayHi.bind(jerry, "Bob");
say('Tom');

//bind
var say = sayHi.myBind(jerry, "Bob");
say('Tom');

// 分析:
// 由此可见，上文关于myBind的写法是有问题的，
// 原生bind方法中，bind可指定参数n，并依次作为原函数的参数传入，bind得到的方法所传参数为原函数的第n+1位依次传入。
// 使用bind时传入默认参数的方法可扩展👇👇到柯里化中：
function add(a, b, c) {
    return a + b + c;
}
let f1 = add.bind(undefined, 100);
console.log(f1(2, 3)); // 105 = 100 + 2 + 3
let f2 = f1.bind(undefined, 200);
console.log(f2(3)); // 303 = 100 + 200 + 3


// -------------------第二阶段-------------------
Function.prototype.bind2 = function (context) { //[error]
    if (typeof context == undefined || context == null) {
        context = window;
    }
    const self = this;
    return function (...arg) {
        return self.apply(context, arg)
    }
}



// ******************** 扩展👇👇 *********************
// 二、https://juejin.im/post/5aa7d82c6fb9a028c522de43

let obj = { a: 1 };
function fn() {
    this.b = 100;
    return this.a;
}
let fe = fn.bind(obj);

console.log(fe()); // 1  里面this是obj
console.log(obj); // { a: 1 }
console.log(new fe()); // 里面this是当前创建实例对象 { b: 100 }
