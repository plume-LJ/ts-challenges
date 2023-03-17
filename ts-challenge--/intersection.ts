// type Intersection<T extends any[]> = T extends [infer F, ...infer Tail]
//   ? Extract<F extends any[] ? F[number] : F, Intersection<Tail>>
//   : unknown;
type Intersection<T extends any[]> = T extends [infer F, ...infer Tail]
  ? (F extends any[] ? F[number] : F) & Intersection<Tail>
  : unknown;
// type Intersection<T> =
// T extends [infer Head, ...infer Tail]
// ? Head extends unknown[]
//   ? Extract<Head[number], Intersection<Tail>>
//   : Extract<Head, Intersection<Tail>>
// : unknown;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = Intersection<[[1, 2], [2, 3], [2, 2]]>;

type cases = [
  Expect<Equal<Intersection<[[1, 2], [2, 3], [2, 2]]>, 2>>,
  Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>, 2 | 3>>,
  Expect<Equal<Intersection<[[1, 2], [3, 4], [5, 6]]>, never>>,
  Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], 3]>, 3>>,
  Expect<Equal<Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>, 2 | 3>>,
  Expect<Equal<Intersection<[[1, 2, 3], 2, 3]>, never>>
];

type cc = Extract<1,unknown>
type ccc = number extends unknown ? true : false
type cccc = unknown extends number ? true : false
type f = ()=> void
let c:f = () =>8
type u = unknown
let u:u 
let a:any = u