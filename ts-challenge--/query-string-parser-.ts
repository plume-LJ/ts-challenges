// type ParseQueryString<
//   S extends string,
//   R extends object = {}
// > = S extends `${infer F}&${infer tail}`
//   ? F extends `${infer K}=${infer V}`
//     ? ParseQueryString<tail, merge<R, { [k in K]: V }>>
//     : ParseQueryString<tail, merge<R, { [k in F]: true }>>
//   : S extends `${infer K}=${infer V}`
//   ? merge<R, { [k in K]: V }>
//   : S extends ""
//   ? R
//   : merge<R, { [k in S]: true }>;

// type merge<T, R> = {
//   [k in keyof R | keyof T]: k extends keyof T
//     ? k extends keyof R
//       ? Unique<T[k] extends any[] ? T[k] : [T[k]], R[k]>
//       : T[k]
//     : k extends keyof R
//     ? R[k]
//     : never;
// };
// type Unique<T extends any[], K> = K extends T[number]
//   ? T["length"] extends 1
//     ? T[0]
//     : T
//   : [...T, K];

type ParseQueryString<S extends string> = // parse Key, Value, Rest
  (
    S extends `${infer Key}=${infer Value}&${infer Rest}`
      ? [Key, Value, ParseQueryString<Rest>]
      : S extends `${infer Key}&${infer Rest}`
      ? [Key, true, ParseQueryString<Rest>]
      : S extends `${infer Key}=${infer Value}`
      ? [Key, Value, {}]
      : S extends ""
      ? [never, true, {}]
      : [S, true, {}]
  ) extends [infer Key extends keyof any, infer Value, infer Rest]
    ? {
        // Keys
        [P in Key | keyof Rest]: P extends keyof Rest // Values
          ? 1 extends
              | (P extends Key ? 0 : 1)
              | (Value extends Rest[P & keyof Rest] ? 1 : 0)
            ? Rest[P & keyof Rest]
            : Rest[P & keyof Rest] extends unknown[]
            ? merge<Value, Rest[P & keyof Rest]>
            : [Value, Rest[P & keyof Rest]]
          : Value;
      }
    : never;
type merge<T, U extends any[], Pre extends any[] = []> = U extends [
  infer F,
  ...infer R
]
  ? F extends T
    ? [T, ...Pre, ...R]
    : merge<T, R, [...Pre, F]>
  : [T, ...Pre];
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
type c = ParseQueryString<"k1=v1&k1=v2&k1=v1">;
type cc = merge<1, [2, 1, 3]>;
type cases = [
  Expect<Equal<ParseQueryString<"">, {}>>,
  Expect<Equal<ParseQueryString<"k1">, { k1: true }>>,
  Expect<Equal<ParseQueryString<"k1&k1">, { k1: true }>>,
  Expect<Equal<ParseQueryString<"k1&k2">, { k1: true; k2: true }>>,
  Expect<Equal<ParseQueryString<"k1=v1">, { k1: "v1" }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k1=v2">, { k1: ["v1", "v2"] }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k2=v2">, { k1: "v1"; k2: "v2" }>>,
  Expect<
    Equal<ParseQueryString<"k1=v1&k2=v2&k1=v2">, { k1: ["v1", "v2"]; k2: "v2" }>
  >,
  Expect<Equal<ParseQueryString<"k1=v1&k2">, { k1: "v1"; k2: true }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k1=v1">, { k1: "v1" }>>,
  Expect<Equal<ParseQueryString<"k1=v1&k1=v2&k1=v1">, { k1: ["v1", "v2"] }>>,
  Expect<
    Equal<
      ParseQueryString<"k1=v1&k2=v1&k1=v2&k1=v1">,
      { k1: ["v1", "v2"]; k2: "v1" }
    >
  >,
  Expect<
    Equal<
      ParseQueryString<"k1=v1&k2=v2&k1=v2&k1=v3">,
      { k1: ["v1", "v2", "v3"]; k2: "v2" }
    >
  >,
  Expect<Equal<ParseQueryString<"k1=v1&k1">, { k1: ["v1", true] }>>,
  Expect<Equal<ParseQueryString<"k1&k1=v1">, { k1: [true, "v1"] }>>
];
