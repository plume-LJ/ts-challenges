// 以 O(n) 的算法复杂度构造一个指定长度的普通元组
type Tuple<L extends number, T extends 1[] = []> = T["length"] extends L
  ? T
  : Tuple<L, [...T, 1]>;

// 在 From 元组和 To 元组之间，找到一个满足指定长度的元组并返回，如果找不到，返回 never
type FromToTuple<L extends number, From extends 1[] = [], To extends 1[] = []> = From['length'] extends L
  ? From
  : From['length'] extends To['length']
    ? never
    : FromToTuple<L, [1, ...From], To>

// 准备一个常量元组，表示每轮递归时增加的计数量
// 如果要改变步长，则改变这里的数字即可
type TupleMax = Tuple<999>

// 构造一个指定长度的元组
// 在每一轮递归中，增加一个较大的计数，这样可以减少触达目标数字时需要的递归次数
type SuperTuple<L extends number, C extends 1[] = [], P extends 1[] = []> = C["length"] extends L
  ? C
  : FromToTuple<L, P, C> extends never
    ? SuperTuple<L, [...TupleMax, ...C], C>
    : FromToTuple<L, P, C>

// 增加了一个 Minus 抽象，使得最终的 MinusOne 算法看起来更清晰些
type Minus<A extends number, B extends number> = SuperTuple<A> extends [ ...SuperTuple<B>, ... infer R extends 1[]] ? R['length'] : never

type MinusOne<T extends number> =
  T extends 0
    ? -1
    : Minus<T, 1>

// type cc =MinusOne<9_007_199_254_740_992>

    /* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  // Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]