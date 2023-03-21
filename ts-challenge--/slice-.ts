type Slice<Arr extends unknown[], Start = 0, End = Arr["length"]> = [
  FindIndex<Start, Arr>,
  FindIndex<End, Arr>
] extends [infer S extends number, infer E extends number]
  ? SliceFromStart<S, SliceFromEnd<E, Arr>>
  : Arr;

type FindIndex<Idx, Arr extends unknown[]> = `${Idx &
  number}` extends `-${string}`
  ? FindNegativeIndex<Idx, Arr>
  : FindPositiveIndex<Idx, Arr>;

type FindPositiveIndex<
  Idx,
  Arr extends unknown[],
  Count extends 1[] = []
> = 1 extends (Arr extends [] ? 1 : 0) | (Idx extends Count["length"] ? 1 : 0)
  ? Count["length"]
  : FindPositiveIndex<
      Idx,
      Arr extends [...infer Rest, unknown] ? Rest : [],
      [...Count, 1]
    >;

    type c = FindNegativeIndex<-2,[1,2,3,4,5]>

type FindNegativeIndex<
  Idx,
  Arr extends unknown[],
  Count extends 1[] = []
> = 1 extends
  | (Arr extends [] ? 1 : 0)
  | (`${Idx & number}` extends `-${Count["length"]}` ? 1 : 0)
  ? Arr["length"]
  : FindNegativeIndex<
      Idx,
      Arr extends [...infer Rest, unknown] ? Rest : [],
      [...Count, 1]
    >;

type SliceFromEnd<End, Arr extends unknown[]> = Arr["length"] extends End
  ? Arr
  : SliceFromEnd<End, Arr extends [...infer Rest, unknown] ? Rest : []>;

type SliceFromStart<
  Start,
  Arr extends unknown[],
  Count extends 1[] = []
> = Count["length"] extends Start
  ? Arr
  : SliceFromStart<
      Start,
      Arr extends [unknown, ...infer Rest] ? Rest : [],
      [...Count, 1]
    >;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Arr = [1, 2, 3, 4, 5];
type d = Slice<Arr, -4, -2>;
type cases = [
  // basic
  Expect<Equal<Slice<Arr, 0, 1>, [1]>>,
  Expect<Equal<Slice<Arr, 0, 0>, []>>,
  Expect<Equal<Slice<Arr, 2, 4>, [3, 4]>>,

  // optional args
  Expect<Equal<Slice<[]>, []>>,
  Expect<Equal<Slice<Arr>, Arr>>,
  Expect<Equal<Slice<Arr, 0>, Arr>>,
  Expect<Equal<Slice<Arr, 2>, [3, 4, 5]>>,

  // negative index
  Expect<Equal<Slice<Arr, 0, -1>, [1, 2, 3, 4]>>,
  Expect<Equal<Slice<Arr, -3, -1>, [3, 4]>>,

  // invalid
  Expect<Equal<Slice<Arr, 10>, []>>,
  Expect<Equal<Slice<Arr, 1, 0>, []>>,
  Expect<Equal<Slice<Arr, 10, 20>, []>>
];
