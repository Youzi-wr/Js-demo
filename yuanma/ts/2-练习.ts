// 问：本道题我们希望参数 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息。
function f(a: string | number, b: string | number) {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b') // Ok

// 答：
// 第一种：函数重载
type CustomType = string | number;
function f(a: number, b: number): number;
function f(a: string, b: string): string;

// 第二种
function f<T extends string | number>(a: T, b: T) {
  if (typeof a === 'string') {
    return a + ':' + b; 
  } else {
    return (a as number) + (b as number);
  }
}