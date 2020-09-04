function p1(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 5);
    })
}

function p2(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 2);
    })
}

function p3(a) {
    return a * 3;
}

function p4(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 4);
    });
}

// 方式一
// p1(10).then(res => p2(res).then(res => p4(p3(res)).then(res => console.log(res))))

// 方式二
function runsequence(arr, time) {
    return arr.reduce(
        (promise, fun) => promise.then(fun),
        Promise.resolve(time)
    )
}
var arr = [p1, p2, p3, p4];
runsequence(arr, 10).then(console.log)

//数组扁平化
// [1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]
function flatten(arr) {  
    return arr.reduce((result, item)=> {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}
// [].concat(...[1, 2, 3, [4, 5]]);