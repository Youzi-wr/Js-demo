function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

var person = {
    name: "Nicholas",
    friends: ["Sherlly", "Van"]
}

var people1 = object(person);
// var people1 = Object.create(person); //在传入一个参数的情况下，Object.create()和object()相同
people1.name = "Greg";
people1.friends.push("Rob")

var people2 = object(person);
people2.name = "Linda";
people2.friends.push("Barbie")

console.log(person.name)    //Nicholas
console.log(person.friends)    //["Sherlly", "Van", "Rob", "Barbie"]

// 应用：
// 在没有必要兴师动众地创建构造函数，而只想让一个对象与另一个对象保持类似的场景下，原型式继承完全可以胜任。

// 缺点：
// 和原型链继承一样，包含引用类型的属性始终会共享响应的值