// function sleep(time) {
//     let startTime = window.performance.now();
//     while (window.performance.now() - startTime < time) { }
// }
// let count = 1;
// let getTime = window.performance;
// let startTime = getTime.now();

// setInterval(function () {
//     console.log(`第${count}次开始 ${getTime.now() - startTime}`); // 显示开始时间
//     sleep(500); // 程序滞留500ms
//     console.log(`第${count}次结束 ${getTime.now() - startTime}`); // 显示结束时间
//     count += 1;
// }, 300);

/**
 * 
1. 标准中，setInterval()如果前一次代码没有执行完，则会跳过此次代码的执行。
2. 浏览器中，setInterval()如果前一次代码没有执行完，不会跳过此次代码，而是将其插在队列中，等待前一次代码执行完后立即执行。
3. Node中，setInterval()会严格按照间隔时间执行。

作者：mingttong
链接：https://www.jianshu.com/p/0ad05e325f9b
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
 */

//  例2
function Counter() {
    var start = Date.now();
    this.num = 0;  //注1

    let count = 0;

    this.timer1 = setInterval(function () {
        this.num++;
        var gap = Date.now() - start;
        console.log('timer1', this.num, gap);  //注2

        if (++count > 9) clearTimeout(this.timer1)
    }, 1000)

    console.log('start')
    let curTime = new Date();
    while (new Date() - curTime < 1000) { }
    // while (new Date() - curTime < 500) { }
    console.log('end')

    this.timer2 = setTimeout(() => {
        this.num++;
        var gap = Date.now() - start;
        console.log('timer2', this.num, gap)
    }, 0)
}

// Counter()
// new Counter()

function myNew(fn) {
    let instance = Object.create(fn.prototype)
    let res = fn.apply(instance, arguments)
    return typeof res == "object" ? res : instance
}
let aa = myNew(Counter)
setTimeout(function () {
    clearTimeout(aa.timer1)
}, 6000)

// 没有new时，注1和注2的this指向windows
// 有new时，注1的this指向Counter的实例，注2的this指向windows