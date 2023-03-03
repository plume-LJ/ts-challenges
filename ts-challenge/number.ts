export namespace Calc {
  type SigNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  type SigT = SigNumber | 's'
  type SigVary<T, N> = N extends SigNumber ? (T extends 0 ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 's'] : ['s', 0, 1, 2, 3, 4, 5, 6, 7, 8])[N] : 's'
  type SigCmp<A extends SigT, B extends SigT> = A extends B ? 0 : A extends 's' ? -1 : B extends 's' ? 1 : SigCmp<SigVary<0, A>, SigVary<0, B>>
  type CmpP0<A extends string, B extends string> = `${A},${B}` extends `${infer A0 extends SigNumber}${infer A},${infer B0 extends SigNumber}${infer B}` ? SigCmp<A0, B0> extends infer K extends -1 | 1 ? K : CmpP0<A, B> : 0
  type StrSubedSub<A extends string, B, R extends string> = B extends `${any}${infer B}` ? A extends `${any}${infer A}` ? StrSubedSub<A, B, R> : StrSubedSub<A, B, `${R}Z`> : { r: R, a: A }
  type StrSubed<A extends string, B> = StrSubedSub<A, B, ''> extends { r: infer R } ? R extends '' ? 0 : R : never
  type Filled0<B, R extends string> = B extends `${any}${infer B}` ? Filled0<B, `${R}${0}`> : R
  type PreAligned<A extends string, B> = `${Filled0<StrSubed<A, B>, ''>}${A}`
  type LenCmp<A extends string, B extends string> = PreAligned<A, B> extends A ? PreAligned<B, A> extends B ? 0 : -1 : 1
  type SntCmpUns<A extends string, B extends string> = string extends A | B ? 1 | -1 | 0 : LenCmp<A, B> extends infer K extends -1 | 1 ? K : CmpP0<A, B>
  type SntCmp<A extends string, B extends string> = A extends `-${infer A}` ? B extends `-${infer B}` ? SntCmpUns<B, A> : 1 : B extends `-${any}` ? -1 : SntCmpUns<A, B>
  export type IsNotless<A extends string, B extends string> = { [-1]: true, 0: true, 1: false }[SntCmp<A, B>];
  type Leading0less<N extends string> = N extends `0${infer K}` ? K extends '' ? N : Leading0less<K> : N
  type StringReved<N, R extends string = ''> = N extends `${infer I}${infer S}` ? StringReved<S, `${I}${R}`> : R
  type GotQH<Q = any, H = any> = { q: Q, h: H }
  type SigInfl<T extends 0 | 9, A, B, E extends 1 | 0> = B extends 0 ? A extends 's' ? GotQH<1, T> : GotQH<E, A> : A extends SigNumber ? SigInfl<T, SigVary<T, A>, SigVary<9, B>, E> : SigInfl<T, T, B, 1>
  type SigTrinfl<T extends 0 | 9, A, B, C extends 0 | 1> = SigInfl<T, A, B, 0> extends infer K extends GotQH ? SigInfl<T, K['h'], C, K['q']> : GotQH<0, 0>
  type AosOri<T extends 0 | 9, A extends string, B extends string, J extends 0 | 1, R extends string> = `${A},${B}` extends `${infer A0 extends SigNumber}${infer A},${infer B0 extends SigNumber}${infer B}` ? SigTrinfl<T, A0, B0, J> extends infer S extends GotQH ? AosOri<T, A, B, S['q'], `${R}${S['h']}`> : R : R
  type AosHal<T extends 0 | 9, A extends string, B extends string> = Leading0less<StringReved<AosOri<T, `${StringReved<PreAligned<A, B>>}0`, `${StringReved<PreAligned<B, A>>}0`, 0, ''>>>
  export type Subed<A extends string, B extends string> = AosHal<9, A, B>
}

