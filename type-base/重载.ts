interface Rect {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
// 重载
function padding(all: number): Rect;
function padding(topAndBottom: number, leftAndRight: number): Rect;
function padding(
  top: number,
  right: number,
  bottom: number,
  left: number
): Rect;
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number): Rect {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b!,
    bottom: c!,
    left: d!,
  };
}
type LongHandAllowsOverloadDeclarations = {
  (a: number): number;
  (a: string): string;
};
// @ts-expect-error

padding(1, undefined, 1, 1);
declare const foo1: LongHandAllowsOverloadDeclarations;

let c =foo1(2)

interface Foo {
  bar: number;
  bas: string;
}

const foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';

function handler(event: Event) {
  const element = (event as any) as HTMLElement; // ok
  const element1 = (event as unknown) as HTMLElement; // ok
}

function logName(something: { name: string }) {
  console.log(something.name);
}

logName({ name: 'matt' }); // ok
// @ts-expect-error
logName({ name: 'matt', job: 'being awesome' });

function logIfHasName(something: { name?: string }) {
  if (something.name) {
    console.log(something.name);
  }
}

const person = { name: 'matt', job: 'being awesome' };
const animal = { name: 'cow', diet: 'vegan, but has milk of own species' };

logIfHasName(person); // okay
logIfHasName(animal); // okay
// @ts-expect-error
logIfHasName({ neme: 'I just misspelled name to neme' }); 

// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

const Direction = strEnum(['North', 'South', 'East', 'West']);
type Direction = keyof typeof Direction;
// 简单的使用
let sample: Direction;

sample = Direction.North; // Okay
sample = 'North'; // Okay
// @ts-expect-error
sample = 'AnythingElse'; // ERROR!

export {}