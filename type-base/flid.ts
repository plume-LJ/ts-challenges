export {};
namespace hh {
  class Foo {}

  const Bar = Foo;

  let bar: Bar; // Error: 不能找到名称 'Bar'
}
namespace importing {
  export class Foo {}
}
import { Equal, Expect } from "@type-challenges/utils";
import Bar = importing.Foo;
type Bar1 = importing.Foo;
let bar: Bar; // ok
type c = Expect<Equal<Bar,importing.Foo>>

namespace ss {
  class Foo {
    foo: number | undefined; // 我们想要捕获的类型
  }
  
  declare let _foo: Foo;
  
  // 与之前做法相同
  let bar: typeof _foo.foo;
}