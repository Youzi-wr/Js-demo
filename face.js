function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function () {
		console.log(this.name)
	}
}

var per1 = { 'name': 'Tom' };
Person.call(per1, 'cindy', '20')

console.log(per1.sayName())


// **************************************

function F() { }
var f1 = new F();

console.log(f1.__proto__ == F.prototype);
console.log(F.prototype.constructor == F);
console.log(f1.constructor == F);

// **************************************

console.log(null == undefined);
console.log(null === undefined);
console.log(typeof undefined);
console.log(typeof null)

// **************************************

setTimeout1 = setTimeout(function () {
	console.log('---1---')
}, 0)

setTimeout2 = setTimeout(function () {
	Promise.resolve().then(() => {
		console.log('---2---')
	})
	console.log('---3---')
}, 0)

new Promise(function (resolve) {
	console.time("Promise")
	for (var i = 0; i < 1000000; i++) {
		i === (1000000 - 1) && resolve()
	}
	console.timeEnd("Promise")
}).then(function () {
	console.log('---4---')
});

console.log('---5---')