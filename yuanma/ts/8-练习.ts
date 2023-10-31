// 问：定义 NonEmptyArray 工具类型，用于确保数据非空数组。
const a: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS'] // 非空数据，正常使

// 答：
// 解法一
type NonEmptyArray<T> = [T, ...T[]]
// 解法二
type NonEmptyArray<T> = T[] & { 0: T }