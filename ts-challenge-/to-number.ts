type ToNumber<S extends string> = S extends `${infer F extends number}`
  ? F
  : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = ToNumber<'-2.2'>

type cases = [
  Expect<Equal<ToNumber<"0">, 0>>,
  Expect<Equal<ToNumber<"5">, 5>>,
  Expect<Equal<ToNumber<"12">, 12>>,
  Expect<Equal<ToNumber<"27">, 27>>,
  Expect<Equal<ToNumber<"18@7_$%">, never>>
];
