function Super(name) {
    this.name = name
}
Super.prototype.getSuper = function () {
    return this.name;
}

function Sub(name) {
    Super.call(this, name);        //第二次调用
}
Sub.prototype = new Super();        //第一次调用
Sub.prototype.constructor = Sub;

var sub1 = new Sub("Tom");
console.log(sub1.getSuper()) //Tom
console.log(sub1.name)  //Tom
console.log(sub1 instanceof Sub)  //true
console.log(sub1 instanceof Super)   //true

var sub2 = new Sub();
console.log(sub2.name)  //undefined

// 优点：
// 每个实例都有自己的属性，不会被共享
// 子类的实例可以向超类型构造函数传参
// 可以复用原型链方法

// 缺点：
// 会调用两次超类型构造函数