type RemoveIndexSignature<T> = {
  [k in keyof T as string extends k
    ? never
    : number extends k
    ? never
    : symbol extends k
    ? never
    : k]: T[k];
};

// only string literally can fit `${infer _}`, doesn't work on 0,1,2... or symbol
type RemoveIndexSignature1<T> = {
  [K in keyof T as K extends `${infer _}` ? K : never]: T[K];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  [key: string]: any;
  foo(): void;
};

type Bar = {
  [key: number]: any;
  bar(): void;
  0: string;
};

const foobar = Symbol("foobar");
type FooBar = {
  [key: symbol]: any;
  [foobar](): void;
};

type Baz = {
  bar(): void;
  baz: string;
};
const cc: unique symbol= Symbol(2) 
type Caz = {
  // [k: symbol]: string;
  // [k: string]: string
  [cc]:2
}

type c = RemoveIndexSignature<Caz>

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
];
