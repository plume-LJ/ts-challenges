type spread<S extends string, T extends string[]> = [
  ...T,
  `${S}${T[number]}`,
  `${T[number]}${S}`
];

// type AllCombinations<
//   S extends string,
//   result extends string[] = [""]
// > = S extends `${infer first}${infer rest}`
//   ? AllCombinations<rest, spread<first, result>>
//   : result[number];

type StringToUnion<S> = S extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : S;
// type AllCombinations<
//   S extends string,
//   T extends string = StringToUnion<S>,
//   U extends string = T
// > = S extends `${infer _}${infer R}`
//   ? U extends string
//     ? `${U}${AllCombinations<R, U extends "" ? T : Exclude<T, U>>}`
//     : never
//   : "";
type AllCombinations<
  S extends string,
  T extends string = StringToUnion<S>,
  U extends string = T
> = U extends string
  ? U | `${U}${AllCombinations<never, Exclude<T, U>>}`
  : never;
// type AllCombinations<S extends string, U extends string = StringToUnion<S>> =
//   [U] extends [never]
//   ? ''
//   : '' | {
//     [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}`
//   }[U]

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = StringToUnion<'A'>

type cases = [
  Expect<Equal<AllCombinations<"">, "">>,
  Expect<Equal<AllCombinations<"A">, "" | "A">>,
  Expect<Equal<AllCombinations<"AB">, "" | "A" | "B" | "AB" | "BA">>,
  Expect<
    Equal<
      AllCombinations<"ABC">,
      | ""
      | "A"
      | "B"
      | "C"
      | "AB"
      | "AC"
      | "BA"
      | "BC"
      | "CA"
      | "CB"
      | "ABC"
      | "ACB"
      | "BAC"
      | "BCA"
      | "CAB"
      | "CBA"
    >
  >,
  Expect<
    Equal<
      AllCombinations<"ABCD">,
      | ""
      | "A"
      | "B"
      | "C"
      | "D"
      | "AB"
      | "AC"
      | "AD"
      | "BA"
      | "BC"
      | "BD"
      | "CA"
      | "CB"
      | "CD"
      | "DA"
      | "DB"
      | "DC"
      | "ABC"
      | "ABD"
      | "ACB"
      | "ACD"
      | "ADB"
      | "ADC"
      | "BAC"
      | "BAD"
      | "BCA"
      | "BCD"
      | "BDA"
      | "BDC"
      | "CAB"
      | "CAD"
      | "CBA"
      | "CBD"
      | "CDA"
      | "CDB"
      | "DAB"
      | "DAC"
      | "DBA"
      | "DBC"
      | "DCA"
      | "DCB"
      | "ABCD"
      | "ABDC"
      | "ACBD"
      | "ACDB"
      | "ADBC"
      | "ADCB"
      | "BACD"
      | "BADC"
      | "BCAD"
      | "BCDA"
      | "BDAC"
      | "BDCA"
      | "CABD"
      | "CADB"
      | "CBAD"
      | "CBDA"
      | "CDAB"
      | "CDBA"
      | "DABC"
      | "DACB"
      | "DBAC"
      | "DBCA"
      | "DCAB"
      | "DCBA"
    >
  >
];
