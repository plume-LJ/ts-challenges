// type ObjectKeyPaths<
//   T extends object,
//   K = keyof T & (string | number)
// > = K extends keyof T
//   ? T[K] extends object
//     ? K | `${K & (string | number)}.${ObjectKeyPaths<T[K]>}`
//     : K
//   : never;
// type ObjectKeyPaths<T extends object, P extends string = never> =
//   | P
//   | {
//       [K in keyof T & (string | number)]: T[K] extends object
//         ? ObjectKeyPaths<T[K], AddPrefix<P, K>>
//         : AddPrefix<P, K>;
//     }[keyof T & (string | number)];

type AddPrefix<P extends string, Path extends string | number> = [P] extends [
  never
]
  ? `${Path}`
  : Path extends number
  ? `${P}.${Path}` | `${P}[${Path}]` | `${P}.[${Path}]`
  : `${P}.${Path}`;

// your answers
type GenNode<
  K extends string | number,
  Root extends boolean
> = Root extends true
  ? `${K}` | (K extends number ? `[${K}]` : never)
  : `.${K}` | (K extends number ? `[${K}]` | `.[${K}]` : never);

type ObjectKeyPaths<
  T extends object,
  Root extends boolean = true,
  K extends keyof T = keyof T
> = K extends string | number
  ?
      | GenNode<K, Root>
      | (T[K] extends object
          ? `${GenNode<K, Root>}${ObjectKeyPaths<T[K], false>}`
          : never)
  : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect, ExpectExtends } from "@type-challenges/utils";

const ref = {
  count: 1,
  person: {
    name: "cattchen",
    age: 22,
    books: ["book1", "book2"],
    pets: [
      {
        type: "cat",
      },
    ],
  },
};

type cc = "lengtjh" extends keyof [{ name: string; age: number }]
  ? true
  : false;
type d =  ObjectKeyPaths<[{b:2}, {3:2}]>
type c = Expect<ExpectExtends<ObjectKeyPaths<[{b:2},{a:1},{3:2}]>,'2.[3]'>>;
type ccc = [1,3]

type cases = [
  Expect<Equal<ObjectKeyPaths<{ name: string; age: number }>, "name" | "age">>,
  Expect<
    Equal<
      ObjectKeyPaths<{
        refCount: number;
        person: { name: string; age: number };
      }>,
      "refCount" | "person" | "person.name" | "person.age"
    >
  >,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "count">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.name">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.age">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.pets">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.0">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.1">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books[0]">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.[0]">>,
  Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.pets.0.type">>,
  Expect<Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, "notExist">, false>>,
  Expect<
    Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.notExist">, false>
  >,
  Expect<
    Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.name.">, false>
  >,
  Expect<
    Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, ".person.name">, false>
  >,
  Expect<
    Equal<
      ExpectExtends<ObjectKeyPaths<typeof ref>, "person.pets.[0]type">,
      false
    >
  >
];
