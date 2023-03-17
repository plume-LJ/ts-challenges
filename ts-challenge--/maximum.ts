import { GreaterThan } from "../ts-challenge/greater-than-";

type Maximum<
  T extends any[],
  P extends number = never,
  B extends boolean = true
> = T extends [infer F extends number, ...infer L]
  ? B extends true
    ? Maximum<L, F, false>
    : Maximum<L, GreaterThan<P, F> extends true ? P : F, false>
  : P;
type Minimum<
  T extends any[],
  P extends number = never,
  B extends boolean = true
> = T extends [infer F extends number, ...infer L]
  ? B extends true
    ? Minimum<L, F, false>
    : Minimum<L, GreaterThan<P, F> extends true ? F : P, false>
  : P;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
type c = Minimum<[0, 2, 1]>

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>
];
type cases1 = [
  Expect<Equal<Minimum<[]>, never>>,
  Expect<Equal<Minimum<[0, 2, 1]>, 0>>,
  Expect<Equal<Minimum<[1, 20, 200, 150]>, 1>>
];
