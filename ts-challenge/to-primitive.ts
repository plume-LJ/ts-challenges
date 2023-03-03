// type ToPrimitive<T> = {
//   [P in keyof T]: [T[P]] extends [never]
//     ? never
//     : T[P] extends string
//     ? string
//     : T[P] extends number
//     ? number
//     : T[P] extends boolean
//     ? boolean
//     : ToPrimitive<T[P]>;
// };

type ToPrimitive<T> = T extends object
  ? {
      [Key in keyof T]: ToPrimitive<T[Key]>;
    }
  : T extends { valueOf: () => infer P }
  ? P
  : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type PersonInfo = {
  name: "Tom";
  age: 30;
  married: false;
  addr: {
    home: "123456";
    phone: "13111111111";
  };
  hobbies: ["sing", "dance"];
  aa: 1n;
  bb: symbol;
  cc: null;
  dd: undefined;
  ee: void;
  ff: never;
};

type ccc = BigInt64Array["valueOf"];

type cc = false extends { valueOf: () => infer P } ? P : never;

type c = ToPrimitive<PersonInfo>;

type ExpectedResult = {
  name: string;
  age: number;
  married: boolean;
  addr: {
    home: string;
    phone: string;
  };
  hobbies: [string, string];
  aa: bigint;
  bb: symbol;
  cc: null;
  dd: undefined;
  ee: void;
  ff: never;
};

type cases = [Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>];
