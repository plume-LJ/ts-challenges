type Count<T, A extends 1[] = []> = A["length"] extends T
  ? A
  : Count<T, [...A, 1]>;

type Plus<A, B> = [
  ...Count<A>,
  ...Count<B>
]["length"];

type L<T extends any[]> = T['length']


type Fibonacci<
  T extends number,
  Ac = 1,
  Acc = 1
> = T extends 1 | 2
  ? Acc
  : Fibonacci<MinusOne<T>, Acc, Plus<Ac, Acc>>

// type Fibonacci<
//   T extends number,
//   C extends 1[] = [],
//   N1 extends 1[] = [],
//   N2 extends 1[] = [1]
// > = T extends C["length"]
//   ? N1["length"]
//   : Fibonacci<T, [...C, 1], N2, [...N1, ...N2]>;
// type cc = Fibonacci<19>;


type c = Count<2>;
type cc = Fibonacci<17>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
import { MinusOne, PlusOne } from "./minusone--";

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>
];
