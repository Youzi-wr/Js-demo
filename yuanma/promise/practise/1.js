// 题一： 使用Promise实现每隔1秒输出1,2,3

// const arr = [1, 2, 3];
// arr.reduce((p, x) => {
//     return p.then(() => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(console.log(x))
//             }, 1000);
//         })
//     })
// }, Promise.resolve())

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
