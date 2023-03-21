declare const KEY: unique symbol;
// type DeepObjectToUniq<T extends object> = {
//   [K in keyof T]: T[K] extends object
//     ? DeepObjectToUniq<T[K]> & { readonly [KEY]?: [T, K] }
//     : T[K];
// } & { readonly [KEY]?: [T] };
type DeepObjectToUniq<
  O extends object,
  Parent = O,
  Path extends readonly PropertyKey[] = []
> = {
  [K in keyof O]: O[K] extends object
    ? DeepObjectToUniq<O[K], O, [...Path, K]>
    : O[K];
} & {
  readonly [KEY]?: readonly [Parent, Path];
};
/* _____________ Test Cases _____________ */
import type { Equal, IsFalse, IsTrue } from "@type-challenges/utils";

type Quz = { quz: 4 };

type Foo = { foo: 2; baz: Quz; bar: Quz };
type Bar = { foo: 2; baz: Quz; bar: Quz & { quzz?: 0 } };

type UniqQuz = DeepObjectToUniq<Quz>;
type UniqFoo = DeepObjectToUniq<Foo>;
type UniqBar = DeepObjectToUniq<Bar>;

declare let foo: Foo;
declare let uniqFoo: UniqFoo;

uniqFoo = foo;
foo = uniqFoo;

type c = UniqFoo["baz"];
type cc = UniqBar["baz"];

type cases = [
  IsFalse<Equal<UniqQuz, Quz>>,
  IsFalse<Equal<UniqFoo, Foo>>,
  IsTrue<Equal<UniqFoo["foo"], Foo["foo"]>>,
  IsTrue<Equal<UniqFoo["bar"]["quz"], Foo["bar"]["quz"]>>,
  IsFalse<Equal<UniqQuz, UniqFoo["baz"]>>,
  IsFalse<Equal<UniqFoo["bar"], UniqFoo["baz"]>>,
  IsFalse<Equal<UniqBar["baz"], UniqFoo["baz"]>>,
  IsTrue<Equal<keyof UniqBar["baz"], keyof UniqFoo["baz"]>>,
  IsTrue<Equal<keyof Foo, keyof UniqFoo & string>>
];
