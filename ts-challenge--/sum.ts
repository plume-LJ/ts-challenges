export type Sum<
  A extends string | number | bigint,
  B extends string | number | bigint
> = `${ParseLast<`${A}`>}|${ParseLast<`${B}`>}` extends `${infer PrecededA}|${infer LastA extends number}|${infer PrecededB}|${infer LastB extends number}`
  ? `${SumSmall<LastA, LastB>}` extends `${infer Forward}${infer Digit}`
    ? `${Sum<
        Sum<PrecededA, PrecededB>,
        Digit extends "" ? "" : Forward
      >}${Digit extends "" ? Forward : Digit}`
    : never
  : `${A}${B}`; // when A or B is empty

type NArray<N extends number, A extends any[] = []> = A["length"] extends N
  ? A
  : NArray<N, [...A, never]>;
type EnsureNum<N> = N extends number ? N : never;
type SumSmall<
  N1 extends number,
  N2 extends number,
  N3 extends number = 0
> = EnsureNum<[...NArray<N1>, ...NArray<N2>, ...NArray<N3>]["length"]>;
type SubtractSmall<N1 extends number, N2 extends number> = NArray<N1> extends [
  ...NArray<N2>,
  ...infer T
]
  ? T["length"]
  : NArray<N2> extends [...NArray<N1>, ...infer T]
  ? `-${T["length"]}` extends `${infer F extends number}`
    ? F
    : never
  : never;
type c = SubtractSmall<2,3>
type ParseLast<
  T extends string,
  Leading extends string = ""
> = T extends `${infer First}${infer Rest}`
  ? Rest extends ""
    ? `${Leading}|${First}`
    : ParseLast<Rest, `${Leading}${First}`>
  : Leading extends ""
  ? "" // T and Leading are empty
  : `${Leading}|${T}`;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Sum<2, 3>, "5">>,
  Expect<Equal<Sum<"13", "21">, "34">>,
  Expect<Equal<Sum<"328", 7>, "335">>,
  Expect<Equal<Sum<1_000_000_000_000n, "123">, "1000000000123">>,
  Expect<Equal<Sum<9999, 1>, "10000">>,
  Expect<Equal<Sum<4325234, "39532">, "4364766">>,
  Expect<Equal<Sum<728, 0>, "728">>,
  Expect<Equal<Sum<"0", 213>, "213">>,
  Expect<Equal<Sum<0, "0">, "0">>
];
type ccc = `${1_000_000_000_000n}`