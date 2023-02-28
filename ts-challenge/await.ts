// type MyAwaited<T> = 
//   // T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
//     T extends object & { then(onfulfilled: infer F, ...args: infer _): any } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
//         F extends ((value: infer V, ...args: infer _) => any) ? // if the argument to `then` is callable, extracts the first argument
//           MyAwaited<V> : // recursively unwrap the value
//             never : // the argument to `then` was not callable
//     T; // non-object or non-thenable

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<Awaited<T>, number>>,
]



type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer R> ? (R extends PromiseLike<any> ? MyAwaited<R> : R) : never;

// @ts-expect-error
type error = MyAwaited<number>