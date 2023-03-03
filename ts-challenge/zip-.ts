// type Zip<T, U> = T extends [infer P, ...infer R]
//   ? U extends [infer K, ...infer KR]
//     ? [[P, K], ...Zip<R, KR>]
//     : []
//   : []

type Zip<
  A extends any[],
  B extends any[],
  L extends any[] = []
> = L["length"] extends A["length"] | B["length"]
  ? L
  : Zip<A, B, [...L, [A[L["length"]], B[L["length"]]]]>;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ["1", "2"]>, [[1, "1"], [2, "2"]]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
];
