function foo() { }
foo.prototype = {
    foo_prop: "foo val"
}

function bar() { }

// >>>>>>>>>>> 
// Object.create 方式一
// var proto = Object.create(foo.prototype);
// proto.bar_prop = "bar val";

// Object.create 方式二
// var proto = Object.create(
//     foo.prototype,
//     {
//         bar_prop: "bar val"
//     }
// );
// 优点：支持IE9+浏览器，同时允许通过 Object.create(null) 来创建一个没有原型的对象。
// 缺点：第二个参数对象的格式处理成百上千的对象描述的时候，可能会造成严重的性能问题

// >>>>>>>>>>> 
// Object.setPrototypeOf 方式一
// var proto;
// proto = Object.setPrototypeOf(
//     { bar_prop: "bar val" },
//     foo.prototype
// )

// Object.setPrototypeOf 方式二
// var proto = { bar_prop: "bar val" };
// Object.setPrototypeOf(
//     proto,
//     foo.prototype
// )
// 优点：支持IE9+浏览器。允许动态操作对象的原型，甚至能强制给通过 Object.create(null) 创建出来的没有原型的对象添加一个原型
// 缺点：这个方式表现并不好，应该被弃用。如果你在生产环境中使用这个方法，那么快速运行 Javascript 就是不可能的，因为许多浏览器优化了原型，尝试在调用实例之前猜测方法在内存中的位置，但是动态设置原型干扰了所有的优化，甚至可能使浏览器为了运行成功，使用完全未经优化的代码进行重编译。 不支持 IE8 及以下的浏览器版本。

// >>>>>>>>>>> 
// __proto__ 方式一
// var proto = {
//     bar_prop: "bar val",
//     __proto__: foo.prototype
// };

// __proto__ 方式二
// var inst = {
//     __proto__: {
//         bar_prop: "bar val",
//         __proto__: {
//             foo_prop: "foo val",
//             __proto__: Object.prototype
//         }
//     }
// };
// 优点：支持IE11+浏览器。将 __proto__ 设置为非对象的值会静默失败，并不会抛出错误。
// 缺点：应该完全将其抛弃因为这个行为完全不具备性能可言。 如果你在生产环境中使用这个方法，那么快速运行 Javascript 就是不可能的，因为许多浏览器优化了原型，尝试在调用实例之前猜测方法在内存中的位置，但是动态设置原型干扰了所有的优化，甚至可能使浏览器为了运行成功，使用完全未经优化的代码进行重编译。不支持 IE10 及以下的浏览器版本。

bar.prototype = proto;
var instan = new bar

console.log(instan.foo_prop)
console.log(instan.bar_prop)
