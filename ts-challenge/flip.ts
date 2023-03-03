import { Reverse } from "./reverse";

// type FlipArguments<T extends (...args: any[]) => any> =
// T extends (...args: infer P) => infer R ? (...args: Reverse<P>) => R : never

type FlipArguments<T extends (...args: any) => any> = (
  ...args: Reverse<Parameters<T>>
) => ReturnType<T>;

// type Flip<T> = T extends Record<PropertyKey,any> ? {
//   [K in keyof T as T[K] extends PropertyKey ? T[K]: `${T[K]}`]: K
// } : never

// your answers
type Flip<T extends Record<string, any>> = {
  [K in keyof T as `${T[K]}`]: K;
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect, NotEqual } from "@type-challenges/utils";

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
];

type errors = [
  // @ts-expect-error
  FlipArguments<"string">,
  // @ts-expect-error
  FlipArguments<{ key: "value" }>,
  // @ts-expect-error
  FlipArguments<["apple", "banana", 100, { a: 1 }]>,
  // @ts-expect-error
  FlipArguments<null | undefined>
];
let c = Symbol(2);

type cc = Flip<{ pi: 3.14; bool: {} }>;

type case1s = [
  Expect<Equal<{ a: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<NotEqual<{ b: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<Equal<{ 3.14: "pi"; true: "bool" }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<
    Equal<{ val2: "prop2"; val: "prop" }, Flip<{ prop: "val"; prop2: "val2" }>>
  >
];
