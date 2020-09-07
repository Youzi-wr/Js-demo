// 题一： 使用Promise实现每隔1秒输出1,2,3

const arr = [1, 2, 3];
arr.reduce((p, x) => {
    return p.then(() => {
        return new Promise(resolve => {   //这里如果直接执行setTimeout，则会一次添加两个1s后的定时器，1s后同时输出2和3，所以用promise控制时序
            setTimeout(() => {
                resolve(console.log(x))
            }, 1000);
        })
    })
}, Promise.resolve()) //用Promise.resolve()作为起始值是因为需要返回一个promise对象，返回promise对象是promise链式调用的基础

// ✅----------------------------------------- 
// const arr = [1, 2, 3]
// arr.reduce((p, x) => p.then(() => new Promise(r => setTimeout(() => r(console.log(x)), 1000))), Promise.resolve())

Promise.resolve()
    .then(() => {
        return new Promise(r => {
            setTimeout(() => {
                r(console.log(1))
            }, 1000);
        })
    })
    .then(() => {
        return new Promise(r => {
            setTimeout(() => {
                r(console.log(2))
            }, 1000);
        })
    })
    .then(() => {
        return new Promise(r => {
            setTimeout(() => {
                r(console.log(3))
            }, 1000);
        })
    })

// 🔴-----------------------------------------
// const arr = [1, 2, 3];
// arr.reduce((p, x) => p.then(new Promise(r => setTimeout(() => r(console.log(x)), 1000))), Promise.resolve());

Promise.resolve()
    .then(
        new Promise(r => {
            setTimeout(() => {
                r(console.log(1))
            }, 1000);
        })
    )
    .then(
        new Promise(r => {
            setTimeout(() => {
                r(console.log(2))
            }, 1000);
        })
    )
    .then(
        new Promise(r => {
            setTimeout(() => {
                r(console.log(3))
            }, 1000);
        })
    )

// 发生了透传，后面的then不会等第一个then的结果。但是.then中的代码会执行，等于直接执行了3个timeout


// 分析：
// return new Promise()和return Promise.resolve()的区别是new Promise()的状态是<pending>，.then()的执行时机取决于Promise的内部状态何时改变，
// 而Promise.resolve()的状态是<resolved>，.then()可以直接执行。
// 那promise循环为什么要以new Promise()或Promise.resolve()为始呢，
// 是因为他们是都返回了一个promise对象，返回promise对象是链式调用的基础。

