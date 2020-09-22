// this的5种绑定方式：

// 默认绑定(非严格模式下this指向全局对象, 严格模式下this会绑定到undefined)
// 隐式绑定(当函数引用有上下文对象时, 如 obj.foo()的调用方式, foo内的this指向obj)
// 显示绑定(通过call()或者apply()方法直接指定this的绑定对象, 如foo.call(obj))
// new绑定
// 箭头函数绑定(this的指向由外层作用域决定的)

// 例1
let a = 10
const b = 20

function foo() {
    console.log(this.a)
    console.log(this.b)
}
foo();
console.log(window.a)

// 有两种情况容易发生隐式丢失问题：
// 使用另一个变量来给函数取别名
// 将函数作为参数传递时会被隐式赋值，回调函数丢失this绑定

// 例2.1
function foo() {
    console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;

obj.foo();
foo2();

// 例2.2
function foo() {
    console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo }

obj.foo();
foo2();
obj2.foo2();

// 例2.3
// 而对于setTimeout中的函数，这里存在隐式绑定的隐式丢失，也就是当我们将函数作为参数传递时会被隐式赋值，回调函数丢失this绑定，因此这时候setTimeout中的函数内的this是指向window的
// 而并非和定时器有关系
var obj1 = {
    a: 1
}
var obj2 = {
    a: 2,
    foo1: function () {
        console.log(this.a)
    },
    foo2: function () {
        setTimeout(function () {
            console.log(this)
            console.log(this.a)
        }, 0)
    }
}
var a = 3

obj2.foo1()
obj2.foo2()

// 例2.4
var obj1 = {
    a: 1
}
var obj2 = {
    a: 2,
    foo1: function () {
        console.log(this.a)
    },
    foo2: function () {
        function inner() {
            console.log(this)
            console.log(this.a)
        }
        inner()
        // inner.call(obj1)  //显示绑定
    }
}
var a = 3
obj2.foo1()
obj2.foo2()

// 例3
// foo().call(obj)开始会执行foo()函数，打印出2，但是会对foo()函数的返回值执行.call(obj)操作，可是我们可以看到foo()函数的返回值是undefined，因此就会报错了
function foo() {
    console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo()
foo.call(obj)
foo().call(obj)

// 例4
function foo() {
    console.log(this.a)
    return function () {
        console.log(this.a)
    }
}
var obj = { a: 1 }
var a = 2

foo()
foo.bind(obj)
foo().bind(obj)

// 例5
var obj = {
    a: 1,
    foo: function (b) {
        b = b || this.a
        return function (c) {
            console.log(this.a + b + c)
        }
    }
}
var a = 2
var obj2 = { a: 3 }

obj.foo(a).call(obj2, 1) //开始调用obj.foo(a)将2传入foo函数并赋值给型参b，并且由于闭包的原因，使得匿名函数内能访问到b，之后调用匿名函数的时候，用call()改变了this的指向，使得匿名函数内this.a为3，并传入最后一个参数1，所以第一行输出的应该是3 + 2 + 1，也就是6
obj.foo.call(obj2)(1)

// ---------------分析------------
// 上例解释说：由于闭包的原因，使得匿名函数内能访问到b
// 谁是闭包，是foo所声明的匿名对象时闭包，还是内部return的匿名函数是闭包
// TODO 概念：匿名函数和闭包


// 例6
function foo1() {
    console.log(this.a)
}
var a = 1
var obj = {
    a: 2
}

var foo2 = function () {
    foo1.call(obj)
}

foo2()
foo2.call(window)


// --------------------总结-----------------
// this 永远指向最后调用它的那个对象
// 匿名函数的this永远指向window
// 使用.call()或者.apply()的函数是会直接执行的
// bind()是创建一个新的函数，需要手动调用才会执行
// 如果call、apply、bind接收到的第一个参数是空或者null、undefined的话，则会忽略这个参数
// forEach、map、filter函数的第二个参数也是能显式绑定this的
// -----------------------------------------




