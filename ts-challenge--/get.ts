// type Get<T, K extends string> = K extends keyof T
//   ? T[K]
//   : K extends `${infer F}.${infer Rest}`
//   ? F extends keyof T
//     ? Get<T[F], Rest>
//     : never
//   : never;

// type Get<T, K> = K extends keyof T
//   ? T[K & keyof T]
//   : K extends `${infer FK}.${infer LK}`
//   ? Get<T[FK & keyof T], LK>
//   : T[K & keyof T];
export type Get<T, K> = K extends keyof T
  ? T[K]
  : K extends `${infer FK}.${infer LK}`
  ? Get<T[FK & keyof T], LK>
  : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Get<Data, "hello">, "world">>,
  Expect<Equal<Get<Data, "foo.bar.count">, 6>>,
  Expect<Equal<Get<Data, "foo.bar">, { value: "foobar"; count: 6 }>>,
  Expect<Equal<Get<Data, "foo.baz">, { c: false }>>,

  Expect<Equal<Get<Data, "no.existed">, never>>
];

type d = Data["cc" & keyof Data];

type Data = {
  foo: {
    bar: {
      value: "foobar";
      count: 6;
    };
    included: true;
  };
  "foo.baz": { c: false };
  hello: "world";
};
