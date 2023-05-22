type ComputedValues<C> = {
  [key in keyof C]: C[key] extends (...args: unknown[]) => infer R ? R : never
}

type ClassToType<C> = 
  C extends () => infer T // String/Number/Boolean
    ? T
    : C extends unknown[] 
      ? ClassToType<C[number]>
      : C extends new (...args: any) => any // user defined constructors 
        ? InstanceType<C>
        : never

type ComputedProps<P> = {
  [key in keyof P]: P[key] extends { type: infer T }
    ? ClassToType<T>
    : {} extends P[key]
      ? any
      : ClassToType<P[key]>
}
let c =   {
  propA: {},
  propB: { type: String },
  propC: { type: Boolean },
  // propD: { type: ClassA },
  propE: { type: [String, Number] },
  propF: RegExp,
}
type cc = typeof c

type ccc = RegExpConstructor extends () => infer T ? T : ''

declare function VueBasicProps<P, D, C, M>(options: {
  props: P,
  data: (this: ComputedProps<P>) => D,
  computed: C & ThisType<D & ComputedProps<P>>,
  methods: M & ThisType<D & M & ComputedValues<C> & ComputedProps<P>>
}): any

import type { Debug, Equal, Expect, IsAny } from "@type-challenges/utils";

class ClassA {}

VueBasicProps({
  props: {
    propA: {},
    propB: { type: String },
    propC: { type: Boolean },
    propD: { type: ClassA },
    propE: { type: [String, Number] },
    propF: RegExp,
  },
  data() {
    type c = typeof this
    type PropsType = Debug<typeof this>;
    type cases = [
      Expect<IsAny<PropsType["propA"]>>,
      Expect<Equal<PropsType["propB"], string>>,
      Expect<Equal<PropsType["propC"], boolean>>,
      Expect<Equal<PropsType["propD"], ClassA>>,
      Expect<Equal<PropsType["propE"], string | number>>,
      Expect<Equal<PropsType["propF"], RegExp>>
    ];

    // @ts-expect-error
    this.firstname;
    // @ts-expect-error
    this.getRandom();
    // @ts-expect-error
    this.data();

    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: 10,
    };
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
    hh() {
      return `${this.propF} ${this.lastname}`;
    }
  },
  methods: {
    getRandom() {
      return Math.random();
    },
    hi() {
      alert(this.fullname.toLowerCase());
      alert(this.getRandom());
    },
    test() {
      const fullname = this.fullname;
      const propE = this.propE;
      type cases = [
        Expect<Equal<typeof fullname, string>>,
        Expect<Equal<typeof propE, string | number>>
      ];
    },
  },
});
