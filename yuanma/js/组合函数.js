function compose(...fns) {
    return x => fns.reduce((acc, fun) => fun(acc), x)
}

const multi10 = function (x) { return x * 10; };
const toStr = function (x) { return `${x}`; };

const composedCompute = compose(multi10, toStr)
composedCompute(8)