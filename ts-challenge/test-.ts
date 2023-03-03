type Pop<T extends any[]> = T extends [...infer head, any] ? head : never;

type MinusOne1<T extends number, A extends any[] = []> = A["length"] extends T
  ? Pop<A>["length"]
  : MinusOne1<T, [...A, 0]>;

type ss = MinusOne1<9>;

type GenArra<
  L extends string,
  T extends any[] = []
> = `${T["length"]}` extends L ? T : GenArra<L, [any, ...T]>;

type c = GenArra<"3">;
type d = Length<c>;

type Letters = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type GenLength<
  L extends string,
  T extends any[] = []
> = L extends `${infer first}${infer rest}`
  ? first extends Letters
    ? GenLength<
        rest,
        [
          ...T,
          ...T,
          ...T,
          ...T,
          ...T,
          ...T,
          ...T,
          ...T,
          ...T,
          ...T,
          ...GenArra<first>
        ]
      >
    : never
  : T;

type LengthMinusOne<T extends any[] = []> = T extends [
  infer _first,
  ...infer rest
]
  ? rest
  : T;
type Length<T extends any[]> = T["length"];

type a = GenLength<"1">;

type MinusOne<L extends number> = Length<LengthMinusOne<GenLength<`${L}`>>>;

type FlattenDepth<T extends any[], depth extends number = 1> = depth extends 0
  ? T
  : Length<T> extends 0
  ? T
  : T extends [infer first, ...infer rest]
  ? first extends any[]
    ? [...FlattenDepth<first, MinusOne<depth>>, ...FlattenDepth<rest, depth>]
    : [first, ...FlattenDepth<rest, depth>]
  : T;

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 9999>, [1, 2, 3, 4, 5]>>
];
[1, 2, 3, 4, 5];

type TupleToNestedObject<T, U> = T extends [infer first extends PropertyKey,...infer rest] ? {
  [k in first]:  TupleToNestedObject<rest,U>
}:U

type cc = [] extends [infer first extends PropertyKey,...infer rest] ?rest:false

type case1s = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]