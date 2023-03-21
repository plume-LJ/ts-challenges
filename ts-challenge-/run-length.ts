namespace RLE {
  export type Encode<
    S extends string,
    Pre extends string[] = []
  > = Pre extends []
    ? S extends `${infer F}${infer tail}`
      ? Encode<tail, [...Pre, F]>
      : ""
    : S extends `${Pre[0]}${infer tail}`
    ? Encode<tail, [...Pre, Pre[0]]>
    : Pre["length"] extends 1
    ? `${Pre[0]}${Encode<S>}`
    : `${Pre["length"]}${Pre[0]}${Encode<S>}`;
  export type Decode<
    S extends string,
    num extends string = "",
    T extends 1[] = []
  > = S extends `${infer F extends number}${infer tail}`
    ? Decode<tail, `${num}${F}`, T>
    : num extends ""
    ? S extends `${infer F}${infer tail}`
      ? `${F}${Decode<tail, "", []>}`
      : ""
    : `${T["length"]}` extends num
    ? S extends `${string}${infer Rest}`
      ? Decode<Rest>
      : ""
    : S extends `${infer First}${string}`
    ? `${First}${Decode<S, num, [...T, 1]>}`
    : "";
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<"AAABCCXXXXXXY">, "3AB2C6XY">>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<"3AB2C6XY">, "AAABCCXXXXXXY">>
];
