type M = "+" | "-";

type PercentageParser<T> = T extends `${infer F}${infer R}`
  ? F extends M
    ? [F, ...(R extends `${infer K}%` ? [K, "%"] : [R, ""])]
    : ["", ...(T extends `${infer Y}%` ? [Y, "%"] : [T, ""])]
  : ["", "", ""];
// type PercentageParser<
//   A extends string,
//   Sign extends string = A extends `${infer Sign extends "+" | "-"}${string}`
//     ? Sign
//     : "",
//   Percent extends string = A extends `${string}%` ? "%" : ""
// > = A extends `${Sign}${infer Value}${Percent}`
//   ? [Sign, Value, Percent]
//   : [Sign, "", Percent];

// type PercentageParser<A extends string> =
//   A extends `${infer Sign}${infer N}${infer P extends '%'}`
//     ? Sign extends "+" | "-"
//       ? P extends "%"
//         ? [Sign, N, P]
//         : [Sign, N, ""]
//       : P extends "%"
//       ? ["", N, P]
//       : ["", N, ""]
//     : ["", "", ""];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Case0 = ["", "", ""];
type Case1 = ["+", "", ""];
type Case2 = ["+", "1", ""];
type Case3 = ["+", "100", ""];
type Case4 = ["+", "100", "%"];
type Case5 = ["", "100", "%"];
type Case6 = ["-", "100", "%"];
type Case7 = ["-", "100", ""];
type Case8 = ["-", "1", ""];
type Case9 = ["", "", "%"];
type Case10 = ["", "1", ""];
type Case11 = ["", "100", ""];

type c = PercentageParser<"+100%">;

type cases = [
  Expect<Equal<PercentageParser<"">, Case0>>,
  Expect<Equal<PercentageParser<"+">, Case1>>,
  Expect<Equal<PercentageParser<"+1">, Case2>>,
  Expect<Equal<PercentageParser<"+100">, Case3>>,
  Expect<Equal<PercentageParser<"+100%">, Case4>>,
  Expect<Equal<PercentageParser<"100%">, Case5>>,
  Expect<Equal<PercentageParser<"-100%">, Case6>>,
  Expect<Equal<PercentageParser<"-100">, Case7>>,
  Expect<Equal<PercentageParser<"-1">, Case8>>,
  Expect<Equal<PercentageParser<"%">, Case9>>,
  Expect<Equal<PercentageParser<"1">, Case10>>,
  Expect<Equal<PercentageParser<"100">, Case11>>
];
