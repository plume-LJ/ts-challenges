type KebabCase<S extends string> = S extends `${infer Start}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Lowercase<Start>}${KebabCase<Rest>}`
    : `${Lowercase<Start>}-${KebabCase<Rest>}`
  : S
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type a = Uncapitalize<''>
type b = Capitalize<''>
type c = Uppercase<''>
type d = Lowercase<''>

type e = Expect<Equal<a,b>>

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]