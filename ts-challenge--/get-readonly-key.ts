type GetReadonlyKeys<T, K = keyof T> = K extends keyof T
  ? MyEqual<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? K
    : never
  : never;

type MyEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = 1&any
type cases = [
  Expect<Equal<"title", GetReadonlyKeys<Todo1>>>,
  Expect<Equal<"title" | "description", GetReadonlyKeys<Todo2>>>
];

interface Todo1 {
  readonly title: string;
  description: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  readonly description: string;
  completed?: boolean;
}
