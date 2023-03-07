export type Without<T extends any[], U, R extends any[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? F extends (U extends any[] ? U : [U])[number]
    ? Without<Rest, U, R>
    : Without<Rest, U, [...R, F]>
  : R;

  type Without1<T extends any[], U, R extends any[] = []> = T extends [
    infer F,
    ...infer Rest
  ]
    ? Equal<F,U> extends true
      ? Without1<Rest, U, R>
      : Without1<Rest, U, [...R, F]>
    : R;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = Without1<[1, 2], 1>;

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];
