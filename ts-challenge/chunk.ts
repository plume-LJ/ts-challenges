type Chunk<
  T extends any[],
  L extends number,
  C extends any[] = [],
  RE extends any[] = []
> = T extends [infer F, ...infer R]
  ? R extends []
    ? [...RE, [...C, F]]
    : [...C, F]["length"] extends L
    ? Chunk<R, L, [], [...RE, [...C, F]]>
    : Chunk<R, L, [...C, F], RE>
  : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = Chunk<[1, 2, 3], 2>;
type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4, 2, 4], 5>, [[1, 2, 3, 4, 2], [4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
];

type cc = [] extends [] ? true : false;
