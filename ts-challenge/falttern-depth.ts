type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

type Pop<T extends any[]> = T extends [...infer head, any] ? head : never;

type MinusOne<T extends number, A extends any[] = []> = A["length"] extends T
  ? Pop<A>["length"]
  : MinusOne<T, [...A, 0]>;

type Flatten<T extends any[]> = T extends [infer F, ...infer Rest]
  ? F extends any[]
    ? [...F, ...Flatten<Rest>]
    : [F, ...Flatten<Rest>]
  : [];

type FlattenLength<T extends any[]> = T extends [infer first, infer rest] ? 0 : 0

type FlattenDepth<T extends unknown[], Dep extends number = 1> = Dep extends 0
  ? T
   : FlattenDepth<Flatten<T>, MinusOne<Dep>>;

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
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
