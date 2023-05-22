type AnyOf<T extends readonly any[]> = T[number] extends
  | 0
  | ""
  | false
  | []
  | null
  | undefined
  | Record<PropertyKey, never>
  ? false
  : true;
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<
    Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
  Expect<
    Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[0, "", false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
];

type c = { a: 2 } extends Record<PropertyKey, never> ? false : true;

type EEqual<A, B> = (<U>() => U extends A ? 1 : 2) extends <U>() => U extends B
  ? 1
  : 2
  ? true
  : false;
