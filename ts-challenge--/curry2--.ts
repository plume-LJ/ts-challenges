// type CurriedResult<FA extends unknown[], FR> = FA extends []
//   ? FR
//   : <FRFA extends unknown[]>(
//       ...args: FRFA
//     ) => FA extends [...FRFA, ...infer FARest]
//       ? CurriedResult<FARest, FR>
//       : never;

// declare function DynamicParamsCurrying<FA extends unknown[], FR>(
//   fn: (...args: FA) => FR
// ): CurriedResult<FA, FR>;


declare function DynamicParamsCurrying<T extends any[], R>(
  fn: (...args: T) => R
): T extends []
  ? R // returns R if no params is needed
  : <P extends any[]>(
      ...args: P
    ) => T extends [...P, ...infer K3] // check does P & K3 extends T, basically checking is P fully T
      ? ReturnType<typeof DynamicParamsCurrying<K3, R>> // Pass in K3 and T to check is K3 = T
      : R;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const curried1 = DynamicParamsCurrying(
  (_a: string, _b: number, _c: boolean) => true
);
const curried = DynamicParamsCurrying((_a: string, _b: number) => true);
curried("1", 2);
curried("1")(false);
const curried2 = DynamicParamsCurrying(
  (
    _a: string,
    _b: number,
    _c: boolean,
    _d: boolean,
    _e: boolean,
    _f: string,
    _g: boolean
  ) => true
);

const curried1Return1 = curried1("123")(123)(true);
const curried1Return2 = curried1("123", 123)(false);
const curried1Return3 = curried1("123", 123, true);

const curried2Return1 = curried2("123")(123)(true)(false)(true)("123")(false);
const curried2Return2 = curried2("123", 123)(true, false)(true, "123")(false);
const curried2Return3 = curried2("123", 123)(true)(false)(true, "123", false);
const curried2Return4 = curried2("123", 123, true)(false, true, "123")(false);
const curried2Return5 = curried2("123", 123, true)(false)(true)("123")(false);
const curried2Return6 = curried2("123", 123, true, false)(true, "123", false);
const curried2Return7 = curried2("123", 123, true, false, true)("123", false);
const curried2Return8 = curried2("123", 123, true, false, true)("123")(false);
const curried2Return9 = curried2("123", 123, true, false, true, "123")(false);
const curried2Return10 = curried2("123", 123, true, false, true, "123", false);

type cases = [
  Expect<Equal<typeof curried1Return1, boolean>>,
  Expect<Equal<typeof curried1Return2, boolean>>,
  Expect<Equal<typeof curried1Return3, boolean>>,

  Expect<Equal<typeof curried2Return1, boolean>>,
  Expect<Equal<typeof curried2Return2, boolean>>,
  Expect<Equal<typeof curried2Return3, boolean>>,
  Expect<Equal<typeof curried2Return4, boolean>>,
  Expect<Equal<typeof curried2Return5, boolean>>,
  Expect<Equal<typeof curried2Return6, boolean>>,
  Expect<Equal<typeof curried2Return7, boolean>>,
  Expect<Equal<typeof curried2Return8, boolean>>,
  Expect<Equal<typeof curried2Return9, boolean>>,
  Expect<Equal<typeof curried2Return10, boolean>>
];
