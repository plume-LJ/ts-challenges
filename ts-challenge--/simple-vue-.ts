
declare function SimpleVue<
  D extends Record<string, unknown>,
  C extends Record<string, unknown>,
  M extends Record<string, unknown>
>(options: {
  data: (this: never) => D
  computed: { [K in keyof C]: (this: D, ...args: unknown[]) => C[K] }
  methods: {
    [K in keyof M]: (
      this: D & C & { [K in keyof M]: (...args: unknown[]) => M[K] }
    ) => M[K]
  }
}): any
// type Computed<T> = {
//   [key in keyof T]: T[key] extends (...args: any) => any
//     ? ReturnType<T[key]>
//     : T[key];
// };

// declare function SimpleVue<D, C, M>(
//   options: {
//     data: () => D;
//     computed?: C & ThisType<D>;
//     methods?: M & ThisType<D & Computed<C> & M>;
//   } & ThisType<null>
// ): any;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

SimpleVue({
  data() {
    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random() + 2
    },
    hi() {
      alert(this.amount)
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const t = this.getRandom()
      type c = Equal<typeof t,number>
      const fullname = this.fullname
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any
    },
  },
})