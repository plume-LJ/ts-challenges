type CapitalizeArrayKeys<T extends any[]> = T extends [infer F, ...infer L]
  ? F extends object
    ? [CapitalizeNestObjectKeys<F>, ...CapitalizeArrayKeys<L>]
    : [F, ...CapitalizeArrayKeys<L>]
  : [];
type CapitalizeNestObjectKeys<T> = {
  [K in keyof T as `${Capitalize<K & string>}`]: T[K] extends object
    ? T[K] extends any[]
      ? CapitalizeArrayKeys<T[K]>
      : CapitalizeNestObjectKeys<T[K]>
    : T[K];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
import { ExpectFalse, NotEqual } from "@type-challenges/utils";

type c = CapitalizeNestObjectKeys<foo>

type foo = {
  foo: string;
  bars: [{ foo: string }];
};

type Foo = {
  Foo: string;
  Bars: [
    {
      Foo: string;
    }
  ];
};

type cases = [Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>];
