// type DropChar<S, C> = S extends `${infer F}${infer R}`
//   ? F extends C
//     ? `${DropChar<R, C>}`
//     : `${F}${DropChar<R, C>}`
//   : S;
type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}`
  ? `${L}${DropChar<R, C>}`
  : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = "butter fly!" extends `${infer L}${string}${infer R }` ? R : false
type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<"butter fly!", "">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", "!">, "butter fly">>,
  Expect<Equal<DropChar<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>
];
