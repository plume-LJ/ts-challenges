type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T,K> & {
  readonly [P in K]: T[P]
}

// type MyReadonly2<T, K extends keyof T = keyof T> = { readonly [P in K]: T[P] } & {
//   [P in keyof T as P extends K ? never : P]: T[P];
// };

// type MyReadonly2<T, K extends keyof T = keyof T> = {readonly [P in K]: T[P]} & {[P2 in Exclude<keyof T, K>]: T[P2]};


/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '@type-challenges/utils'

type c = MyReadonly2<Todo2, 'description' >

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'description' >, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
