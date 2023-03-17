type StringToUnion<S extends string> = S extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : never;
type DropString<
  S,
  R extends string,
  U = StringToUnion<R>
> = S extends `${infer F}${infer RE}`
  ? F extends U
    ? DropString<RE, R, U>
    : `${F}${DropString<RE, R, U>}`
  : "";

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<DropString<"butter fly!", "">, "butter fly!">>,
  Expect<Equal<DropString<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropString<"butter fly!", "but">, "er fly!">>,
  Expect<
    Equal<DropString<" b u t t e r f l y ! ", "but">, "     e r f l y ! ">
  >,
  Expect<Equal<DropString<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropString<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<
    Equal<DropString<" b u t t e r f l y ! ", "but">, "     e r f l y ! ">
  >,
  Expect<
    Equal<DropString<" b u t t e r f l y ! ", "tub">, "     e r f l y ! ">
  >,
  Expect<
    Equal<DropString<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">
  >,
  Expect<Equal<DropString<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>
];
