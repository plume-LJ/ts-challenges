// type Filter<T extends any[], P, A extends any[] = []> = T extends [
//   infer F,
//   ...infer R
// ]
//   ? F extends P
//     ? Filter<R, P, [...A, F]>
//     : Filter<R, P, A>
//   : A;

type Filter<T extends unknown[], P> = T extends [infer A, ...infer rest]
  ? [...(A extends P ? [A] : []), ...Filter<rest, P>]
  : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Falsy = false | 0 | "" | null | undefined;

type c = Filter<[0, 1, 2], 2>;

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>
];

type cc = Equal<0,-0>