const first = () => (new Promise((resolve, reject) => {
    console.log(3);//h1
    let p = new Promise((resolve, reject) => {
        console.log(7);//h1
        setTimeout(() => {
            console.log(5);//h2
            resolve(6);
            console.log(p)//h2
        }, 0)
        resolve(1); //<resolve>:1
    });
    resolve(2); //<resolve>:2
    p.then((arg) => {
        console.log(arg);//w1:1
    });
}));
first().then((arg) => {
    console.log(arg);//w2:2
});
console.log(4);//h1 

// 3
// 7
// 4
// 1
// 2
// 5
// Promise{<resolve>:1}


const async1 = async () => {
    console.log('async1');//h1.2
    setTimeout(() => {
        console.log('timer1')//h2.后
    }, 2000)
    await new Promise(resolve => {
        console.log('promise1')//h1.3
    })
    console.log('async1 end')
    return 'async1 success'
}
console.log('script start'); //h1.1
async1().then(res => console.log(res));
console.log('script end');//h1.4
Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .catch(4)
    .then(res => console.log(res))//w1:1
setTimeout(() => {
    console.log('timer2')//h3.先
}, 1000)

// script start
// async1
// promise1
// script end
// 1
// timer2
// timer1


const p1 = new Promise((resolve) => {
    setTimeout(() => { 
        resolve('resolve3');
        console.log('timer1')//h2
    }, 0)
    resolve('resovle1');//<resolve>:resolve1
    resolve('resolve2');
}).then(res => {
    console.log(res)//w1
    setTimeout(() => {
        console.log(p1)//h3
    }, 1000)
}).finally(res => {
    console.log('finally', res)//w2
})


const p1 = new Promise((resolve) => {
    setTimeout(() => { 
        resolve('resolve3');
        console.log('timer1')//h2
    }, 0)
    resolve('resovle1');//<resolve>:resolve1
    resolve('resolve2');
}).then(res => {
    console.log(res)//w1
    setTimeout(() => {
        console.log(p1)//h3
    }, 1000)
    return 1;
}).finally(res => {
    console.log('finally', res)//w2
})
