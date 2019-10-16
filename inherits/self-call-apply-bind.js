// ****************************** 手写源码call,apply,bind *********************
function sayHelloTo(to) {
    console.log(`${this.name} say hello to ${to}`)
}

var Jerry = {
    name: 'Jerry'
}
sayHelloTo.call(Jerry, 'Tom')
//Jerry say hello to Tom.

var Foo = {
    name: 'Foo'
}
sayHelloTo.apply(Foo, ['Bar'])
//Foo say hello to Bar.

var XYZ = {
    name: 'XYZ'
}
var say = sayHelloTo.bind(XYZ)
say('ABC')
//XYZ say hello to ABC.

// --------------------- 模拟call ------------------
Function.prototype.myCall = function (context, ...args) {
    // 判断是否是undefined和null
    if (typeof context === 'undefined' || context === null) {
        context = window
    }
    let fnSymbol = Symbol()
    context[fnSymbol] = this
    let fn = context[fnSymbol](...args)
    delete context[fnSymbol]
    return fn
}

// --------------------- apply ------------------
Function.prototype.myApply = function (context, args) {
    // 判断是否是undefined和null
    if (typeof context === 'undefined' || context === null) {
        context = window
    }
    let fnSymbol = Symbol()
    context[fnSymbol] = this
    let fn = context[fnSymbol](...args)
    return fn
}

// --------------------- apply ------------------
Function.prototype.myBind = function (context) {
    if (typeof context == undefined || typeof context == null) {
        return window;
    }

    let sym = Symbol();
    context[sym] = this;
    let fn = context[sym];
    delete context[sym];
    return fn;
}