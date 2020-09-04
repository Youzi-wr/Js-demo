Object.prototype.isType = function (o) {
    return /\[object\s(.*?)\]/.exec(Object.prototype.toString.call(o))[1];
}

const isString = data => Object.isType(data) == 'String';
const isArray = data => Object.isType(data) == 'Array';
const isObject = data => Object.isType(data) == 'Object';

console.log(isString("wwwwww"))
console.log(isArray([1, 2, 3]))
console.log(isObject(null))