type UnionToIntersection<T> =
  (T extends T ? (arg: T) => 0 : never) extends
    (arg: infer I) => 0
  ? I
  : never;

type LastInUnion<U> =
  UnionToIntersection<
    U extends U ? (arg: U) => 0 : never
  > extends (arg: infer Last) => 0
  ? Last
  : never;

// /**
//  * UnionToTuple<1 | 2> = [1, 2].
//  */
type UnionToTuple<
  U,
  Last = LastInUnion<U>
> =
  [U] extends [never]
  ? []
  : [
      ...UnionToTuple<Exclude<U, Last>>,
      Last,
    ];
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]

type cases = [
  Expect<Equal<UnionToTuple<'a' | 'b'>['length'], 2>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>, 'a' | 'b'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a'>>, 'a'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<undefined | void | 1>>, void | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'d' | 'f' | 1 | never>>, 'f' | 'd' | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<never>>, never>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>, 'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'>>,
]

type Intersepted = (() => 'a') & (() => 'b') & (() => 'c')
type Intersepted1 = (() => 'foo') & (() => 42) & (() => true)
type Last = Intersepted1 extends () => infer R ? R : never // 'c'