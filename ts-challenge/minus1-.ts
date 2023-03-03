// from https://github.com/type-challenges/type-challenges/issues/2586

type Digital = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type MakeDigitalArray<
  N extends Digital,
  T extends any[] = []
> = N extends `${T["length"]}` ? T : MakeDigitalArray<N, [...T, 0]>;
type Multiply10<T extends any[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
];

type ToArray<
  S extends number | string,
  T extends any[] = []
> = `${S}` extends `${infer F}${infer L}`
  ? F extends Digital
    ? ToArray<L, [...Multiply10<T>, ...MakeDigitalArray<F>]>
    : never
  : T;

type Minus<S extends number, N extends number> = ToArray<S> extends [
  ...ToArray<N>,
  ...infer L
]
  ? L["length"]
  : 0;

type MinusOne<S extends number> = Minus<S, 1>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  // Expect<Equal<MinusOne<0>, -1>>,
  // Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
];
