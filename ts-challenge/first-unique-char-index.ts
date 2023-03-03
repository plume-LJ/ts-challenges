type IndexOf<
  T extends string,
  U extends string,
  A extends any[] = []
> = T extends `${infer F}${infer R}`
  ? Equal<F, U> extends true
    ? A["length"]
    : IndexOf<R, U, [...A, any]>
  : -1;
type LastIndexOf<
  T extends string,
  U extends string,
  R extends string = Reverse<T>
> = R extends `${infer F}${infer Rest}`
  ? Equal<F, U> extends true
    ? L<Rest>
    : LastIndexOf<Rest, U, Rest>
  : -1;

type L<
  S extends string,
  A extends any[] = []
> = S extends `${infer _}${infer Rest}` ? L<Rest, [...A, any]> : A["length"];

type Reverse<S extends string> = S extends `${infer F}${infer Rest}`
  ? `${Reverse<Rest>}${F}`
  : S;

type r = Reverse<"2323">;
type c = IndexOf<"2323", "3">;
type l = L<"233">;
type cc = LastIndexOf<"abcd", "c">;

// type FirstUniqueCharIndex<
//   T extends string,
//   U extends string = T,
//   A extends any[] = []
// > = U extends `${infer F}${infer Rest}`
//   ? IndexOf<T, F> extends LastIndexOf<T, F>
//     ? A["length"]
//     : FirstUniqueCharIndex<T, Rest, [...A, any]>
//   : -1;

// type FirstUniqueCharIndex<
//   T extends string,
//   _Acc extends string[] = []
// > = T extends `${infer Head}${infer Rest}`
//   ? Head extends _Acc[number]
//     ? FirstUniqueCharIndex<Rest, [..._Acc, Head]>
//     : Rest extends `${string}${Head}${string}`
//     ? FirstUniqueCharIndex<Rest, [..._Acc, Head]>
//     : _Acc["length"]
//   : -1;

//思路, 把每个字符单独拿出来匹配
//其他字符 extends `${string}${F}${string}`? true代表有重复,false代表没有重复

type FirstUniqueCharIndex<
  Post extends string,
  Pre extends string = "",
  I extends 0[] = []
> = Post extends `${infer F}${infer R}`
  ? `${Pre}${R}` extends `${string}${F}${string}`
    ? FirstUniqueCharIndex<R, `${Pre}${F}`, [...I, 0]>
    : I["length"]
  : -1;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<FirstUniqueCharIndex<"leetcode">, 0>>,
  Expect<Equal<FirstUniqueCharIndex<"loveleetcode">, 2>>,
  Expect<Equal<FirstUniqueCharIndex<"aabb">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"">, -1>>
];

type ccc = "" extends `${infer F}${infer Rest}` ? true : false;
