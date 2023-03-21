namespace ss {
  function twoParams(a: number, b: number) {
    return a + b;
  }

  let curryOne = twoParams.bind(null, 123);
  curryOne(456); // ok
  // @ts-expect-error
  curryOne("456"); // ok
}
namespace ss {
  function twoParams(a: number, b: number) {
    return a + b;
  }

  let curryOne = (x: number) => twoParams(123, x);
  curryOne(456); // ok
  // @ts-expect-error
  curryOne("456"); // Error
}

class Adder {
  constructor(public a: string) {}

  add(b: string): string {
    return this.a + b;
  }
}

function useAdd(add: (x: number) => number) {
  return add(456);
}

let adder = new Adder("mary had a little 🐑");
// @ts-expect-error
useAdd(adder.add.bind(adder)); // 没有编译的错误
// @ts-expect-error
useAdd((x) => adder.add(x)); // Error: number 不能分配给 string
