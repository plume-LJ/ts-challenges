declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: Awaited<T[K]>;
}>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>
];

// interface PromiseLike<T> {
//   then(onfulfilled: (value: T) => any, onrejected: (reson: any) => any): any;
// }

// type Awaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
//   ? U extends PromiseLike<any>
//     ? Awaited<U>
//     : U
//   : T;

type Awaited<T> = T extends null | undefined
  ? T // special case for `null | undefined` when not in `--strictNullChecks` mode
  : T extends object & { then(onfulfilled: infer F, ...args: infer _): any } // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
  ? F extends (value: infer V, ...args: infer _) => any // if the argument to `then` is callable, extracts the first argument
    ? Awaited<V> // recursively unwrap the value
    : never // the argument to `then` was not callable
  : T; // non-object or non-thenable

  type c = Awaited<never>
// interface PromiseLike<T> {
//   /**
//    * Attaches callbacks for the resolution and/or rejection of the Promise.
//    * @param onfulfilled The callback to execute when the Promise is resolved.
//    * @param onrejected The callback to execute when the Promise is rejected.
//    * @returns A Promise for the completion of which ever callback is executed.
//    */
//   then<TResult1 = T, TResult2 = never>(
//     onfulfilled?:
//       | ((value: T) => TResult1 | PromiseLike<TResult1>)
//       | undefined
//       | null,
//     onrejected?:
//       | ((reason: any) => TResult2 | PromiseLike<TResult2>)
//       | undefined
//       | null
//   ): PromiseLike<TResult1 | TResult2>;
// }
