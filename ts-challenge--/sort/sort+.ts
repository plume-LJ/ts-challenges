type Tuple<T extends number, _TP extends unknown[] = []> =
  _TP['length'] extends T
  ? _TP
  : Tuple<T, [..._TP, unknown]>

type Max<A extends number, B extends number> = 
  Tuple<A> extends [...Tuple<B>, ...any]
  ? A
  : B

type MaxN<T extends number[], _Max extends number = 0> = 
  T extends [infer First extends number, ...infer Rest extends number[]]
  ? Rest extends []
    ? Max<First, _Max>
    : MaxN<Rest, Max<First, _Max>>
  : never

type Reverse<T extends unknown[]> = 
  T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : []

type SortAsc<T extends number[]> = 
  T extends [infer First extends number, ...infer Rest extends number[]]
  ? First extends MaxN<T>
    ? [...Sort<Rest>, First]
    : Sort<[...Rest, First]>
  : []

type Sort<T extends number[], Desc extends boolean = false> = 
  Desc extends true 
  ? Reverse<SortAsc<T>> 
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