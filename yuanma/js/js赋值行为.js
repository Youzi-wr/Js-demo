function assignment() {
    var a = b = 1;

    console.log(a)
    console.log(b)
}

assignment()
console.log('---------')
// console.log(a)
console.log(b)

// 等价于
function assignment() {
    b = 1;
    var a = b;

    console.log(a)
    console.log(b)
}

// b变成了全局变量，在严格模式下，在外部访问b会抛出异常
