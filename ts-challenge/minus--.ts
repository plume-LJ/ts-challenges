type T10<T extends 1[] = []> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]
type N<T extends 1[] = []> = {
  '0': [...T10<T>]
  '1': [...T10<T>, 1]
  '2': [...T10<T>, 1, 1]
  '3': [...T10<T>, 1, 1, 1]
  '4': [...T10<T>, 1, 1, 1, 1]
  '5': [...T10<T>, 1, 1, 1, 1, 1]
  '6': [...T10<T>, 1, 1, 1, 1, 1, 1]
  '7': [...T10<T>, 1, 1, 1, 1, 1, 1, 1]
  '8': [...T10<T>, 1, 1, 1, 1, 1, 1, 1, 1]
  '9': [...T10<T>, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}

type CountToT<T extends string | number, Count extends 1[] = []> =
  `${T}` extends `${infer First}${infer Rest}` ? CountToT<Rest, N<Count>[keyof N & First]> : Count

type Number11 = CountToT<23> // 11
type Number53 = N<[1,1,1,1,1]>[3] // 53

type MinusOne<T extends number> =
  CountToT<T> extends [...infer M1, 1] ? M1['length'] : 0


export type Minus<T extends number, M extends number, TA extends 1[] = CountToT<T>,MA extends 1[] = CountToT<M>> =
  TA extends [...infer M1, ...MA] ? M1['length'] : MA extends [...infer M2,...TA] ? `-${M2['length']}` : 0

type numberMinus1 = Minus<100,46> // 54  (数字类型)
type numberMinus = Minus<46,100> // -54  (字符串数字类型)

type n = MinusOne<9999>