type CamelizeArray<T> = T extends [infer F, ...infer Rest]
  ? [Camelize<F>, ...CamelizeArray<Rest>]
  : [];
type CamelCase<S extends string> = S extends `${infer F}_${infer M}${infer E}`
  ? `${Lowercase<F>}${Uppercase<M>}${CamelCase<E>}`
  : Lowercase<S>;

type Camelize<T> = {
  [K in keyof T as K extends string ? CamelCase<K> : never]: T[K] extends any[]
    ? CamelizeArray<T[K]>
    : T[K] extends {}
    ? Camelize<T[K]>
    : T[K];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
// import { CamelCase } from "./camel-case";

type c = Camelize<{
  prop: { another_prop: string };
}>;

type cases = [
  Expect<
    Equal<
      Camelize<{
        some_prop: string;
        prop: { another_prop: string };
        array: [
          { snake_case: string },
          { another_element: { yet_another_prop: string } },
          { yet_another_element: string }
        ];
      }>,
      {
        someProp: string;
        prop: { anotherProp: string };
        array: [
          { snakeCase: string },
          { anotherElement: { yetAnotherProp: string } },
          { yetAnotherElement: string }
        ];
      }
    >
  >
];
