function Super(name) {
    this.name = name
}
Super.prototype.getSuper = function () {
    return this.name;
}

function Sub(name) {
    Super.call(this, name);
}

var sub1 = new Sub("Tom");
// console.log(sub1.getSuper()) //Uncaught TypeError
console.log(sub1.name)  //Tom

var sub2 = new Sub();
console.log(sub2.name)  //undefined

var sup = new Super()
console.log(sup.getSuper())  //undefined

// 优点：
// 每个实例都有自己的属性，不会被共享
// 子类的实例可以向超类型构造函数传参 （意义？）

// 缺点：
// 但是无法复用原型链方法