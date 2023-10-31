// 问：定义一个 NativeFlat 工具类型，支持把数组类型拍平（扁平化）。具体的使用示例如下所示：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"

// 答：注意这里[number]作为索引的用法，需记
type NaiveFlat<T extends any[]> = {
  [P in keyof T]: T[P] extends any[] ? T[P][number] : T[P]
}[number]
// 为什么不是：
// type NaiveFlat<T> = {
//   [K in keyof T]: T[K] extends Array<any> ? T[K][number] : T[K] 
// }
// 1的定义更加严格，只适用于数组类型，并通过[number]索引，将处理后的所有元素合并为一个联合类型
// 1的结果是： "a" | "b" | "c" | "d"，2的结果是['a', 'b', 'c', 'd']


// 问：实现 DeepFlat 工具类型，以支持多维数组类型：
type Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]];
type DeepTestResult = DeepFlat<Deep>  
// DeepTestResult: "a" | "b" | "c" | "d" | "e"


// 答：
type DeepFlat<T extends any[]> = {
  [K in keyof T]: T[K] extends any[] ? DeepFlat<T[K]> : T[K]
}