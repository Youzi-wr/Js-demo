/**
 * 请在 sum函数中调用此函数，完成数值计算
 * @param {*} a 要相加的第一个值
 * @param {*} b 要相加的第二个值
 * @param {*} callback 相加之后的回调函数
 */
function asyncAdd(a, b, callback) {
    setTimeout(function () {
        callback(null, a + b)
    }, 1000)
}

async function sum(...rest) {
    let result = rest.shift();
    for (let m of rest) {
        result = await new Promise((resolve) => {
            asyncAdd(result, m, (_, count) => resolve(count))
        })
        console.log(result)
    }
    return result
}

let start = window.performance.now()
sum(1, 2, 3, 4, 5, 6).then(res => {
    // 请保证在调用sum方法之后，返回结果21
    console.log(res)
    console.log(`程序执行共耗时: ${window.performance.now() - start}`)
})
