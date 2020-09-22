var name = 'window'
function Person(name) {
    this.name = name
    this.obj = {
        name: 'obj',
        foo1: function () {
            return function () {
                console.log(this.name)
            }
        },
        foo2: function () {
            return () => {
                console.log(this.name)
            }
        }
    }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()()//window
person1.obj.foo1.call(person2)()//window
person1.obj.foo1().call(person2)//person2

// 🔴
person1.obj.foo2()()//person1
person1.obj.foo2.call(person2)()//person1
person1.obj.foo2().call(person2)//person1

// ✅
person1.obj.foo2()()//obj
person1.obj.foo2.call(person2)()//person2
person1.obj.foo2().call(person2)//obj

// 注意：foo2是非箭头函数，所以obj.foo2时，foo2的this就指向obj。而foo2内部箭头函数的this跟随foo2
