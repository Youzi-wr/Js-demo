// 问：如何定义一个 SetOptional 工具类型，支持把给定的 keys 对应的属性变成可选的？对应的使用示例如下所示：
type Foo = {
	a: number;
	b?: string;
	c: boolean;
}
// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;
// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean; 
// }


// 答：
type Simplify<T> = {
  [K in keyof T]: T[K]
}
type SetOptional<T, K extends keyof T> = Simplify<Pick<T, Exclude<keyof T, K>> & Partial<Pick<T, K>>>
// 用Simplify的原因是为了解决映射类型的特性。如果没有使用Simplify，得到的类型可能如下：（这里没太理解）
// type SomeOptional = {
//   a?: number;
//   b?: string | undefined;
//   c: boolean;
// };
// 用Partial<Pick<T, K>>，而不用Partial<K>的原因是，对于SetOptional<Foo, 'a'>这种情况，前者相当于Partial<{a: number}>，而后者相当于Partial<'a'>，实际上得到的类型如下：
// type SomeOptional = {
//   a?: "a";
//   b?: string;
//   c: boolean;
// };


// 问：如何实现 SetRequired 工具类型，利用它可以把指定的 keys 对应的属性变成必填的。对应的使用示例如下所示：
type Foo1 = {
	a?: number;
	b: string;
	c?: boolean;
}
// 测试用例
type SomeRequired = SetRequired<Foo1, 'b' | 'c'>;
// type SomeRequired = {
// 	a?: number;
// 	b: string; // 保持不变
// 	c: boolean; // 该属性已变成必填
// }


// 答：
type SetRequired<T, K extends keyof T> = Simplify<Pick<T, Exclude<keyof T, K>> & Required<Pick<T, K>>>
// 为什么不是 type SetRequired<T, K extends keyof T> = Simplify<Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>> 呢
// Pick表示指定属性必填，其余属性保证原本状态。如果增加Partial，则其余属性都会变成可选状态，和题意不符