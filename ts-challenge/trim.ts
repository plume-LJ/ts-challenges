type WhiteSpace = " " | "\n" | "\t";

type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer U}`
  ? TrimLeft<U>
  : S;
// type Trim<S extends string> = S extends `${WhiteSpace}${infer U}`
//   ? Trim<U>
//   : S extends `${infer U}${WhiteSpace}`
//   ? Trim<U>
//   : S;
  
type TrimRight<S extends string> = S extends `${infer U}${WhiteSpace}`
  ? TrimRight<U>
  : S;

type Trim<S extends string> = TrimRight<TrimLeft<S>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];

type case1s = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];

type case2s = [
  Expect<Equal<TrimRight<"str">, "str">>,
  Expect<Equal<TrimRight<" str">, " str">>,
  Expect<Equal<TrimRight<"     str">, "     str">>,
  Expect<Equal<TrimRight<"str   ">, "str">>,
  Expect<Equal<TrimRight<"     str     ">, "     str">>,
  Expect<Equal<TrimRight<"   \n\t foo bar \t">, "   \n\t foo bar">>,
  Expect<Equal<TrimRight<"">, "">>,
  Expect<Equal<TrimRight<" \n\t ">, "">>
];
