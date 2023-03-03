// type Integer<T, R = T> = [T] extends [R] ? [R] extends [T] ? T : never: never

type Integer<T extends string | number> = number extends T
  ? never
  : `${T}` extends `${string}.${string}`
  ? never
  : T;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
import { ExpectFalse, NotEqual } from "@type-challenges/utils";

let x = 1;
let y = 1 as const;
let z = 1.0 as const

type cc = typeof z

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>
];

type IsMinus<A> = `${A & number}` extends `-${number}` ? true : false

type c = IsMinus<-2>