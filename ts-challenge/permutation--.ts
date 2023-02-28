type Permutation<T, Acc = T> = [T] extends [never]
  ? []
  : T extends any ? [T, ...Permutation<Exclude<Acc, T>>] : never;

// 你的答案
// type Permutation<T, B = T> = [T] extends [never] ? [] : 
// B extends infer C ? [C, ...Permutation<Exclude<T, C>>] : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type c = Permutation<'B' | 'A'>
type b = Exclude<'B' | 'A', 'B'>

type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
  Expect<Equal<Permutation<never>, []>>,
]