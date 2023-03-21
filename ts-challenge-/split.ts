// type Split<S extends string, SEP extends string> = string extends S
//   ? string[]
//   : S extends `${infer F}${SEP}${infer R}`
//   ? [F, ...Split<R, SEP>]
//   : S extends ""
//   ? SEP extends ""
//     ? []
//     : [""]
//   : [S];

type Split<S extends string, SEP extends string> = string extends S
  ? string[]
  : S extends SEP
  ? []
  : S extends `${infer HEAD}${SEP}${infer TAIL}`
  ? [HEAD, ...Split<TAIL, SEP>]
  : [S];

type cc = "" extends "" ? true : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = Split<"Hi! How are you?", "">;
type cases = [
  Expect<Equal<Split<"Hi! How are you?", "z">, ["Hi! How are you?"]>>,
  Expect<Equal<Split<"Hi! How are you?", " ">, ["Hi!", "How", "are", "you?"]>>,
  Expect<
    Equal<
      Split<"Hi! How are you?", "">,
      [
        "H",
        "i",
        "!",
        " ",
        "H",
        "o",
        "w",
        " ",
        "a",
        "r",
        "e",
        " ",
        "y",
        "o",
        "u",
        "?"
      ]
    >
  >,
  Expect<Equal<Split<"", "">, []>>,
  Expect<Equal<Split<"", "z">, [""]>>,
  Expect<Equal<Split<string, "whatever">, string[]>>
];
