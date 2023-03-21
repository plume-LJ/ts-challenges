type UnionReplace<T, U extends [any, any][]> = U extends [
  infer F extends [any, any],
  ...infer R extends [any, any][]
]
  ? UnionReplace<Exclude<T, F[0]> | F[1], R>
  : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
import { ExpectFalse, NotEqual } from "@type-challenges/utils";

type cases = [
  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null]]>, number | null>>,

  // Date -> string; Function -> undefined
  Expect<
    Equal<
      UnionReplace<
        Function | Date | object,
        [[Date, string], [Function, undefined]]
      >,
      undefined | string | object
    >
  >
];
