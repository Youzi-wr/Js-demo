// 问：实现一个 Head 工具类型，用于获取数组类型的第一个类型。具体的使用示例如下所示：
// 测试用例
type H0 = Head<[]>; // never
type H1 = Head<[1]>; // 1
type H2 = Head<[3, 2]>; // 3

// 答：
type Head<T extends Array<any>> = T extends [f: infer U, ...rest: any[]]
  ? U
  : never;
