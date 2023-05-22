// your answers
type CurryingType<T extends unknown[], R> = <P extends Partial<T>>(
  ...args: P
) => ((...args: T) => any) extends (...args: [...P, ...infer Args]) => any
  ? Args extends []
    ? R
    : CurryingType<Args, R>
  : never;
  
type c = Partial<[1, 2, 3]> extends [1,2,3] ? true : false;

declare function DynamicParamsCurrying<T extends (...args: any[]) => any>(
  fn: T
): CurryingType<Parameters<T>, ReturnType<T>>;
// function DynamicParamsCurrying(fn: Function) {
//   return function curried(...args: unknown[]) {
//     let _arguments: unknown[] = [];
//     if (args.length === fn.length) {
//       return fn.apply(null, args);
//     } else {
//       _arguments = _arguments.concat(args)
//       return function(...args: unknown[]) {
//         return curried.apply(null, _arguments.concat(args))
//       }
//     }
//   }
// let _arguments: unknown[] = [];
// const fnn = (...args: unknown[]) => {
//   let temp = _arguments.concat(...args);
//   if (temp.length === fn.length) {
//     _arguments = [];
//     return fn.apply(null, temp);
//   } else {
//     _arguments = temp;
//     return fnn;
//   }
// };
// return fnn;
// }
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const curried1 = DynamicParamsCurrying(
  (_a: string, _b: number, _c: boolean) => true
);

type cc = <P extends [_a?: string | undefined, _b?: number | undefined]>(
  ...args: P
) => ((_a: string, _b: number) => any) extends (
  ...args: [...P, ...infer Args]
) => any
  ? Args extends []
    ? boolean
    : CurryingType<Args, boolean>
  : never;
const curried = DynamicParamsCurrying((_a: string, _b: number) => true);
curried("1", 2);
console.log(curried("1")()());
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
