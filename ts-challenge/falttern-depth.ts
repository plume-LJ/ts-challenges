// type FlattenOnce<T extends any[]> = T extends [infer F, ...infer R]
//   ? [...(F extends [...infer K] ? K : [F]), ...FlattenOnce<R>]
//   : T;
// type FlattenDepth<
//   T,
//   Times extends number = 1,
//   P extends any[] = []
// > = T extends any[]
//   ? P extends { length: Times }
//     ? T
//     : T extends FlattenOnce<T>
//     ? T
//     : FlattenDepth<FlattenOnce<T>, Times, [...P, any]>
//   : never;
//   type FlattenArray<X extends any, D = 1, C extends any[] = [0]> =
//   X extends any []
//     ? D extends C['length']
//       ? X
//       : X extends [infer F, ...infer R]
//         ? [...FlattenArray<F, D, [...C, 0]>, ...FlattenArray<R, D, C>]
//         : X
//     : [X];

// type FlattenDepth<X extends any[], D = 1> = X extends [infer F, ...infer R]
//   ? [...FlattenArray<F, D>, ...FlattenDepth<R, D>]
//   : X;
type FlattenDepth<
  T,
  P extends number = 1,
  A extends any[] = []
> = A["length"] extends P
  ? T
  : T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...FlattenDepth<F, P, [0, ...A]>, ...FlattenDepth<R, P, A>]
    : [F, ...FlattenDepth<R, P, A>]
  : T;

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
