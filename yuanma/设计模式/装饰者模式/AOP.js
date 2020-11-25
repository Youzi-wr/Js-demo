let handleClick = function () {
    console.log('click!!')
}

const report = (message) => {
    console.log(`上报了信息：${message}`);
}

Function.prototype.before = function (beforeFn, beforeArgs) {
    var createFn = this;
    return function () {
        beforeFn.call(this, beforeArgs, ...arguments);
        return createFn.apply(this, arguments)
    }
}

Function.prototype.after = function (afterFn, afterArgs) {
    var createFn = this;
    return function () {
        var ret = createFn.apply(this, arguments);
        afterFn.call(this, afterArgs, ...arguments);
        return ret;
    }
}

handleClick = handleClick.before(report, '第一条开始')
handleClick = handleClick.after(report, '第一条结束')


let doc = document.getElementById('app')
doc.addEventListener('click', handleClick)
