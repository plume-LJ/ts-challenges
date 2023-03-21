// FOO
interface FooId extends String {
  _fooIdBrand: string; // 防止类型错误
}

// BAR
interface BarId extends String {
  _barIdBrand: string; // 防止类型错误
}

// 使用
let fooId: FooId;
let barId: BarId;

// 类型安全
// @ts-expect-error
fooId = barId; // error
// @ts-expect-error
barId = fooId; // error
// @ts-expect-error
fooId = <FooId>barId; // error
// @ts-expect-error
barId = <BarId>fooId; // error

// 创建新的
fooId = "foo" as any;
barId = "bar" as any;

// 如果你需要以字符串作为基础
var str: string;
str = fooId as any;
str = barId as any;
