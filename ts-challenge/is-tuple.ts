// type IsTuple<T> = IsNever<T> extends false
//   ? T extends readonly any[]
//     ? number extends T["length"]
//       ? false
//       : true
//     : false
//   : false;

type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
  ? any[] extends T
    ? false
    : true
  : false;
type c = [1,2,3]
type cc = readonly [1,2,3]
let cc:any[] = [1,2,3]
type ccc= cc extends c ? true : false
type cccc= any[] extends cc ? true : false
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
import { IsNever } from "./is-never";

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[2]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>
];
