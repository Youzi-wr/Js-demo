// 实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。


const time = (timer) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, timer)
    })
}
const ajax1 = () => time(2000).then(() => {
    console.log(1);
    return 1
})
const ajax2 = () => time(1000).then(() => {
    console.log(2);
    return 2
})
const ajax3 = () => time(1000).then(() => {
    console.log(3);
    return 3
})

// 等价----------
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve()
//     }, 2000)
// }).then(() => {
//     console.log(1);
//     return Promise.resolve(1);
// })

// new Promise(resolve => {
//     setTimeout(() => {
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log(2);
//     return Promise.resolve(2);
// })

// new Promise(resolve => {
//     setTimeout(() => {
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log(3);
//     return Promise.resolve(3);
// })
// -------------

// 🔴----------------
function mergePromise(arr) {
    // 在这里写代码
    let rr = [];
    arr.push(undefined)
    return new Promise(resolve => {
        arr.reduce((p, x) => {
            return p.then(res => {
                rr.push(res);
                if (!x) resolve(rr)
                else return x();
            })
        }, Promise.resolve())
    });
}

// 1
// 2
// 3
// done
// [undefined, 1, 2, 3]

//  ✅----------------
// function mergePromise(arr) {
//     // 存放每个ajax的结果
//     const data = [];
//     let promise = Promise.resolve();
//     arr.forEach(ajax => {
//         // 第一次的then为了用来调用ajax
//         // 第二次的then是为了获取ajax的结果
//         promise = promise.then(ajax).then(res => {
//             data.push(res);
//             return data; // 把每次的结果返回
//         })
//     })
//     // 最后得到的promise它的值就是data
//     return promise;
// }


mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log("done");
    console.log(data); // data 为 [1, 2, 3]
});

  // 要求分别输出
  // 1
  // 2
  // 3
  // done
  // [1, 2, 3]
