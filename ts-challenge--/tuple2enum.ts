// type Enum<
//   T extends readonly string[],
//   N extends boolean = false,
//   R extends any[] = []
// > = T extends readonly [infer F extends string, ...infer L extends readonly string[]]
//   ? N extends true
//     ? flat<{ readonly[key in Capitalize<F>]: R["length"] } & Enum<L,N,[any,...R]>>
//     : flat<{ readonly [key in Capitalize<F>]: F } & Enum<L,N>>
//   : {};
// type flat<T> = {[K in keyof T]: T[K]}

type ExtractIndexByValue<T extends readonly unknown[], Value extends T[number], IndexArr extends number[] = []> =
  T extends readonly [infer First, ...infer Rest]
    ? Value extends First
      ? IndexArr['length']
      : ExtractIndexByValue<Rest, Value, [0, ...IndexArr]>
    : never
  
type Enum<T extends readonly string[], N extends boolean = false> = N extends true
  ? {
    readonly [P in T[number]as Capitalize<P>]: ExtractIndexByValue<T, P>
  }
  : {
    readonly [P in T[number]as Capitalize<P>]: P
  }
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const
const Command = ['echo', 'grep', 'sed', 'awk', 'cut', 'uniq', 'head', 'tail', 'xargs', 'shift'] as const
type c = Enum<typeof OperatingSystem>

type cases = [
  Expect<Equal<Enum<[]>, {}>>,
  Expect<Equal<
  Enum<typeof OperatingSystem>,
  {
    readonly MacOS: 'macOS'
    readonly Windows: 'Windows'
    readonly Linux: 'Linux'
  }
  >>,
  Expect<Equal<
  Enum<typeof OperatingSystem, true>,
  {
    readonly MacOS: 0
    readonly Windows: 1
    readonly Linux: 2
  }
  >>,
  Expect<Equal<
  Enum<typeof Command>,
  {
    readonly Echo: 'echo'
    readonly Grep: 'grep'
    readonly Sed: 'sed'
    readonly Awk: 'awk'
    readonly Cut: 'cut'
    readonly Uniq: 'uniq'
    readonly Head: 'head'
    readonly Tail: 'tail'
    readonly Xargs: 'xargs'
    readonly Shift: 'shift'
  }
  >>,
  Expect<Equal<
  Enum<typeof Command, true>,
  {
    readonly Echo: 0
    readonly Grep: 1
    readonly Sed: 2
    readonly Awk: 3
    readonly Cut: 4
    readonly Uniq: 5
    readonly Head: 6
    readonly Tail: 7
    readonly Xargs: 8
    readonly Shift: 9
  }
  >>,
]