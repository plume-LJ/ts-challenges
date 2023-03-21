
type CurryingFn<F extends Function> = F extends (first: infer First, ...remaining: infer Rest) => infer Ret
  ? Rest extends []
  ? F
  : (first: First) => CurryingFn<(...args: Rest) => Ret>
  : never

declare function Currying<F extends Function>(fn: F): CurryingFn<F>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const curried1 = Currying((_a: string, _b: number, _c: boolean) => true)
const curried2 = Currying((_a: string, _b: number, _c: boolean, _d: boolean, _e: boolean, _f: string, _g: boolean) => true)
const curried3 = Currying(() => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
  Expect<Equal<typeof curried3, () => true>>,
]