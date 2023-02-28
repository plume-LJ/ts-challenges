type Flatten<T extends any[]> = T extends [infer first, ...infer rest]
  ? first extends any[]
    ? [...Flatten<first>, ...Flatten<rest>]
    : [first, ...Flatten<rest>]
  : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type a = Flatten<[1, 2, 3, 4]>;

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: "bar"; 2: 10 }, "foobar"]>,
      [{ foo: "bar"; 2: 10 }, "foobar"]
    >
  >
];
