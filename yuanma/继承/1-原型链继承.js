function Super() {
    this.name = "super";
}
Super.prototype.getSuper = function () {
    return this.name;
}

function Sub() {}
Sub.prototype = new Super();

var sub1 = new Sub();
sub1.name = "sub1";

var sub2 = new Sub();
sub2.name = "sub2";

console.log(sub2.getSuper())  //["super", "sub1", "sub2"]

// 缺点：
// 包含引用类型值的所有属性会被所有实例共享
// 子类的实例不能向超类型构造函数传参 
