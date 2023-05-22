type CountTo<N extends number, A extends any[] = []> = A["length"] extends N
  ? A
  : CountTo<N, [...A, any]>;

// M => minuend, S => subtrahend
type Subtract<M extends number, S extends number> = CountTo<M> extends [
  ...CountTo<S>,
  ...infer T
]
  ? T["length"]
  : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
import { GreaterThan } from "ts-challenge/greater-than-";

type cases = [
  Expect<Equal<Subtract<1, 1>, 0>>,
  Expect<Equal<Subtract<2, 1>, 1>>,
  Expect<Equal<Subtract<1, 2>, never>>,
  // @ts-expect-error
  Expect<Equal<Subtract<1000, 999>, 1>>
];
type c = Subtract2<1, 9>;
// This version doesn't use Tuple
type Subtract2<
  M extends string | number | bigint,
  S extends string | number | bigint
> = `${M}${S}` extends `-${infer NegM}-${infer NegS}`
  ? SubtractPositive<NegS, NegM> extends infer Result
    ? Result extends `~${string}`
      ? `-${SubtractPositive<NegM, NegS>}`
      : Result
    : never
  : `${M}` extends `-${infer NegM}`
  ? `-${Sum<NegM, `${S}`>}`
  : `${S}` extends `-${infer NegS}`
  ? Sum<`${M}`, NegS>
  : SubtractPositive<`${M}`, `${S}`> extends infer Result
  ? Result extends `~${string}`
    ? `-${SubtractPositive<`${S}`, `${M}`>}`
    : Result
  : never;

type SubtractPositive<
  M extends string,
  S extends string
> = `${ParseLast<`${M}`>}|${ParseLast<`${S}`>}` extends `${infer LeadingA}|${infer LastA}|${infer LeadingB}|${infer LastB}`
  ? CalculateMap[`${LastA}-${LastB}` &
      keyof CalculateMap] extends `${infer Forward}${infer Digit}`
    ? `${RemoveLeadingZero<
        SubtractPositive<LeadingA, Sum<LeadingB, Forward>>
      >}${Digit}`
    : 2
  : `${RemoveLeadingZero<M>}${RemoveLeadingZero<S>}` extends ""
  ? ""
  : `~`;

type Sum<
  A extends string | number | bigint,
  B extends string | number | bigint
> = `${ParseLast<`${A}`>}|${ParseLast<`${B}`>}` extends `${infer LeadingA}|${infer LastA}|${infer LeadingB}|${infer LastB}`
  ? CalculateMap[`${LastA}+${LastB}` &
      keyof CalculateMap] extends `${infer Forward}${infer Digit}`
    ? `${RemoveLeadingZero<Sum<Sum<LeadingA, LeadingB>, Forward>>}${Digit}`
    : 3
  : `${A}${B}`; // when either is empty

type RemoveLeadingZero<T extends string> = T extends `0${infer Rest}`
  ? RemoveLeadingZero<Rest>
  : T;

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

  type c1 = SubtractPositive<'1', '9'>
  type c2 = ParseLast<'9'>
