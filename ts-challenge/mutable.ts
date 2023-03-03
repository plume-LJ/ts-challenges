type Mutable<T extends Record<PropertyKey, any>> = {
  -readonly [K in keyof T]: T[K] extends Record<PropertyKey, any>
    ? Mutable<T[K]>
    : T[K];
};
type Readonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<PropertyKey, any>
    ? Readonly<T[P]>
    : T[P];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

type c = Readonly<Todo1>;

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>
];

type errors = [
  // @ts-expect-error
  Mutable<"string">,
  // @ts-expect-error
  Mutable<0>
];
