// 问：实现一个 Trim 工具类型，用于对字符串字面量类型进行去空格处理。具体的使用示例如下所示：
// type Trim<V extends string> = // 你的实现代码

// 测试用例
Trim<' semlinker '>

// 答：
type Trim<T extends string> = T extends ` ${infer R}` ? Trim<R> : T extends `${infer R} ` ? Trim<R> : T;