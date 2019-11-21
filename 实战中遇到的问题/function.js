
// 函数参数传递的是引用类型（书中对引用类型的描述）
let stu = { a: 1, b: 2 }
let b = 3
// let b=4
// let b=5
let filter = { ...stu, b }
console.log(filter)
function ss(fill) {
    fill.c = fill.b || 1
    delete fill.b
    console.log('ss', fill)
}
function sse(fill) {
    fill.c = fill.b || 1
    delete fill.b
    console.log('sse', fill)
}
ss(filter)
sse(filter)

// ------------------------------