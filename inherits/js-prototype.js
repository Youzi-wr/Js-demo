//*********************** ES6的class继承用ES5如何实现 ***************/
//ES6
// class Parent {
//     constructor(name) {
//         this.name = name;
//     }
//     static sayHello() {
//         console.log('hello')
//     }
//     sayName() {
//         console.log(`my name is ${this.name}`)
//         return this.name;
//     }
// }

// class Child extends Parent {
//     constructor(name, age) {
//         super(name)
//         this.age = age;
//     }
//     sayAge() {
//         console.logo(`my age is ${this.age}`)
//         return this.age;
//     }
// }

// let parent = new Parent('Parent');
// let child = new Child('Child', 18);
// console.log('parent: ', parent); // parent:  Parent {name: "Parent"}
// Parent.sayHello(); // hello
// parent.sayName(); // my name is Parent
// console.log('child: ', child); // child:  Child {name: "Child", age: 18}
// Child.sayHello(); // hello
// child.sayName(); // my name is Child
// child.sayAge(); // my age is 18

// ES5
function Parent(name) {
    this.name = name;
}

Parent.sayHello = function () {
    console.log('hello')
}

Parent.prototype.sayName = function () {
    console.log(`my name is ${this.name}`)
    return this.name
}

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype.sayAge = function () {
    console.log(`my age is ${this.age}`)
    return this.age;
}

// inherits
function inherits(Child, Parent) {
    Child.__proto__ = Parent;

    // 子类集成父类
    Child.prototype.construstor = Child; // <-why
    Child.prototype.__proto__ = Parent.prototype; //慢

    // Object.create（ES5）
    // Child.prototype = Object.create(Parent.prototype) //快

    // Object.setPrototypeOf（ES6）
    // Object.setPrototypeOf(Child.prototype, Parent.prototype); //快
}
inherits(Child, Parent)

var parent = new Parent('Parent');
var child = new Child('Child', 18);
console.log('parent: ', parent); // parent:  Parent {name: "Parent"}
Parent.sayHello(); // hello
parent.sayName(); // my name is Parent
console.log('child: ', child); // child:  Child {name: "Child", age: 18}
Child.sayHello(); // hello
child.sayName(); // my name is Child
child.sayAge(); // my age is 18
