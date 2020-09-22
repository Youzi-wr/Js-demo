var name = 'window'
var obj1 = {
    name: 'obj1',
    foo: function () {
        console.log(this.name) //obj1
        return function () {
            console.log(this.name)//window
        }
    }
}
var obj2 = {
    name: 'obj2',
    foo: function () {
        console.log(this.name)//obj2
        return () => {
            console.log(this.name)//obj2
        }
    }
}
var obj3 = {
    name: 'obj3',
    foo: () => {
        console.log(this.name)//window       //<<<<<<<<<<<< 注意这里：对比一
        return function () {
            console.log(this.name)//window
        }
    }
}
var obj4 = {
    name: 'obj4',
    foo: () => {
        console.log(this.name)//window
        return () => {
            console.log(this.name)//window
        }
    }
}

obj1.foo()()
obj2.foo()()
obj3.foo()()
obj4.foo()()

// 例2
var name = 'window'
function Person(name) {
    this.name = name
    this.foo1 = function () {
        console.log(this.name) //person1
        return function () {
            console.log(this.name) //window
        }
    }
    // 第二层为箭头函数，它的this由外层作用域决定，也就是foo2这个函数
    this.foo2 = function () {
        console.log(this.name) //person1
        return () => {
            console.log(this.name) //person1
        }
    }
    //第一层为箭头函数，它的this由外层作用域决定，因此是person1。第二层为普通函数，由调用者决定
    this.foo3 = () => {
        console.log(this.name) //person1       //<<<<<<<<<<<< 注意这里：对比一
        return function () {
            console.log(this.name) //window
        }
    }
    // 两层都是箭头函数，this由外层作用域决定
    this.foo4 = () => {
        console.log(this.name) //person1
        return () => {
            console.log(this.name) //person1
        }
    }
}
var person1 = new Person('person1')
person1.foo1()()
person1.foo2()()
person1.foo3()()
person1.foo4()()


// ----------分析------------
// 对比例1和例2，注意第一层是箭头函数，第二层是普通函数这种情况的区别：
// 第一层为箭头函数，它的this由外层作用域决定，因此是person1。第二层为普通函数，由调用者决定


// 例3
var name = 'window'
var obj1 = {
    name: 'obj1',
    foo1: function () {
        console.log(this.name)
        return () => {
            console.log(this.name)
        }
    },
    foo2: () => {
        console.log(this.name)
        return function () {
            console.log(this.name)
        }
    }
}
var obj2 = {
    name: 'obj2'
}
obj1.foo1.call(obj2)() //obj2 obj2
obj1.foo1().call(obj2)//obj1 obj1
obj1.foo2.call(obj2)()//window window
obj1.foo2().call(obj2)//window obj2

//obj1.foo2为什么会是window，不是看谁调用了foo2，而是看foo2定义时，外层作用域是谁，不是obj1，而是window 


// ----------总结---------------
// 箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined。
// 非箭头函数：谁调用它，就指向谁
// 箭头函数：找他声明时的非箭头函数作用域，如果没有，就是全局作用域

// 当遇到了箭头函数：我们只去看他定义的地方，如果当前箭头函数的上层还是箭头函数，则继续往上，直至windows。
// 如果当前箭头函数的上一层是非箭头函数，则this指向这个非箭头函数的作用域，随着他变而变。








