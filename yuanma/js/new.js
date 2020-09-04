/**
 * 待验证
 */
let obj1 = { id: 1 };
Object._create = (o) => {
    let Fn = function () { }; // 临时的构造函数
    Fn.prototype = o;
    return new Fn;
}

let obj2 = Object._create(obj1);
console.log(obj2.__proto__ === obj1); // true
console.log(obj2.id); // 1

// 原生的Object.create
let obj3 = Object.create(obj1);
console.log(obj3.__proto__ === obj1); // true
console.log(obj3.id); // 1

// ----------------------------------

function new2(func) {
    // 创建了一个实例对象 o，并且这个对象__proto__指向func这个类的原型对象 
    let o = Object.create(func.prototype);
    // (在构造函数中this指向当前实例)让这个类作为普通函数值行 并且里面this为实例对象 
    let k = func.call(o);
    // 最后再将实例对象返回 如果你在类中显示指定返回值k，
    // 注意如果返回的是引用类型则将默认返回的实例对象o替代掉
    return typeof k === 'object' ? k : o;
}

// 实验
function M() { // 即将被new的类
    this.name = 'liwenli';
}

let m = new2(M); // 等价于 new M 这里只是模拟
console.log(m instanceof M); // instanceof 检测实例
console.log(m instanceof Object);
console.log(m.__proto__.constructor === M);



// **************************************************************************
function Animal() {
    this.species = "动物";
}

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

// Cat.prototype = new Animal();
// var cat1 = new Cat("大毛", "黄色");
// console.log(cat1.constructor === Animal)  //true

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.constructor === Animal)   //false