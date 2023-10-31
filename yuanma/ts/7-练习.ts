// 问：使用类型别名定义一个 EmptyObject 类型，使得该类型只允许空对象赋值：
// 测试用例
const shouldPass: EmptyObject = {}; // 可以正常赋值
const shouldFail: EmptyObject = { // 将出现编译错误
  prop: "TS"
}

// 答：
type EmptyObject = {
  // type PropertyKey = string | number | symbol
  [K in PropertyKey]: never
}


// 问：更改以下 takeSomeTypeOnly 函数的类型定义，让它的参数只允许严格SomeType类型的值。具体的使用示例如下所示：
type SomeType =  {
  prop: string
}

// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
function takeSomeTypeOnly(x: SomeType) { return x }

// 测试用例：
const x = { prop: 'a' };
takeSomeTypeOnly(x) // 可以正常调用

const y = { prop: 'a', addditionalProp: 'x' };
takeSomeTypeOnly(y) // 将出现编译错误

// 答：
type Exclusive<T1, T2 extends T1> = {
  [K in keyof T2]: K extends keyof T1 ? T2[K] : never 
}
function takeSomeTypeOnly<T extends SomeType>(x: Exclusive<SomeType, T>) {return x}