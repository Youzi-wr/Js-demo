var value = 2;

var foo = {
    value: 1
}

function fooBind(name, age) {
    return {
        value: this.value,
        name: name,
        age: age
    }
}

var bind1 = fooBind.bind(foo, 'Tom', 20);
console.log(bind1)
console.log(bind1())

var bind2 = fooBind.bind(foo);
console.log(bind2('Tom', 20))

var bind2 = fooBind.bind(foo, 'Tom');
console.log(bind2(20))

// 由上可以看出bind特性:
// 1.bind可以改变this
// 2.bind可以返回函数
// 3.柯里化
// 4.支持传参

