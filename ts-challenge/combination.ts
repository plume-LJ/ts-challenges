type ToUnion<T extends string[]> = T[number];
// type Combination<T extends string[], A extends string = ToUnion<T>, B extends string= A> =
//   B extends A ? A | `${A} ${Combination<never, Exclude<A,B>>}` :''

// type UnionComb<T extends string, U = T> = U extends T ? U | `${U} ${UnionComb<Exclude<T, U>>}` : ``;

// type Combination<
//   T extends string[],
//   U extends string = ToUnion<T>,
//   V = U
// > = V extends U ? V | `${V} ${Combination<never, Exclude<U, V>>}` : ``;

export type Combination<
  T extends string[],
  U extends string = T[number],
  U1 extends string = U
> = U extends never ? never : U | `${U} ${Combination<[], Exclude<U1, U>>}`;

// type Combination<T extends string[], U = T[number], K = U> = K extends string
//   ? K | `${K} ${Combination<[], Exclude<U, K>>}`
//   : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cc = Combination<["foo", "bar", "baz",'2','3','4',"4"]>

type cases = [
  Expect<
    Equal<
      Combination<["foo", "bar", "baz"]>,
      | "foo"
      | "bar"
      | "baz"
      | "foo bar"
      | "foo bar baz"
      | "foo baz"
      | "foo baz bar"
      | "bar foo"
      | "bar foo baz"
      | "bar baz"
      | "bar baz foo"
      | "baz foo"
      | "baz foo bar"
      | "baz bar"
      | "baz bar foo"
    >
  >
];
