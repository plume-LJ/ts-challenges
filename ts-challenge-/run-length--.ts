namespace RLE {
  export type Encode<S extends string, Prev extends string[] = []> =
    Prev extends [] ? (
      `${S extends `${infer First}${infer Rest}` ? Encode<Rest, [First]> : ''}`
    ) : S extends `${Prev[0]}${infer Rest}` ? (
      Encode<Rest, [...Prev, Prev[0]]>
    ) : Prev['length'] extends 1 ? (
      `${Prev[0]}${S extends `${infer First}${infer Rest}` ? Encode<Rest, [First]> : ''}`
    ) : (
      `${Prev['length']}${Prev[0]}${S extends `${infer First}${infer Rest}` ? Encode<Rest, [First]> : ''}`
    )
  export type Decode<S extends string, Num extends string = '', C extends 1[] = []> =
    S extends `${infer First extends number}${infer Rest}` ? (
      Decode<Rest, `${Num}${First}`>
    ) : Num extends '' ? (
      S extends `${infer First}${infer Rest}` ? `${First}${Decode<Rest>}` : ''
    ) : Num extends `${C['length']}` ? (
      S extends `${string}${infer Rest}` ? Decode<Rest> : ''
    ) : (
      S extends `${infer First}${string}` ? `${First}${Decode<S, Num, [...C, 1]>}` : ''
    )
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type c = RLE.Decode<'10AB2C6XY'>

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<'AAABCCXXXXXXY'>, '3AB2C6XY'>>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<'10AB2C6XY'>, 'AAAAAAAAAABCCXXXXXXY'>>,
]