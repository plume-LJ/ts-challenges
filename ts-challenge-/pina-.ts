// type GettersReturnType<G> = {
//   readonly [K in keyof G]: G[K] extends (...args: never[]) => infer R ? R : never;
// }

// interface Store<S, G, A> {
// 	id: string
// 	state: () => S
// 	getters?: G & ThisType<Readonly<S> & GettersReturnType<G> & A>
// 	actions?: A & ThisType<S & GettersReturnType<G> & A>
// }

// declare function defineStore<S, G, A>(store: Store<S, G, A>): Readonly<S> & GettersReturnType<G> & A

// declare function defineStore<S, G, A>(store: StoreOptioon<S, G, A>)
//     : A & S & GETTERS<G> & StoreOptioon<S, G, A>

// type GETTERS<G> = { [K in keyof G]: G[K] extends () => infer R ? R : never }

// type StoreOptioon<S, G, A> = {
//     id: string
//     state: () => S
//     getters?: G & ThisType<GETTERS<G> & Readonly<S>>
//     actions?: A & ThisType<S & A>
// }
// type GetRes<T> = T extends (...args: any[]) => infer R ? R : never
// declare function defineStore<State, Getters, Actions, _Getters = {
//   readonly [P in keyof Getters]: GetRes<Getters[P]>
// }>(store: {
//   id: string,
//   state: (this: void) => State,
//   getters?: Getters & ThisType<_Getters & Readonly<State>>
//   actions?: Actions & ThisType<State & _Getters & Actions>
// }): State & _Getters & Actions;
// your answers
type GETTERS<G> = { [K in keyof G]: G[K] extends () => infer R ? R : never }

declare function defineStore<S, G, A>(store: {
  id: string;
  state: () => S;
  getters: 
    ThisType<
      Readonly<S> & GETTERS<G>
    > &G;
  actions: A & ThisType<S & A>;
}): S & GETTERS<G> & A;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const store = defineStore({
  id: '',
  state: () => ({
    num: 0,
    str: '',
  }),
  getters: {
    stringifiedNum() {
      // @ts-expect-error
      this.num += 1

      return this.num.toString()
    },
    parsedNum() {
      return parseInt(this.stringifiedNum)
    },
  },
  actions: {
    init() {
      this.reset()
      this.increment()
    },
    increment(step = 1) {
      this.num += step
    },
    reset() {
      this.num = 0

      // @ts-expect-error
      this.parsedNum = 0

      return true
    },
    setNum(value: number) {
      this.num = value
    },
  },
})

// @ts-expect-error
store.nopeStateProp
// @ts-expect-error
store.nopeGetter
// @ts-expect-error
store.stringifiedNum()
store.init()
// @ts-expect-error
store.init(0)
store.increment()
store.increment(2)
// @ts-expect-error
store.setNum()
// @ts-expect-error
store.setNum('3')
store.setNum(3)
const r = store.reset()

type _tests = [
  Expect<Equal<typeof store.num, number>>,
  Expect<Equal<typeof store.str, string>>,
  // Expect<Equal<typeof store.stringifiedNum, string>>,
  Expect<Equal<typeof store.parsedNum, number>>,
  Expect<Equal<typeof r, true>>,
]