enum Comparison {
  Greater,
  Equal,
  Lower,
}

type CompareDigits<A extends string, B extends string> =
  A extends B
  ? Comparison.Equal
  : '0123456789' extends `${any}${A}${any}${B}${any}`
    ? Comparison.Lower
    : Comparison.Greater

type ReverseString<S extends string> = S extends `${infer F}${infer Rest}` ? `${ReverseString<Rest>}${F}` : ''

type CompareNumbers<A extends string, B extends string> = 
  ReverseString<A> extends `${infer ALast}${infer ARest}`
  ? ReverseString<B> extends `${infer BLast}${infer BRest}`
    ? CompareNumbers<ReverseString<ARest>, ReverseString<BRest>> extends Comparison.Equal
      ? CompareDigits<ALast, BLast>
      : CompareNumbers<ReverseString<ARest>, ReverseString<BRest>>
    : Comparison.Greater
  : B extends ''
    ? Comparison.Equal
    : Comparison.Lower

type Max<A extends number, B extends number> = 
  CompareNumbers<`${A}`, `${B}`> extends Comparison.Lower 
  ? B 
  : A

type MaxN<T extends number[], _Max extends number = 0> = 
  T extends [infer First extends number, ...infer Rest extends number[]]
  ? Rest extends []
    ? Max<First, _Max>
    : MaxN<Rest, Max<First, _Max>>
  : never

type ReverseTuple<T extends unknown[]> = 
  T extends [infer First, ...infer Rest]
  ? [...ReverseTuple<Rest>, First]
  : []

type SortAsc<T extends number[]> = 
  T extends [infer First extends number, ...infer Rest extends number[]]
  ? First extends MaxN<T>
    ? [...Sort<Rest>, First]
    : Sort<[...Rest, First]>
  : []

type Sort<T extends number[], Desc extends boolean = false> = 
  Desc extends true 
  ? ReverseTuple<SortAsc<T>> 
  : SortAsc<T>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Sort<[]>, []>>,
  Expect<Equal<Sort<[1]>, [1]>>,
  Expect<Equal<Sort<[2, 1]>, [1, 2]>>,
  Expect<Equal<Sort<[0, 0, 0]>, [0, 0, 0]>>,
  Expect<Equal<Sort<[1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 1]>, [1, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 1, 2]>, [1, 2, 2, 3]>>,
  Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0]>, [0, 0, 0, 0, 1, 2, 3]>>,
  Expect<Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9]>, [2, 4, 5, 6, 6, 6, 7, 8, 9]>>,
  Expect<Equal<Sort<[1, 1, 2, 1, 1, 1, 1, 1, 1]>, [1, 1, 1, 1, 1, 1, 1, 1, 2]>>,
  Expect<Equal<Sort<[], true>, []>>,
  Expect<Equal<Sort<[1], true>, [1]>>,
  Expect<Equal<Sort<[2, 1], true>, [2, 1]>>,
  Expect<Equal<Sort<[0, 0, 0], true>, [0, 0, 0]>>,
  Expect<Equal<Sort<[1, 2, 3], true>, [3, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 1], true>, [3, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 1, 2], true>, [3, 2, 2, 1]>>,
  Expect<Equal<Sort<[3, 2, 0, 1, 0, 0, 0], true>, [3, 2, 1, 0, 0, 0, 0]>>,
  Expect<Equal<Sort<[2, 4, 7, 6, 6, 6, 5, 8, 9], true>, [9, 8, 7, 6, 6, 6, 5, 4, 2]>>,
]