namespace ss {
  class Foo<T> {
    foo: T | undefined;
  }
  const FooNumber = Foo as { new (): Foo<number> }; // ref 1
  class FooNumber1 extends Foo<number> {}
  let c = new FooNumber1
  c.foo
}
function id<T>(x: T) {
  return x;
}

const idNum = id as { (x: number): number };