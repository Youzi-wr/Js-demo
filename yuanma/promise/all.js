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



