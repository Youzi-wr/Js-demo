// ------------- Partial Required Pick ------------------
// type Partial<T> = {                   // 所有属性可选
//   [P in keyof T]?: T[P];
// };

// type Required<T> = {                  // 所有属性必填
//   [P in keyof T]-?: T[P];
// };

// type Pick<T, K extends keyof T> = {   // 指定属性必填
//   [P in K]: T[P];
// };

interface People {
  age: number;
  name: string;
};

// 相当于: type PartialUser = { age?: number, name?: string }
type PartialUser = Partial<People>

// 相当于: type PickUser = { age: number }
type PickUser = Pick<People, "age">

// 相当于: type RequiredkUser = { age: number, name: string  }
type RequiredUser = Required<People>



//  -------------- Exclude --------------
// type Exclude<T, U> = T extends U ? never : T;   // 将前后类型做对比，过滤出前面独有的属性。所以str只能是1或者2

const str: Exclude<'a' | '1' | '2', 'a' | 'y' | 'z'> = '1';


//  -------------- Omit --------------
// type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;   // 过滤掉T类型里的K属性

interface Person {
  id: number;
  age: number;
  name: string;
}

// 相当于: type OmitUser = { age: number; name: string; }
type OmitUser = Omit<Person, 'id'>;






