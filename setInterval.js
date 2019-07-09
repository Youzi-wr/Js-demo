function sleep(time) {
    let startTime = window.performance.now();
    while (window.performance.now() - startTime < time) { }
}
let count = 1;
let getTime = window.performance;
let startTime = getTime.now();

setInterval(function () {
    console.log(`第${count}次开始 ${getTime.now() - startTime}`); // 显示开始时间
    sleep(500); // 程序滞留500ms
    console.log(`第${count}次结束 ${getTime.now() - startTime}`); // 显示结束时间
    count += 1;
}, 300);

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