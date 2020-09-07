// 使用Promise实现红绿灯交替重复亮
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

function light(time, cp) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cp())
        }, time);
    })
}

function setup() {
    Promise.resolve()
        .then(() => {
            return light(1000, red);
        })
        .then(() => {
            return light(2000, green);
        })
        .then(() => {
            return light(3000, yellow);
        })
        .then(() => {
            setup()
        })
}

setup()

