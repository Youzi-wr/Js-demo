// https://juejin.im/post/6844903763178684430#heading-7
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class PromiseA {
    constructor(fn) {
        this.status = PENDING;

        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        this.value = null;
        this.reason = null;

        const resolveCallback = value => {
            setTimeout(() => {  //确保异步执行
                if (this.status == 'pending') {
                    this.status = FULFILLED;

                    // 错误
                    // let cb = this.onFulfilledCallbacks.shift();
                    // this.value = cb(value);

                    //正确
                    this.value = value;
                    this.onFulfilledCallbacks.map(cb => { this.value = cb(this.value) })
                }
            })
        }

        const rejectCallback = reason => {
            setTimeout(() => {
                if (this.status == 'pending') {
                    this.status = REJECTED;
                    this.reason = reason;
                    this.onFulfilledCallbacks.map(cb => { this.reason = cb(this.reason) })
                }
            })
        }

        // 错误
        // fn(resolveCallback, rejectCallback);

        // 正确
        try {
            //执行promise
            fn(resolveCallback, rejectCallback);
        } catch (e) {
            rejectCallback(e);
        }
    }

    then(onFulfilled, onRejected) { //onFulfilled, onRejected必须为function，否则透传
        typeof onFulfilled === 'function' && this.onFulfilledCallbacks.push(onFulfilled); 
        typeof onRejected === 'function' && this.onRejectedCallbacks.push(onRejected);

        return this; //都不return，还想链式调用？
    }
}

PromiseA.deferred = function () {
    let defer = {};
    defer.promise = new PromiseA((resolve, reject) => {
        defer.resolve = resolve;
        defer.reject = reject;
    });
    return defer;
};


module.exports = PromiseA;

/* test */
// new PromiseA((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2);
//     }, 2000);
// }).then(res => {
//     console.log(res);
//     return res + 1;
// }).then(res => {
//     console.log(res);
// });
