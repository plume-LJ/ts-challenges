// type MapTypes<T, R extends Record<'mapFrom'|'mapTo', any>> = {
//   [K in keyof T]: [R] extends [R] ? Equal<R['mapFrom'],T[K]> extends true ? Extract<R, { mapFrom: T[K] }>['mapTo'] : T[K] : never
// } // no

// type MapTypes<T, R extends { readonly mapFrom: unknown; readonly mapTo: unknown }> = {
//   [K in keyof T]: T[K] extends R['mapFrom'] ? Extract<R, { mapFrom: T[K] }>['mapTo'] : T[K]
// }

type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [K in keyof T]: T[K] extends R['mapFrom']
  ? R extends { mapFrom: T[K] }
    ? R['mapTo']
    : never
  : T[K]
}

// type MapTypes<T, R extends { mapFrom: unknown }> = {
//   [Key in keyof T]: T[Key] extends R["mapFrom"]
//     ? R extends { mapTo: infer To }
//       ? T[Key] extends R["mapFrom"] ? To : never
//       : T[Key]
//     : T[Key];
// };

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type c<R extends Record<'mapFrom'|'mapTo', any>> = [R] extends [R] ? Equal<R['mapFrom'],{ name: string }> extends true ? Extract<R, { mapFrom: { name: string } }>['mapTo'] : { name: string }:never

type cc = c<{ mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }>

type cases = [
  Expect<Equal<MapTypes<{ stringToArray: string }, { mapFrom: string; mapTo: [] }>, { stringToArray: [] }>>,
  Expect<Equal<MapTypes<{ stringToNumber: string }, { mapFrom: string; mapTo: number }>, { stringToNumber: number }>>,
  Expect<Equal<MapTypes<{ stringToNumber: string; skipParsingMe: boolean }, { mapFrom: string; mapTo: number }>, { stringToNumber: number; skipParsingMe: boolean }>>,
  Expect<Equal<MapTypes<{ date: string }, { mapFrom: string; mapTo: Date } | { mapFrom: string; mapTo: null }>, { date: null | Date }>>,
  Expect<Equal<MapTypes<{ date: string }, { mapFrom: string; mapTo: Date | null }>, { date: null | Date }>>,
  Expect<Equal<MapTypes<{ fields: Record<string, boolean> }, { mapFrom: Record<string, boolean>; mapTo: string[] }>, { fields: string[] }>>,
  Expect<Equal<MapTypes<{ name: string }, { mapFrom: boolean; mapTo: never }>, { name: string }>>,
  Expect<Equal<MapTypes<{ name: string; date: Date }, { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }>, { name: boolean; date: string }>>,
]
