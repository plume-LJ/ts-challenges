type ComputedToData<Computed> = {
  [Key in keyof Computed]: Computed[Key] extends (...args: any[]) => infer R
    ? R
    : Computed[Key];
};

type CtorToData<Ctor> = Ctor extends typeof String
  ? string
  : Ctor extends typeof Number
  ? number
  : Ctor extends typeof Boolean
  ? boolean
  : Ctor extends new (...args: any[]) => unknown
  ? InstanceType<Ctor>
  : any;

// type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

type RawTypeToData<RawType> = RawType extends (infer Ctor)[]
  ? CtorToData<Ctor>
  : CtorToData<RawType>;

type TypeToData<Type> = Type extends { type: infer RawType }
  ? RawTypeToData<RawType>
  : RawTypeToData<Type>;

type PropsToData<Props> = {
  [Key in keyof Props]: TypeToData<Props[Key]>;
};

type cc = {} extends {type: infer a} ? true: false

declare function VueBasicProps1<
  Data,
  Computed,
  Methods,
  Props,
  This = Data & ComputedToData<Computed> & Methods & PropsToData<Props>
>(options: {
  data: (this: PropsToData<Props>) => Data;
  computed: Computed & ThisType<This>;
  methods: Methods & ThisType<This>;
  props: Props;
}): unknown;
declare function VueBasicProps<
  D extends Record<string, unknown>,
  C extends Record<string, unknown>,
  M extends Record<string, unknown>,
  Props extends Record<string, unknown>
>(options: {
  props: Props;
  data: (this: PropsToData<Props>) => D;
  computed: { [K in keyof C]: (this: D & PropsToData<Props>, ...args: unknown[]) => C[K] };
  methods: {
    [K in keyof M]: (
      this: D &
        C &
        PropsToData<Props> & { [K in keyof M]: (...args: unknown[]) => M[K] }
    ) => M[K];
  };
}): any;
/* _____________ Test Cases _____________ */
import type { Debug, Equal, Expect, IsAny } from "@type-challenges/utils";

class ClassA {}

type c = InstanceType<typeof RegExp>
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
