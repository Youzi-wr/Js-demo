// Function.prototype.myCall = function (context, ...args) {
//     context = context || window;
//     var fn = this;
//     return context[fn](...args)
// }
Function.prototype.myCall = function (context, ...arg) {
    if (typeof context == undefined || context == null) {
        context = window;
    }

    let fn = Symbol();
    context[fn] = this;
    let fun = context[fn](...arg);
    delete context[fn];
    return fun;
}


// Function.prototype.myApply = function(context, ...arg){ //arg本身jiu
//     context = context || window;

//     let fn = Symbol();
//     context[fn] = this;
//     let fun = context[fn](arg)
//     delete context[fn];
//     return fun;
// }
Function.prototype.myApply = function (context, arg) {
    if (typeof context == undefined || context == null) {
        context = window;
    }

    let fn = Symbol();
    context[fn] = this;
    let fun = context[fn](...arg);
    delete context[fn];
    return fun;
}

var people = {
    age: 20,
    say(people) {
        console.log(`${people} is ${this.age}`)
    }
}
var xiaoming = {
    age: 25,
    say(people) {
        console.log(`${people} is ${this.age}`)
    }
}

// xiaoming.say.call(people, 'xiaomingd')
// xiaoming.say.myCall(people, 'xiaomingd')
xiaoming.say.myApply(people, ['xiaomingd'])

