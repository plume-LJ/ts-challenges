import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

// type TupleToUnion<T extends any[]> = T[number]
type TupleToUnion<T> = T extends [infer First, ...infer Rest] ? First | TupleToUnion<Rest>: never
