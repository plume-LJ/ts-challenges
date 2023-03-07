type MyOmit<T, K extends keyof T> = { [Key in keyof T as Key extends K ? never : Key]: T[Key] }
// type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, Omit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}