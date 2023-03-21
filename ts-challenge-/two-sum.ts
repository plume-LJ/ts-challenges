type LengthToArray<
  T extends number,
  R extends unknown[] = []
> = R["length"] extends T ? R : LengthToArray<T, [...R, unknown]>;

type Sum<A extends number, B extends number> = A extends number
  ? B extends number
    ? [...LengthToArray<A>, ...LengthToArray<B>]["length"]
    : never
  : never;

type TwoSum<T extends number[], U extends number> = T extends [
  infer F extends number,
  ...infer O extends number[]
]
  ? U extends Sum<F, O[number]>
    ? true
    : TwoSum<O, U>
  : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>,
  Expect<Equal<TwoSum<[3, 2, 0], 2>, true>>
];
