// .catch只捕获最先的那个异常
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

function promiseAll(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            return reject(new Error('参数必须是数组'))
        }

        const len = arr.length;
        const res = [];
        for (let i = 0; i < len; i++) {  //单纯的使用for循环不能保证输出结果的有序性
            // if(Object.prototype.toString.call(arr[i]) == '[Object Promise]')
            Promise.resolve(arr[i]).then((value) => {
                res.push(value);
                if (res.length == len) resolve(res)
            })
        }
    })
}

// 测试
const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('1')
    }, 1000)
})
const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('2')
    }, 2000)
})
const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('3')
    }, 3000)
})

function promiseAll(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            return reject(new Error('参数必须是数组'))
        }

        const len = arr.length;
        const res = [];
        let conunt = 0;
        for (let i = 0; i < len; i++) {  //单纯的使用for循环不能保证输出结果的有序性
            // if(Object.prototype.toString.call(arr[i]) == '[Object Promise]')
            Promise.resolve(arr[i]).then((value) => {
                conunt++;
                res[i] = value;
                if (conunt == len) resolve(res)
            }).catch(e => reject(e))
        }
    })
}

promiseAll([promise1, promise3, promise2]).then((res) => {
    console.log(res)
}).catch(e => console.log('error', e))


function promiseAll(arr) {
    if (!Array.isArray(arr)) {
        console.log('参数必须是数组')
    }

    const len = arr.length;
    const res = [];
    arr.reduce((pCollect, promise) => {
        return pCollect.then(() => {
            return promise.then(value => {
                res.push(value)
                return res;
            })
        })
    }, Promise.resolve())
}