type CalculateMap = {
  "0+0": "00";
  "0+1": "01";
  "0+2": "02";
  "0+3": "03";
  "0+4": "04";
  "0+5": "05";
  "0+6": "06";
  "0+7": "07";
  "0+8": "08";
  "0+9": "09";
  "1+0": "01";
  "1+1": "02";
  "1+2": "03";
  "1+3": "04";
  "1+4": "05";
  "1+5": "06";
  "1+6": "07";
  "1+7": "08";
  "1+8": "09";
  "1+9": "10";
  "2+0": "02";
  "2+1": "03";
  "2+2": "04";
  "2+3": "05";
  "2+4": "06";
  "2+5": "07";
  "2+6": "08";
  "2+7": "09";
  "2+8": "10";
  "2+9": "11";
  "3+0": "03";
  "3+1": "04";
  "3+2": "05";
  "3+3": "06";
  "3+4": "07";
  "3+5": "08";
  "3+6": "09";
  "3+7": "10";
  "3+8": "11";
  "3+9": "12";
  "4+0": "04";
  "4+1": "05";
  "4+2": "06";
  "4+3": "07";
  "4+4": "08";
  "4+5": "09";
  "4+6": "10";
  "4+7": "11";
  "4+8": "12";
  "4+9": "13";
  "5+0": "05";
  "5+1": "06";
  "5+2": "07";
  "5+3": "08";
  "5+4": "09";
  "5+5": "10";
  "5+6": "11";
  "5+7": "12";
  "5+8": "13";
  "5+9": "14";
  "6+0": "06";
  "6+1": "07";
  "6+2": "08";
  "6+3": "09";
  "6+4": "10";
  "6+5": "11";
  "6+6": "12";
  "6+7": "13";
  "6+8": "14";
  "6+9": "15";
  "7+0": "07";
  "7+1": "08";
  "7+2": "09";
  "7+3": "10";
  "7+4": "11";
  "7+5": "12";
  "7+6": "13";
  "7+7": "14";
  "7+8": "15";
  "7+9": "16";
  "8+0": "08";
  "8+1": "09";
  "8+2": "10";
  "8+3": "11";
  "8+4": "12";
  "8+5": "13";
  "8+6": "14";
  "8+7": "15";
  "8+8": "16";
  "8+9": "17";
  "9+0": "09";
  "9+1": "10";
  "9+2": "11";
  "9+3": "12";
  "9+4": "13";
  "9+5": "14";
  "9+6": "15";
  "9+7": "16";
  "9+8": "17";
  "9+9": "18";
  "0-0": "00";
  "0-1": "19";
  "0-2": "18";
  "0-3": "17";
  "0-4": "16";
  "0-5": "15";
  "0-6": "14";
  "0-7": "13";
  "0-8": "12";
  "0-9": "11";
  "1-0": "01";
  "1-1": "00";
  "1-2": "19";
  "1-3": "18";
  "1-4": "17";
  "1-5": "16";
  "1-6": "15";
  "1-7": "14";
  "1-8": "13";
  "1-9": "12";
  "2-0": "02";
  "2-1": "01";
  "2-2": "00";
  "2-3": "19";
  "2-4": "18";
  "2-5": "17";
  "2-6": "16";
  "2-7": "15";
  "2-8": "14";
  "2-9": "13";
  "3-0": "03";
  "3-1": "02";
  "3-2": "01";
  "3-3": "00";
  "3-4": "19";
  "3-5": "18";
  "3-6": "17";
  "3-7": "16";
  "3-8": "15";
  "3-9": "14";
  "4-0": "04";
  "4-1": "03";
  "4-2": "02";
  "4-3": "01";
  "4-4": "00";
  "4-5": "19";
  "4-6": "18";
  "4-7": "17";
  "4-8": "16";
  "4-9": "15";
  "5-0": "05";
  "5-1": "04";
  "5-2": "03";
  "5-3": "02";
  "5-4": "01";
  "5-5": "00";
  "5-6": "19";
  "5-7": "18";
  "5-8": "17";
  "5-9": "16";
  "6-0": "06";
  "6-1": "05";
  "6-2": "04";
  "6-3": "03";
  "6-4": "02";
  "6-5": "01";
  "6-6": "00";
  "6-7": "19";
  "6-8": "18";
  "6-9": "17";
  "7-0": "07";
  "7-1": "06";
  "7-2": "05";
  "7-3": "04";
  "7-4": "03";
  "7-5": "02";
  "7-6": "01";
  "7-7": "00";
  "7-8": "19";
  "7-9": "18";
  "8-0": "08";
  "8-1": "07";
  "8-2": "06";
  "8-3": "05";
  "8-4": "04";
  "8-5": "03";
  "8-6": "02";
  "8-7": "01";
  "8-8": "00";
  "8-9": "19";
  "9-0": "09";
  "9-1": "08";
  "9-2": "07";
  "9-3": "07";
  "9-4": "05";
  "9-5": "04";
  "9-6": "03";
  "9-7": "02";
  "9-8": "01";
  "9-9": "00";
};
