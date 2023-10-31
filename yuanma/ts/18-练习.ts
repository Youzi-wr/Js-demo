// 问：实现一个 UnionToIntersection 工具类型，用于把联合类型转换为交叉类型。具体的使用示例如下所示：

// 测试用例
type U0 = UnionToIntersection<string | number>; // never
type U1 = UnionToIntersection<{ name: string } | { age: number }>; // { name: string; } & { age: number; }

// 答：
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
// 解释：
// 如果U是never类型, 直接返回never类型;
// 否则声明一个以U为入参类型的函数类型A, 即(k: U) => void, 此函数继承自以I类型为入参的函数类型B, 即(k: infer I) => void.
// 如果A能继承B, 那么入参类型I一定包含所有U的类型, 所以返回的I就是所有U的交叉类型;
// 否则返回never