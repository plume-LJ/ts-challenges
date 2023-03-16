// type CamelCase<T extends string> = T extends Lowercase<T>
//   ? T extends `${infer Head}_${infer U}${infer Rest}`
//     ? `${Head}${Uppercase<U>}${CamelCase<Rest>}`
//     : T
//   : CamelCase<Lowercase<T>>;

// type CamelCase<T extends string> = T extends `${infer Head}_${infer Tail}`
//   ? `${Lowercase<Head>}${Capitalize<CamelCase<Tail>>}`
//   : Lowercase<T>;

// type CamelCase<T extends string> =
//   Lowercase<T> extends `${infer Head}_${infer Tail}`
//     ? `${Head}${Capitalize<CamelCase<Tail>>}`
//     : Lowercase<T>;

// @teamchong
// type CamelCase<T extends string> = T extends `_${infer First extends Letters}${infer Rest}`
//   ? `${Uppercase<First>}${CamelCase<Rest>}`
//   : T extends `${infer First}${infer Rest}`
//   ? `${Lowercase<First>}${CamelCase<Rest>}`
//   : T; // ending condition (S='')
// type CamelCase<T extends string> = T extends `${infer First}${infer Rest}` ?
// Uppercase<First> extends Lowercase<First> ?

type Letter<T extends string> = Uppercase<T> extends Lowercase<T>
  ? false
  : true;

type _CamelCase<T extends string> = T extends `${infer First}${infer Rest}`
  ? `${Lowercase<First>}${CamelCase<Rest>}`
  : T;

type CamelCase<T extends string> = T extends `_${infer First}${infer Rest}`
  ? Uppercase<First> extends Lowercase<First>
    ? _CamelCase<T>
    : `${Uppercase<First>}${CamelCase<Rest>}`
  : _CamelCase<T>;

type UppercaseLetters =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

type Letters = UppercaseLetters | Lowercase<UppercaseLetters>;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<CamelCase<"foobar">, "foobar">>,
  Expect<Equal<CamelCase<"FOOBAR">, "foobar">>,
  Expect<Equal<CamelCase<"foo_bar">, "fooBar">>,
  Expect<Equal<CamelCase<"foo__bar">, "foo_Bar">>,
  Expect<Equal<CamelCase<"foo_$bar">, "foo_$bar">>,
  Expect<Equal<CamelCase<"foo_bar_">, "fooBar_">>,
  Expect<Equal<CamelCase<"foo_bar__">, "fooBar__">>,
  Expect<Equal<CamelCase<"foo_bar_$">, "fooBar_$">>,
  Expect<Equal<CamelCase<"foo_bar_hello_world">, "fooBarHelloWorld">>,
  Expect<Equal<CamelCase<"HELLO_WORLD_WITH_TYPES">, "helloWorldWithTypes">>,
  Expect<Equal<CamelCase<"-">, "-">>,
  Expect<Equal<CamelCase<"">, "">>,
  Expect<Equal<CamelCase<"😎">, "😎">>
];
