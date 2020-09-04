async function async1() {
    console.log("async1 start");
    // 原来代码
    // await async2();
    // console.log("async1 end");

    // 转换后代码
    new Promise(resolve => {
        console.log("async2")
        resolve()
    }).then(res => console.log("async1 end"))
}
async function async2() {
    console.log("async2");
}
async1();
console.log("start")

// --------------------------------------------
// async中的return返回的是一个Promise对象，如果不是Promise对象，会封装成Promise.resolve()
async function async1() {
    console.log("async1 start");
    // 原来代码
    let aa = await async2();
    console.log('await', aa)
    console.log("async1 end");
}
async function async2() {
    // return "async2"
    // return Promise.resolve("async2");
    return new Promise((resolve, reject) => {
        resolve("async2")
    })
}
async1();

// async1 start
// await async2
// async1 end
// Promise {<resolved>: undefined}

// -------------------------------------------

async function async1() {
    console.log('async1 start');
    await new Promise(resolve => {
        console.log('promise1')
    })
    console.log('async1 success');
    return 'async1 end'
}
console.log('srcipt start')
async1().then(res => console.log(res))
console.log('srcipt end')

// --------------------------------------------
let start = Date.now();
async function async1() {
    console.log('async1 start');   //宏1
    await new Promise(resolve => {
        console.log('promise1')   //宏1
        resolve('promise1 resolve')
    }).then(res => console.log(res, Date.now() - start))    //微1：<resoleve>: promise1 resolve
    console.log('async1 success', Date.now() - start);    //微2
    return 'async1 end'
}
console.log('srcipt start')   //宏1
async1().then(res => console.log(res, Date.now() - start))    //微3：<resoleve>: async1 end
console.log('srcipt end')   //宏1

// ---------------------------------------------

async function testSometing() {
    console.log("执行testSometing");
    return "testSometing";
}

async function testAsync() {
    console.log("执行testAsync");
    return Promise.resolve("hello async");
}

async function test() {
    console.log("test start...");

    // 等价
    new Promise(resolve => {
        console.log("执行testSometing");
        resolve("testSometing");
    }).then(res => {
        console.log(res);

        new Promise(resolve2 => {
            console.log("执行testAsync");
            resolve2("hello async");
        }).then(res2 => {
            console.log(res2);
            console.log(res, res2);
        })
    })

    // 等价
    // const v1 = await testSometing();
    // console.log(v1);
    // const v2 = await testAsync();
    // console.log(v2);
    // console.log(v1, v2);
}

test();

var promise = new Promise(resolve => {
    console.log("promise start...");
    resolve("promise");
});
promise.then(val => console.log(val));

console.log("test end...");

