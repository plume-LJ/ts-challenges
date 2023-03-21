type Required<T> = { [P in keyof T]-?: T[P] };

type GetRequired<T extends {}> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};
// type MutableKeys<T> = keyof {
//   [P in keyof T as Equal<
//     Pick<T, P>, // can be Copy
//     Readonly<Pick<T, P>>
//   > extends true
//     ? never
//     : P]: never;
// };
// type MutableKeys<T> = keyof {
//   [K in keyof T as Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
//     ? never
//     : K]: never;
// };
// type MutableKeys<T> = {
//   [K in keyof T]-?: IfEquals<
//     { [Q in K]: T[K] },
//     { -readonly [Q in K]: T[K] },
//     K,
//     never
//   >;
// }[keyof T];
// type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
//   T
// >() => T extends Y ? 1 : 2
//   ? A
//   : B;

  type MutableKeys<T, K = keyof T> = K extends keyof T
  ? Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? never
    : K
  : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = MutableKeys<{ a: number; readonly b: string }>;

type cases = [
  Expect<Equal<MutableKeys<{ a: never; readonly b: string }>, "a">>,
  Expect<Equal<MutableKeys<{ a: undefined; readonly b: undefined }>, "a">>,
  Expect<
    Equal<
      MutableKeys<{ a: undefined; readonly b?: undefined; c: string; d: null }>,
      "a" | "c" | "d"
    >
  >,
  Expect<Equal<MutableKeys<{}>, never>>
];

type cc = {c: never}
type ccc = [{ readonly a: "2" }] extends [{ a: "2" }] ? true : false;
