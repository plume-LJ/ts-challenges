type Flatten<T extends any[]> = T extends [infer first, ...infer rest]
  ? first extends any[]
    ? [...Flatten<first>, ...Flatten<rest>]
    : [first, ...Flatten<rest>]
  : [];

type FlattenDepth<
  T,
  L extends number = 1
> = L extends 0
  ? T
  : T extends [infer first, ...infer rest]
  ? first extends any[]
    ? [...FlattenDepth<first, MinusOne<L>>, ...FlattenDepth<rest, L>]
    : [first, ...FlattenDepth<rest, L>]
  : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
import { MinusOne } from "./minusone--";

type a = Flatten<[1, 2, 3, 4]>
type aa = [] extends [infer _a, ...infer rest] ? rest: false

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

type case1s = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<
    Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>
  >
];
