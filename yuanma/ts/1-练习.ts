// 问：以下代码为什么会提示错误，应该如何解决该问题
type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    id: u.id,
    kind: 'customer'
  }
}

// 答：
// 第一种：T 类型兼容 User类型
function makeCustomer<T extends User>(u: T): T {
	// Error（TS 编译器版本：v4.4.2）
	// Type '{ id: number; kind: string; }' is not assignable to type 'T'.
	// '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
	// but 'T' could be instantiated with a different subtype of constraint 'User'.
	return {
    ...u,
		id: u.id,
		kind: 'customer',
	};
}
// 第二种：返回值限制为User类型的
function makeCustomer<T extends User>(u: T): ReturnMake<T, User> {
	// Error（TS 编译器版本：v4.4.2）
	// Type '{ id: number; kind: string; }' is not assignable to type 'T'.
	// '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
	// but 'T' could be instantiated with a different subtype of constraint 'User'.
	return {
		id: u.id,
		kind: 'customer',
	};
}

type ReturnMake<T extends User, U> = {
	[K in keyof U as K extends keyof T ? K : never]: U[K];
};