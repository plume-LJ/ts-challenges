enum Comparison {
  Greater,
  Equal,
  Lower,
}

type isNegative<T extends number> = `${T}` extends `-${string}` ? true : false;
type Absolute<T extends number> = `${T}` extends `-${infer F extends number}`
  ? F
  : T;

type Comparator<A extends number, B extends number> = A extends B
  ? Comparison.Equal
  : isNegative<A> extends true
  ? isNegative<B> extends true
    ? Comparator<Absolute<B>, Absolute<A>>
    : Comparison.Lower
  : isNegative<B> extends true
  ? Comparison.Greater
  : GreaterThan<A, B> extends true
  ? Comparison.Greater
  : Comparison.Lower;

type Index = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
type StringToArray<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...StringToArray<R>]
  : [];
type CompareDigit<
  A extends string,
  B extends string,
  Count extends any[] = []
> = A extends Index[Count["length"]]
  ? false
  : B extends Index[Count["length"]]
  ? true
  : CompareDigit<A, B, [...Count, any]>;

type CompareDigitArray<
  A extends string[],
  B extends string[],
  Index extends any[] = []
> = CompareDigit<A[Index["length"]], B[Index["length"]]> extends true
  ? true
  : CompareDigit<B[Index["length"]], A[Index["length"]]> extends true
  ? false
  : CompareDigitArray<A, B, [...Index, any]>;
type LengthOfString<
  T extends string,
  A extends any[] = []
> = T extends `${infer _F}${infer tail}`
  ? LengthOfString<tail, [...A, any]>
  : A["length"];

type LengthOfNumber<
  T extends number,
  A extends any[] = []
> = `${T}` extends `${infer _F}${infer tail extends number}`
  ? LengthOfNumber<tail, [...A, any]>
  : A["length"];

// type GreaterThan<
//   A extends number,
//   B extends number
// > = LengthOfString<`${A}`> extends LengthOfString<`${B}`>
//   ? CompareDigitArray<StringToArray<`${A}`>, StringToArray<`${B}`>>
//   : GreaterThan<LengthOfString<`${A}`>, LengthOfString<`${B}`>>;

type GreaterThan<
  A extends number,
  B extends number
> = LengthOfNumber<A> extends LengthOfNumber<B>
  ? CompareDigitArray<StringToArray<`${A}`>, StringToArray<`${B}`>>
  : GreaterThan<LengthOfNumber<A>, LengthOfNumber<B>>;

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
