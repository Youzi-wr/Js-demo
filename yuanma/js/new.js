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

function new2(func, ...args) {
    // 创建了一个实例对象 o，并且这个对象__proto__指向func这个类的原型对象 
    let o = Object.create(func.prototype);
    // 将构造函数的this指向新对象o并执行函数代码
    let k = func.call(o, ...args);
    // 如果构造函数中没有人为返回一个对象类型的值，则返回这个新对象o。否则直 接返回那个对象类型值。（一般定义的构造函数中不写返回值。）
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




function myNew(fn, ...args) {
    let instance = Object.create(fn.prototype);
    let res = fn.call(instance, ...args)
    return typeof res == 'object' ? res : instance;
}