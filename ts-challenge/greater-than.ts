type GreaterThan<
  N1 extends number,
  N2 extends number,
  A extends unknown[] = [],
> = A['length'] extends N1
  ? false
  : A['length'] extends N2
  ? true
  : GreaterThan<N1, N2, [0, ...A]>;
  
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  // Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]