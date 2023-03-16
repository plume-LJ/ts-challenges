type ControlsMap = {
  c: "char";
  s: "string";
  d: "dec";
  o: "oct";
  h: "hex";
  f: "float";
  p: "pointer";
};

// type ParsePrintFormat<
//   S extends string,
//   R extends string[] = []
// > = S extends `${string}%${infer F}${infer Rest}`
//   ? F extends keyof ControlsMap
//     ? ParsePrintFormat<Rest, [...R, ControlsMap[F]]>
//     : ParsePrintFormat<Rest, R>
//   : R;


type ParsePrintFormat<T extends string> =
T extends `${string}%${infer C}${infer Rest}`
  ? C extends keyof ControlsMap
    ? [ControlsMap[C], ...ParsePrintFormat<Rest>]
    : [...ParsePrintFormat<Rest>]
  : [];
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<ParsePrintFormat<"">, []>>,
  Expect<Equal<ParsePrintFormat<"Any string.">, []>>,
  Expect<Equal<ParsePrintFormat<"The result is %d.">, ["dec"]>>,
  Expect<Equal<ParsePrintFormat<"The result is %%d.">, []>>,
  Expect<Equal<ParsePrintFormat<"The result is %%%d.">, ["dec"]>>,
  Expect<Equal<ParsePrintFormat<"The result is %f.">, ["float"]>>,
  Expect<Equal<ParsePrintFormat<"The result is %h.">, ["hex"]>>,
  Expect<Equal<ParsePrintFormat<"The result is %q.">, []>>,
  Expect<Equal<ParsePrintFormat<"Hello %s: score is %d.">, ["string", "dec"]>>,
  Expect<Equal<ParsePrintFormat<"The result is %">, []>>
];
