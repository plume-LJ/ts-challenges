// your answers
type Check<T extends string | number | bigint> = T extends number | bigint
  ? true
  : T extends `${infer L}${infer R}`
  ? L extends '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    ? Check<R>
    : false
  : true

type STA<T extends string, RR extends string[] = []> = T extends `${infer L}${infer R}`
  ? STA<R, [...RR, L]>
  : RR

type ATSHelper<T extends unknown[]> = T extends [infer L, ...infer R]
  ? L extends string
    ? `${L}${ATSHelper<R>}`
    : ''
  : ''

type ATS<T extends unknown[]> = T extends ['0', ...infer R]
  ? ATS<R>
  : T extends []
  ? '0'
  : ATSHelper<T>

type PlusOne<
  A extends string,
  B extends string,
  AA extends unknown[] = [],
  BA extends unknown[] = [],
> = `${AA['length']}` extends A
  ? `${BA['length']}` extends B
    ? `${[...AA, ...BA]['length'] & number}`
    : PlusOne<A, B, AA, [...BA, unknown]>
  : PlusOne<A, B, [...AA, unknown], BA>

type PlusHelper<A, B, F extends boolean = false> = PlusOne<
  A extends string ? A : '0',
  PlusOne<B extends string ? B : '0', F extends true ? '1' : '0'>
> extends `${infer _1}${infer _2}`
  ? _2 extends ''
    ? [false, _1]
    : [true, _2]
  : [false, '0']

type Plus<
  A extends unknown[] = [],
  B extends unknown[] = [],
  R extends string[] = [],
  F extends boolean = false,
> = A extends [...infer LA, infer RA]
  ? B extends [...infer LB, infer RB]
    ? Plus<LA, LB, [PlusHelper<RA, RB, F>[1], ...R], PlusHelper<RA, RB, F>[0]>
    : F extends true
    ? Plus<LA, [], [PlusHelper<RA, '1', false>[1], ...R], PlusHelper<RA, '1', false>[0]>
    : [...A, ...R]
  : B extends [...infer LB, infer RB]
  ? F extends true
    ? Plus<[], LB, [PlusHelper<'1', RB, false>[1], ...R], PlusHelper<'1', RB, false>[0]>
    : [...B, ...R]
  : F extends true
  ? ['1', ...R]
  : R

type HelperOne<
  A extends string[],
  B extends string,
  H extends unknown[] = [],
  R extends string[] = ['0'],
> = `${H['length']}` extends B ? R : HelperOne<A, B, [...H, unknown], Plus<A, R>>

type Helper<
  A extends string[],
  B extends string,
  RR extends string[] = [],
> = B extends `${infer L}${infer R}` ? Helper<A, R, Plus<[...RR, '0'], HelperOne<A, L>>> : RR

type Multiply<
  A extends string | number | bigint,
  B extends string | number | bigint,
> = Check<A> extends true
  ? Check<B> extends true
    ? ATS<Helper<STA<`${A}`>, `${B}`>>
    : never
  : never

  /* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Multiply<2, 3>, '6'>>,
  Expect<Equal<Multiply<3, '5'>, '15'>>,
  Expect<Equal<Multiply<'4', 10>, '40'>>,
  Expect<Equal<Multiply<0, 16>, '0'>>,
  Expect<Equal<Multiply<'13', '21'>, '273'>>,
  Expect<Equal<Multiply<'43423', 321543n>, '13962361689'>>,
  Expect<Equal<Multiply<9999, 1>, '9999'>>,
  Expect<Equal<Multiply<4325234, '39532'>, '170985150488'>>,
  Expect<Equal<Multiply<100_000n, '1'>, '100000'>>,
  Expect<Equal<Multiply<259, 9125385>, '2363474715'>>,
  Expect<Equal<Multiply<9, 99>, '891'>>,
  Expect<Equal<Multiply<315, '100'>, '31500'>>,
  Expect<Equal<Multiply<11n, 13n>, '143'>>,
  Expect<Equal<Multiply<728, 0>, '0'>>,
  Expect<Equal<Multiply<'0', 213>, '0'>>,
  Expect<Equal<Multiply<0, '0'>, '0'>>,
]