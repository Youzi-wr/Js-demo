// 分析：
// 组合继承既达到了实例属性的继承，又达到了原型属性和方法的继承，且保有自身的特性，实例间互不干扰。而唯一不足的地方是调用了两次超类型的构造函数，因此在此基础上对第一次调用构造函数做优化。
// 而第一次调用构造函数目的是为了继承原型的属性和方法，基于”4-原型式继承.js“的介绍，对对象进行复制即可

function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

function inheritPrototype(subType, superType) {
    var clone = object(superType.prototype);    //复制超类型的原型对象
    clone.constructor = subType;        //将构造函数指向子类型
    subType.prototype = clone;
}

function Super(name) {
    this.name = name
}
Super.prototype.getSuper = function () {
    return this.name;
}

function Sub(name) {
    Super.call(this, name);        //第二次调用
}

// 优化前：
// Sub.prototype = new Super();        //第一次调用
// Sub.prototype.constructor = Sub;
// 优化后：
inheritPrototype(Sub, Super);

var sub1 = new Sub("Tom");
console.log(sub1.getSuper()) //Tom
console.log(sub1.name)  //Tom
console.log(sub1 instanceof Sub)  //true
console.log(sub1 instanceof Super)   //true

var sub2 = new Sub();
console.log(sub2.name)  //undefined