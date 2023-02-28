type LengthOfString<S extends string, Counter extends string[] = []> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [First, ...Counter]>
  : Counter['length']

// type StringToArray<S extends string> = S extends `${infer L}${infer R}` ? [L, ...StringToArray<R>] : []
// type LengthOfString<S extends string> = StringToArray<S>['length']

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]