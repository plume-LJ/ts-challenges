// type Join<
//   T extends string[],
//   U extends string | number,
//   RE extends string = ""
// > = T extends [infer F extends string, ...infer R extends string[]]
//   ? Join<R, U, `${RE}${F}${R extends [] ? "" : U}`>
//   : RE;
type Join<T, U extends string | number> = T extends [
  infer F extends string,
  ...infer R
]
  ? // move the logic into ${}
    `${F}${R extends [] ? `` : U}${Join<R, U>}`
  : ``;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = Join<["a", "p", "p", "l", "e"], "-">;

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>
];
