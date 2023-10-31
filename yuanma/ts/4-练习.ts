// 问：如何定义一个 ConditionalPick 工具类型，支持根据指定的 Condition 条件来生成新的类型，对应的使用示例如下：
interface Example {
	a: string;
	b: string | number;
	c: () => void;
	d: {};
}
// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;


// 答：
type ConditionalPick<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K]
}