// 函数节流：控制执行间隔时间，防止频繁触发，例如：scroll resize mousemove
function throttle(fn, delay = 500) {
    var start = 0;
    return function () {
        var cur = new Date();
        if (cur - start >= delay) {
            fn.apply(this, arguments);
            start = cur;
        }
    }
}

//函数防抖：防止在短时间内频繁输入，以最后一次输入为准
// 如果在50ms内操作，就重置定时器，超过50ms后再执行。确保两次执行大于50ms
function debounce(fn, delay = 50) {
    var timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(res => {
            fn.apply(this, arguments)
        }, delay)
    }
}