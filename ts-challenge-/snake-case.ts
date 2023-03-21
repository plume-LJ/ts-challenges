// type SnakeCase<
//   T extends string,
//   flag extends boolean = true
// > = Capitalize<T> extends T
//   ? flag extends true
//     ? SnakeCase<Uncapitalize<T>, false>
//     : T extends ""
//     ? ""
//     : `_${SnakeCase<Uncapitalize<T>, false>}`
//   : T extends `${infer F}${infer tail}`
//   ? `${F}${SnakeCase<tail, false>}`
//   : "";
type SnakeCase<
  T extends string,
  C extends string = T
> = T extends `${infer F}${infer Rest}`
  ? `${C extends T
      ? ""
      : Uppercase<F> extends F
      ? `_`
      : ""}${Lowercase<F>}${SnakeCase<Rest, C>}`
  : "";

// type SnakeCase<
//   T extends string,
//   R extends string = ""
// > = T extends `${infer First}${infer Rest}`
//   ? SnakeCase<
//       Rest,
//       `${R}${First extends Uppercase<First> ? `_${Lowercase<First>}` : First}`
//     >
//   : R extends `_${infer Rest}`
//   ? Rest
//   : R; // to make sure Hello > hello

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
import { ExpectFalse, NotEqual } from "@type-challenges/utils";

type c = SnakeCase<"userName">;
type cases = [
  Expect<Equal<SnakeCase<"hello">, "hello">>,
  Expect<Equal<SnakeCase<"userName">, "user_name">>,
  Expect<Equal<SnakeCase<"getElementById">, "get_element_by_id">>,
  Expect<
    Equal<
      SnakeCase<"getElementById" | "getElementByClassNames">,
      "get_element_by_id" | "get_element_by_class_names"
    >
  >
];
