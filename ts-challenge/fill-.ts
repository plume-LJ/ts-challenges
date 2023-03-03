type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  A extends any[] = []
> = T extends [infer F, ...infer R]
  ? A["length"] extends Start
    ? Start extends End
      ? [...A, ...T]
      : Fill<R, N, [...A, N]["length"] & number, End, [...A, N]>
    : Fill<R, N, Start, End, [...A, F]>
  : A;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = Fill<[1, 2, 3], 0, 0, 0>;
type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>
];
