// type Diff<O, O1> = {
//   [K in keyof O | keyof O1 as K extends keyof O ? K extends keyof O1 ? never : K : K]:
//   K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
// }
// type Diff<O, O1> = {
//   [P in
//     | Exclude<keyof O, keyof O1>
//     | Exclude<keyof O1, keyof O>]: P extends keyof O1
//     ? O1[P]
//     : P extends keyof O
//     ? O[P]
//     : never;
// };
// type Diff<T, U, A = T & U> = {
//   [K in Exclude<keyof A, keyof U> | Exclude<keyof A, keyof T>]: A[K];
// };
type Diff<O, O1> = Omit<O & O1, keyof O & keyof O1>;
// your answers
// type Diff<O, O1, A = O & O1> = {
//   [K in keyof (Omit<A, keyof O1> & Omit<A, keyof O>)]: A[K];
// };
// type Diff<O, O1> = Omit<O, keyof O1> & Omit<O1, keyof O> extends infer R
//   ? {
//       [K in keyof R]: R[K];
//     }
//   : never;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cc = keyof Foo & keyof Bar

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];
