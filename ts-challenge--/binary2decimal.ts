type BinaryToDecimal<S extends string, Count extends 1[] = []> =
  S extends `${infer First extends '0' | '1'}${infer Rest}` ? (
    BinaryToDecimal<Rest, [...(First extends '1' ? [1] : []),...Count, ...Count]>
  ) : Count['length']

  /* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>,
]