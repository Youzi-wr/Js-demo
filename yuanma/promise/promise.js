// >>例1：
Promise.resolve().then(() => {  //then：微1
  console.log('promise1');
  const timer2 = setTimeout(() => { //宏3
    console.log('timer2')
  }, 0)
});
const timer1 = setTimeout(() => {   //宏2
  console.log('timer1')
  Promise.resolve().then(() => { //then：微2
    console.log('promise2')
  })
}, 0)
console.log('start');  //宏1


// 结果：
// start    //宏1
// promise1   //微1
// timer1  //宏2 
// promise2 //微2
// timer2   //宏3

// 总结：
// 1. 碰到resolve()、reject()，改变当前promise状态并保留结果
// 2. 碰到.then()，加入微任务队列。仅在promise状态发生改变后才执行
// 3. 碰到setTimeout，加入宏任务队列

// >>例2：
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {  //宏2
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => { //微1
  throw new Error('error!!!')
})
console.log('promise1', promise1)  //宏1.1
console.log('promise2', promise2)  //宏1.2
setTimeout(() => {  //宏3
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)

// 结果：
// 'promise1' Promise{<pending>}
// 'promise2' Promise{<pending>}
// Uncaught (in promise) Error: error!!!
// 'promise1' Promise{<resolved>: "success"}
// 'promise2' Promise{<rejected>: Error: error!!!}

// 分析：
// 执行微1时，promise1的状态是pending，故等到宏2执行时，promise1的状态改为resolve，再将微1推入微任务队列执行

// >>例3：
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {   //宏2
    resolve("success");
    console.log("timer1");
  }, 1000);
  console.log("promise1里的内容");   //宏1.1
});
const promise2 = promise1.then(() => {   //微1
  throw new Error("error!!!");
});
console.log("promise1", promise1);   //宏1.2
console.log("promise2", promise2);   //宏1.3
setTimeout(() => {   //宏3
  console.log("timer2");
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);


// 结果：
// "promise1里的内容"
// "promise1"  Promise{<pending>}
// "promise2"  Promise{<pending>}
// timer1
// Uncaught (in promise) Error: error!!!
// "timer2"
// "promise1"  Promise{<resolved>: "success"}
// "promise2"  Promise{<rejected>: Error: error!!!}

// >>例4：
function promise1 () {
  let p = new Promise((resolve) => {
    console.log('promise1');
    resolve('1')
  })
  return p;
}
function promise2 () {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}
promise1()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .then(() => console.log('finally1'))

promise2()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .then(() => console.log('finally2'))

// 结果：
// 'promise1'
// '1'
// 'error'
// 'finally1'
// 'finally2'

// >>例5：
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('timer')
    resolve('success')
  }, 1000)
})
const start = Date.now();
promise.then(res => {
  console.log(res, Date.now() - start)
})
promise.then(res => {
  console.log(res, Date.now() - start)
})

// 结果
// 'timer'
// 'success' 1001
// 'success' 1002


//---------- VS ---------------
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('timer')
    resolve('success')
  }, 1000)
})
const start = Date.now();
promise.then(res => {
  console.log(res, Date.now() - start)
}).then(res => {
  console.log(res, Date.now() - start)
})

// 结果
// timer
// success 1004
// undefined 1004


// ---------------------------------  总结  -----------------------------------
// Promise的状态一经改变就不能再改变。
// .then和.catch都会返回一个新的Promise。
// catch不管被连接到哪里，都能捕获上层未捕捉过的错误。
// 在Promise中，返回任意一个非 promise 的值都会被包裹成 promise 对象，例如return 2会被包装为return Promise.resolve(2)。
// Promise 的 .then 或者 .catch 可以被调用多次, 但如果Promise内部的状态一经改变，并且有了一个值，那么后续每次调用.then或者.catch的时候都会直接拿到该值。(例5)
// .then 或者 .catch 中 return 一个 error 对象并不会抛出错误，所以不会被后续的 .catch 捕获。
// .then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。
// .then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。
// .then方法是能接收两个参数的，第一个是处理成功的函数，第二个是处理失败的函数，再某些时候你可以认为catch是.then第二个参数的简便写法。
// .finally方法也是返回一个Promise，他在Promise结束的时候，无论结果为resolved还是rejected，都会执行里面的回调函数。

// * 4和8的区别在于有无return
// * 透传就是当前这个不作数的意思
// * return new Promise()和return Promise.resolve()的区别是new Promise()的状态是<pending>，.then()的执行时机取决于Promise的内部状态何时改变，而Promise.resolve()的状态是<resolved>，.then()可以直接执行。那promise循环为什么要以new Promise()或Promise.resolve()为始呢，是因为他们是都返回了一个promise对象，返回promise对象是链式调用的基础。

// 1. .finally()方法不管Promise对象最后的状态如何都会执行
// 2. .finally()方法的回调函数不接受任何的参数，也就是说你在.finally()函数中是没法知道Promise最终的状态是resolved还是rejected的
// 3. 它最终返回的默认会是一个上一次的Promise对象值，不过如果抛出的是一个异常则返回异常的Promise对象。

// * 碰到finally就会进；默认返回上一次的Promise；状态不可知；

// .catch()函数能够捕获到.all()里最先的那个异常，并且只执行一次。（例6）
// 使用.race()方法，它只会获取最先执行完成的那个结果，其它的异步任务虽然也会继续进行下去，不过race已经不管那些任务的结果了（例7）
// -------------------------------------------------------------------------

// >>例6：
let start = Date.now();
function runAsync(x) {
    const p = new Promise(r => setTimeout(() => r(x, console.log(x, Date.now() - start)), 1000 * x))
    return p
}
function runReject(x) {
    const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x, Date.now() - start)), 1000 * x))
    return p
}
// Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
//     .then(res => console.log(res, Date.now() - start))
//     .catch(err => console.log(err, Date.now() - start))
// 等价于
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
    .then(res => console.log(res, Date.now() - start),
        err => console.log(err, Date.now() - start))

// 1 1000         //函数的执行结果
// 2 2001         //函数的执行结果
// Error: 2 2001  //Promise.all的执行结果  //这个是第一个异常，也是被catch或者then的第二个参数捕获的异常，把它单独抽出来就好理解了
// 3 3000         //函数的执行结果
// 4 4001         //函数的执行结果


// >>例7：
function runAsync (x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
Promise.race([runAsync(1), runAsync(2), runAsync(3)])
  .then(res => console.log('result: ', res))
  .catch(err => console.log(err))

// 1
// 'result: ' 1
// 2
// 3