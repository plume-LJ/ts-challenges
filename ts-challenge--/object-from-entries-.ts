// type Flat<T> = T extends [infer K extends string, infer V] ? {
//   [Key in K] : V
// } : never
// type ObjectFromEntries<T> = UnionToIntersection<Flat<T>>

// type ObjectFromEntries<T extends [key: string, value: unknown]> = {
//   [K in T[0]]: Extract<T, [K, unknown]>[1]
// }
type ObjectFromEntries<T extends [string,any]> = {
  [K in T as K[0]]:K[1]
}
/* _____________ Test Cases _____________ */
import type { Equal, Expect, UnionToIntersection } from "@type-challenges/utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type c = ObjectFromEntries<ModelEntries>

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>];
