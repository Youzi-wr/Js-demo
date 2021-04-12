Function.prototype.before = function (beforeFn) {
    const self = this;
    // debugger
    return function (a) {
        // debugger
        beforeFn.apply(this, arguments)
        return self.apply(this, arguments)
    }
}

Function.prototype.after = function (afterFn) {
    const self = this;
    // debugger
    return function (a) {
        // debugger
        let fun = self.apply(this, arguments);
        afterFn.apply(this, arguments)
        return fun;
    }
}

function count() {
    console.log('count')
}

// count.before(() => console.log('before')).after(() => console.log('after'))();
// count()

// =====================================================
const obj = {
    name: "hello",
    fn() {
        console.log(`fn:${this.name}`)
    }
}
const newFun = obj.fn;
newFun.after(() => {
    // debugger;
    console.log('after')
}).before(() => {
    // debugger;
    console.log(`before:${this.name}`)
})('dqwdq') //error
// newFun()

// obj.fn()

// 这里的AOP必须针对的是没有上下文的函数，否则会发生隐式丢失
// 高阶函数（把函数作为参数）的写法，是否都存在隐式丢失的问题，待验证！！