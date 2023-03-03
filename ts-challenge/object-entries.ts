// type ObjectEntries<T> = {
//   [K in keyof T]: [
//     K,
//     T[K] extends undefined ? T[K] : Required<T>[K]
//   ];
// }[keyof T];
type ObjectEntries<T, U extends keyof T = keyof T> = U extends U
  ? [U, T[U] extends undefined ? T[U] : Required<T>[U]]
  : never;

// type NoUndefined<T> = T extends undefined ? never : T;
// type ObjectEntries<T, U extends keyof T = keyof T> = U extends U ? [U, T[U] extends undefined ? T[U] : NoUndefined<T[U]>] : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type ss<T> = {[K in keyof T]: [K]}

type c = ss<{ key?: undefined }>

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: null }>, ["key", null]>>,
  Expect<Equal<ObjectEntries<{ key: never }>, ["key", never]>>
];
