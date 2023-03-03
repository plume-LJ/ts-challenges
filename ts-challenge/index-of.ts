export type IndexOf<T extends any[], U, A extends any[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? Equal<F, U> extends true
    ? A["length"]
    : IndexOf<Rest, U, [...A, any]>
  : -1;

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;
/* _____________ Test Cases _____________ */
import type { Expect } from "@type-challenges/utils";

type c = any extends 2 ? true : false;

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, "a"], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, "a", any], any>, 4>>,
  Expect<Equal<IndexOf<[string, "a"], "a">, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>
];

// declare let x: <T>() => (T extends 1 ? 1 : 2)
// declare let y: <Z>() => (Z extends number ? 1 : 2)
// // x = y // 你再寻思下会发生错误不 
// x = () => 2
// type cc = typeof x extends typeof y ? true:false
// function identity<T>(): T extends 1 ? 1 : 2 {
//   return 1;
// }

type cc = Equal<number, 1|number|2>