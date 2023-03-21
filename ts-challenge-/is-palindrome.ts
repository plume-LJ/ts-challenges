type IsPalindrome<T extends string | number> =
  `${T}` extends `${infer F}${infer R}`
    ? R extends ""
      ? true
      : R extends `${infer RE}${F}`
      ? IsPalindrome<RE>
      : false
    : true;
// type IsPalindrome<T extends string | number> =
// `${T}` extends `${infer L}${infer Rest}${infer R}`
//   ? `${L}` extends `${R}`
//     ? Rest
//     : false
//   : true
// type Reverse<T extends string> = T extends `${infer I}${infer R}`
//   ? `${Reverse<R>}${I}`
//   : "";
// type IsPalindrome<T extends string | number> = T extends string
//   ? T extends Reverse<T>
//     ? true
//     : false
//   : IsPalindrome<`${T}`>;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<IsPalindrome<"abc">, false>>,
  Expect<Equal<IsPalindrome<"b">, true>>,
  Expect<Equal<IsPalindrome<"">, true>>,
  Expect<Equal<IsPalindrome<"abca">, false>>,
  Expect<Equal<IsPalindrome<"abcba">, true>>,
  Expect<Equal<IsPalindrome<"abcab">, false>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>
];

type c = '2323' extends `${string}` ? true : false