// 常见泛型变量
// T / U ... ：类型变量
// K（Key）：表示对象中的键类型；
// V（Value）：表示对象中的值类型；
// E（Element）：表示元素类型

//  泛型变量T可以捕获用户传入的类型，再次使用了T当做返回值类型。就可以知道参数类型与返回值类型是相同的了
function identity<T>(arg: T): T {
  return arg;
}

// 使用方式一
let output1 = identity<string>("myString");
// 使用方式二(类型推论)
let output2 = identity("myString");


// --------- 使用泛型变量 ---------------
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}

// --------- 泛型函数 --------------
let myIdentity1: <T>(arg: T) => T = identity;
// 使用带有调用签名的对象字面量来定义泛型函数
let myIdentity2: {<T>(arg: T): T} = identity;
// 使用接口泛型实现
interface GenericIdentityFn3 {
  <T>(arg: T): T
}
let myIdentity3: GenericIdentityFn3 = identity;
// 改动一下，不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分
interface GenericIdentityFn4<T> {
  (arg: T): T;
}
let myIdentity4: GenericIdentityFn4<number> = identity;
// 对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。

// --------- 泛型类 --------------
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

// --------- 泛型约束 --------------
interface Lengthwise {
  length: number;
}
function loggingIdentity1<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
// 在泛型约束中使用类型参数
function getProperty(obj: T, key: K) {
  return obj[key];
}
getProperty({ a: 1, b: 2, c: 3, d: 4 }, "m");
// 在泛型里使用类类型
// 使用原型属性推断并约束构造函数与类实例的关系
// 已经看不懂了：https://www.tslang.cn/docs/handbook/generics.html