// 使用Promise实现每隔1秒输出1,2,3
let arr = [1, 2, 3]

arr.reduce((p, i) => {
    return p.then(() => {
        return new Promise(r => {
            setTimeout(() => {
                r(console.log(x))
            }, 1000)
        })
    })
}, Promise.resolve())