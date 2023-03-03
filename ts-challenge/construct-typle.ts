type ConstructTuple<
  L extends number,
  A extends unknown[] = []
> = A["length"] extends L ? A : ConstructTuple<L, [...A, unknown]>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

// type c = ConstructTuple<1000>

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>["length"], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>["length"], 1000>>
];
