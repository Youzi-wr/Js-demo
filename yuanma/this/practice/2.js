var name = 'window'
function Person(name) {
    this.name = name
    this.foo1 = function () {
        console.log(this.name)
    }
    this.foo2 = () => console.log(this.name)
    this.foo3 = function () {
        return function () {
            console.log(this.name)
        }
    }
    this.foo4 = function () {
        return () => {
            console.log(this.name)
        }
    }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1()//person1
person1.foo1.call(person2)//person2

person1.foo2()//person1
person1.foo2.call(person2)//person1

person1.foo3()()//window
person1.foo3.call(person2)()//window
person1.foo3().call(person2)//person2

person1.foo4()()//person1
person1.foo4.call(person2)()//person2
person1.foo4().call(person2)//person1


// 当执行person1.foo2时，foo2是箭头函数，他的外层作用域是person1
// 当执行person1.foo4时，foo4内部箭头函数的this指向foo4，而foo4的this指向了他的调用者
