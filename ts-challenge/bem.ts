// type BEM<
//   B extends string,
//   E extends string[],
//   M extends string[]
// > = `${B}${E extends [infer _, ...infer __]
//   ? `__${E[number]}`
//   : ""}${M extends [infer _, ...infer __] ? `--${M[number]}` : ""}`;

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${E extends [] ? "" : `__${E[number]}`}${M extends []
  ? ""
  : `--${M[number]}`}`;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cc = BEM<"btn", ["price"], []>;

type cases = [
  Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
  Expect<
    Equal<
      BEM<"btn", ["price"], ["warning", "success"]>,
      "btn__price--warning" | "btn__price--success"
    >
  >,
  Expect<
    Equal<
      BEM<"btn", [], ["small", "medium", "large"]>,
      "btn--small" | "btn--medium" | "btn--large"
    >
  >
];
