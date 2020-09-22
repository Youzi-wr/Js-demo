// 方式一
Object.prototype.isType = function (o) {
    return /\[object\s(.*?)\]/.exec(Object.prototype.toString.call(o))[1];
}

const isString = data => Object.isType(data) == 'String';
const isArray = data => Object.isType(data) == 'Array';
const isObject = data => Object.isType(data) == 'Object';

isString("wwwwww")//true
isArray([1, 2, 3])//true
isObject(null)//false


// 方式二
var toStr = Function.prototype.call.bind(Object.prototype.toString);
const isArray = obj => toStr(obj) === '[object Array]';

isArray([1, 2, 3]);

toStr([1, 2, 3]); 	// "[object Array]"
toStr("123"); 		// "[object String]"
toStr(123); 		// "[object Number]"
toStr(Object(123)); // "[object Number]"