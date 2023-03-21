type Required<T> = { [P in keyof T]-?: T[P]; }

type GetRequired<T extends {}> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}

type GetOptional<T extends {}> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}

type RequiredKeys<T extends {}> = keyof GetRequired<T>

type OptionalKeys<T extends {}> = keyof GetOptional<T>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
]

type cases1 = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
]

type c = RequiredKeys<{}>

type cases2 = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>,
]

type cases3 = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>, 'b' | 'c' | 'd'>>,
  Expect<Equal<OptionalKeys<{}>, never>>,
]