type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
}


// type DeepReadonly<T> = { readonly [key in keyof T]: T[key] extends Function | null ?
//   T[key] : T[key] extends object ? DeepReadonly<T[key]> : T[key] };


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type a = DeepReadonly<X1>
type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>,
]

type X1 = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  },
  d: null,
}

type X2 = { a: string } | { b: number }

type Expected1 = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  },
  readonly d: null
}

type Expected2 = { readonly a: string } | { readonly b: number }