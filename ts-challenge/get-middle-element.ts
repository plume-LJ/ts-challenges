// 你的答案
type GetMiddleElement<T extends unknown[] = []> = T["length"] extends 2 | 1 | 0
  ? T
  : T extends [infer _L, ...infer M, infer _R]
  ? GetMiddleElement<M>
  : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<GetMiddleElement<[]>, []>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
  Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
  Expect<
    Equal<GetMiddleElement<[() => number, "3", [3, 4], 5]>, ["3", [3, 4]]>
  >,
  Expect<
    Equal<
      GetMiddleElement<[() => string, () => number]>,
      [() => string, () => number]
    >
  >,
  Expect<Equal<GetMiddleElement<[never]>, [never]>>
];
// @ts-expect-error
type error = GetMiddleElement<1, 2, 3>;
