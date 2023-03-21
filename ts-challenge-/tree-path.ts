type Path<T extends object, K extends keyof T = keyof T> = K extends keyof T
  ? [K] | [K, ...(T[K] extends object ? Path<T[K]> : [])]
  : never;

/* _____________ Test Cases _____________ */
import type {
  ExpectExtends,
  ExpectFalse,
  ExpectTrue,
} from "@type-challenges/utils";

declare const example: {
  foo: {
    bar: {
      a: string;
    };
    baz: {
      b: number;
      c: number;
    };
  };
};

type cases = [
  ExpectTrue<ExpectExtends<Path<typeof example["foo"]["bar"]>, ["a"]>>,
  ExpectTrue<ExpectExtends<Path<typeof example["foo"]["baz"]>, ["b"] | ["c"]>>,
  ExpectTrue<
    ExpectExtends<
      Path<typeof example["foo"]>,
      ["bar"] | ["baz"] | ["bar", "a"] | ["baz", "b"] | ["baz", "c"]
    >
  >,
  ExpectFalse<ExpectExtends<Path<typeof example["foo"]["bar"]>, ["z"]>>
];
