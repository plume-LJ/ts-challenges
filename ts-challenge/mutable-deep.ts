// type DeepMutable<T extends Record<PropertyKey, any>> = {
//   -readonly [K in keyof T]: T[K] extends Record<PropertyKey, any>
//     ? T[K] extends () => any
//       ? T[K]
//       : DeepMutable<T[K]>
//     : T[K];
// };

// type DeepMutable<T extends object> = {
//   -readonly [P in keyof T]: T[P] extends (...args: unknown[]) => unknown
//     ? T[P]
//     : T[P] extends object
//     ? DeepMutable<T[P]>
//     : T[P];
// };

// type DeepMutable<T extends object> = T extends (...args: any[]) => any
//   ? T
//   : {
//       -readonly [K in keyof T]: T[K] extends object ? DeepMutable<T[K]> : T[K];
//     };

type DeepMutable<T extends object> = {
  -readonly [K in keyof T]: T[K] extends object
    ? T[K] extends Function
      ? T[K]
      : DeepMutable<T[K]>
    : T[K];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

interface Test1 {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
  readonly meta: {
    readonly author: string;
  };
}
type Test2 = {
  readonly a: () => 1;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "s";
        };
        readonly k: "hello";
      };
      readonly l: readonly [
        "hi",
        {
          readonly m: readonly ["hey"];
        }
      ];
    };
  };
};
interface DeepMutableTest1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type DeepMutableTest2 = {
  a: () => 1;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "s";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};

type c = DeepMutable<Test1>;

type cases = [
  Expect<Equal<DeepMutable<Test1>, DeepMutableTest1>>,
  Expect<Equal<DeepMutable<Test2>, DeepMutableTest2>>
];

type errors = [
  // @ts-expect-error
  DeepMutable<"string">,
  // @ts-expect-error
  DeepMutable<0>
];
