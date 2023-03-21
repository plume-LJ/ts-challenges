export {}
type Foo = {
  bar: number;
  bas: number;
  dep: {
    bar: string
  }
};

type FooReadonly = Readonly<Foo>;
const foo: Foo = { bar: 123, bas: 456, dep: {bar: '2'} };
const fooReadonly: FooReadonly = { bar: 123, bas: 456,dep: {bar: '2'} };

foo.dep.bar = '3'
foo.bar = 456; // ok
// @ts-expect-error
fooReadonly.bar = 456; // Error: bar 属性只读
fooReadonly.dep.bar = '456'; // Error: bar 属性只读
let arr: ReadonlyArray<number> = [1, 2, 3];
console.log(arr[0]); // ok
// @ts-expect-error
arr.push(4); // Error: ReadonlyArray 上不存在 `push`，因为他会改变数组
arr = arr.concat(4); // ok, 创建了一个复制
type c = keyof ReadonlyArray<number>

const foo2: {
  readonly bar: number;
} = {
  bar: 123
};
interface Foo2 {
  readonly bar: number;
}
function iMutateFoo(foo: { bar: number }) {
  foo.bar = 456;
}
function iTakeFoo(foo:Foo2) {
// @ts-expect-error
foo.bar = 456; // Error: bar 属性只读
}
iMutateFoo(foo2);
console.log(foo.bar); // 456