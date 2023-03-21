type ControlsMap = {
  s: string;
  d: number;
};
type Format<T extends string> = T extends `${string}%${infer F}${infer Rest}`
  ? F extends keyof ControlsMap
    ? (f: ControlsMap[F]) => Format<Rest>
    : Format<Rest>
  : string;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Format<"abc">, string>>,
  Expect<Equal<Format<"a%sbc">, (s1: string) => string>>,
  Expect<Equal<Format<"a%dbc">, (d1: number) => string>>,
  Expect<Equal<Format<"a%%dbc">, string>>,
  Expect<Equal<Format<"a%%%dbc">, (d1: number) => string>>,
  Expect<Equal<Format<"a%dbc%s">, (d1: number) => (s1: string) => string>>
];
