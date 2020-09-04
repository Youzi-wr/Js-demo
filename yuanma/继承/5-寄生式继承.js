function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

function createAnother(o) {
    var clone = object(o)
    clone.sayHi = function () {
        console.log("hi")
    }
    return clone;
}

var person = {
    name: "Nicholas",
    friends: ["Sherlly", "Van"]
}

var anotherPerson = createAnother(person);
anotherPerson.sayHi()

// 和工厂模式类似，创建一个仅用于封装继承过程的函数

