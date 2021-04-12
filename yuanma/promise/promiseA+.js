class promise {
    constructor(fn) {
        this.status = "pending";
        this.value = null;
        this.callbackList = [];

        const resolve = (val) => {
            if (this.status !== 'pending') return;
            this.status = 'fulfilled';
            this.value = val;
            // 回调函数是异步的
            setTimeout(() => {
                for (let callback of this.callbackList) {
                    callback.resolve(val)
                }
            })
        }

        const reject = (err) => {
            if (this.status !== "pending") return;
            this.status = 'rejected';
            this.value = err;
            setTimeout(() => {
                for (let callback of this.callbackList) {
                    callback.reject(err)
                }
            })
        }

        try {
            fn(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }
    then(onResolved, onRejected) {
        const self = this;
        if (typeof onResolved !== "function") onResolved = val => val;
        if (typeof onRejected !== "function") onRejected = err => { throw err };

        return new Promise((resolve, reject) => {
            const handleCallback = (callback) => {
                try {
                    const res = callback(self.value);
                    if (res instanceof Promise) {
                        res.then(val => {
                            resolve(val)
                        }, err => {
                            reject(err)
                        })
                    } else {
                        resolve(val)
                    }
                } catch (err) {
                    reject(err)
                }
            }

            if (self.status == "fulfilled") {
                setTimeout(() => {
                    handleCallback(onResolved)
                })
            }

            if (self.status == "rejected") {
                setTimeout(() => {
                    handleCallback(onRejected)
                })
            }

            if (self.status == "pending") {
                self.callbackList.push({
                    resolve: () => handleCallback(onResolved),
                    reject: () => handleCallback(onRejected)
                })
            }
        })
    }
    catch(fn) {
        return this.then(undefined, fn)
    }
    resolve(val) {
        return new Promise((resolve, reject) => {
            if (val instanceof Promise) {
                val.then(val => resolve(val), err => reject(err))
            } else {
                resolve(val)
            }
        })
    }
    reject(err) {
        return new Promise((resolve, reject) => reject(err))
    }
    all(promiseList) {
        let count = 0;
        const res = [];
        const length = promiseList.length;

        return new Promise((resolve, reject) => {
            for (let i = 0; i < length; i++) {
                Promise.resolve(promiseList[i]).then((val) => {
                    res[i] = val;
                    count++;
                    if (length == count) resolve(res)
                }, err => {
                    reject(err)
                })
            }
        })
    }
    race(promiseList) {
        const length = promiseList.length;

        return new Promise((resolve, reject) => {
            for (let i = 0; i < length; i++) {
                Promise.resolve(promiseList[i]).then((val) => {
                    resolve(val)
                }, err => {
                    reject(err)
                })
            }
        })
    }
}