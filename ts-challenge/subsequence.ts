type Subsequence<T extends any[]> = T extends [infer F, ...infer R]
  ? [F] | Subsequence<R> | [F, ...Subsequence<R>]
  : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = Subsequence<[1, 2,3,4]>;

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<
    Equal<
      Subsequence<[1, 2, 3]>,
      [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]
    >
  >
];
