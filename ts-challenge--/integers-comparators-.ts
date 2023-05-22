enum Comparison {
  Greater,
  Equal,
  Lower,
}

type ParseNegativeNumber<N extends number> = `${N}` extends `-${infer PN}` ? PN : N;

type CompareShort<A extends number | string, B extends number | string, Arr extends any[] = []> =
  `${Arr['length']}` extends `${A}`
  ? Comparison.Lower
  : `${Arr['length']}` extends `${B}`
  ? Comparison.Greater
  : CompareShort<A, B, [any, ...Arr]>

type LengthOfString<S extends string, R extends any[] = []> = S extends `${infer First}${infer Rest}` ? LengthOfString<Rest, [...R, First]> : R["length"]

type Compare<A extends number | string, B extends number | string> = LengthOfString<`${A}`> extends LengthOfString<`${B}`> ?
  (
    `${A}` extends `${infer C}${infer RestA}` ? (
      `${B}` extends `${infer D}${infer RestB}` ? (
        C extends D ? Compare<RestA, RestB> : CompareShort<C, D>
      ) : never
    ) : never
  ) : Compare<LengthOfString<`${A}`>, LengthOfString<`${B}`>>

type ComparatorI<A extends number | string, B extends number | string> =
  A extends string
  ? B extends string
  ? Compare<B, A>
  : Comparison.Lower
  : B extends string
  ? Comparison.Greater
  : Compare<A, B>

type Comparator<A extends number, B extends number> =
  A extends B
  ? Comparison.Equal
  : ComparatorI<ParseNegativeNumber<A>, ParseNegativeNumber<B>>;

  /* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
// import { GreaterThan } from "ts-challenge/greater-than-";

type c = LengthOfString<"">;

type cases = [
  Expect<Equal<Comparator<5, 5>, Comparison.Equal>>,
  Expect<Equal<Comparator<5, 6>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 8>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 0>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, 0>, Comparison.Lower>>,
  Expect<Equal<Comparator<0, 0>, Comparison.Equal>>,
  Expect<Equal<Comparator<0, -5>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -3>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -3>, Comparison.Lower>>,
  Expect<Equal<Comparator<-25, -30>, Comparison.Greater>>,
  Expect<Equal<Comparator<15, -23>, Comparison.Greater>>,
  Expect<Equal<Comparator<40, 37>, Comparison.Greater>>,
  Expect<Equal<Comparator<-36, 36>, Comparison.Lower>>,
  Expect<Equal<Comparator<27, 27>, Comparison.Equal>>,
  Expect<Equal<Comparator<-38, -38>, Comparison.Equal>>,

  Expect<Equal<Comparator<1, 100>, Comparison.Lower>>,
  Expect<Equal<Comparator<100, 1>, Comparison.Greater>>,
  Expect<Equal<Comparator<-100, 1>, Comparison.Lower>>,
  Expect<Equal<Comparator<1, -100>, Comparison.Greater>>,
  Expect<Equal<Comparator<-100, -1>, Comparison.Lower>>,
  Expect<Equal<Comparator<-1, -100>, Comparison.Greater>>,

  // Extra tests if you like to challenge yourself!
  Expect<
    Equal<Comparator<9007199254740992, 9007199254740992>, Comparison.Equal>
  >,
  Expect<
    Equal<Comparator<-9007199254740992, -9007199254740992>, Comparison.Equal>
  >,
  Expect<
    Equal<Comparator<9007199254740991, 9007199254740992>, Comparison.Lower>
  >,
  Expect<
    Equal<Comparator<9007199254740992, 9007199254740991>, Comparison.Greater>
  >,
  Expect<
    Equal<Comparator<-9007199254740992, -9007199254740991>, Comparison.Lower>
  >,
  Expect<
    Equal<Comparator<-9007199254740991, -9007199254740992>, Comparison.Greater>
  >
];
