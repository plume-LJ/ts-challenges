// type IsAny<T> = (any extends never ? 1 : 2) extends (T extends never ? 1 : 2) ? true : false;
// type IsAny<T> = [{}, T] extends [T, null] ? true : false;
// type IsAny<T> = [{}] extends [T] ? [T] extends [null] ? true: false: false;
// type IsAny<U> = (<T>() => T extends any ? 1 : 2) extends <T>() => T extends U
//   ? 1
//   : 2
//   ? true
//   : false;
// type IsAny<T> = (any extends T & 0 ? 1 : 2) extends 1 ? true : false
type IsAny<T> = 0 extends (1 & T) ? true : false;


type IsBoolean<T> = false extends T
  ? true extends T
    ? true
    : false
  : false
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
type c = 1 & number;

type cases = [
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>
];
