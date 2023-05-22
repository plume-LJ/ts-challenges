type IsEmpty<S> = S extends ('' | []) ? true : false;
type And<B1 extends boolean, B2 extends boolean> = B1 extends true ? (B2 extends true ? true : false) : false;


// Create array of N length
type NArray<N extends number, A extends any[]= []> = A['length'] extends N ? A : NArray<N, [...A, never]>;

// Normalize number to string
type NumToStr<N extends string | number | bigint> = N extends (number | bigint) ? `${N}`
    : N extends `${infer Num extends bigint}` ? `${Num}` : never;

// Sum small numbers
type EnsureNum<N> = N extends number ? N : never;
type SumSmall<N1 extends number, N2 extends number, N3 extends number> = EnsureNum<[...NArray<N1>, ...NArray<N2>, ...NArray<N3>]['length']>;

// type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type DigitArray<S> = S extends `${infer D extends number}${infer R}` ? [...DigitArray<R>, D] : []
type ArrayToNum<Arr> = Arr extends [infer T1 extends number, ...infer TR] ? `${ArrayToNum<TR>}${T1}` : '';
type FirstDig<Arr> = Arr extends [infer T1, ...infer _TR] ? T1 : 0;
type SecondDig<Arr> = Arr extends [infer _T1, infer T2, ...infer _TR] ? T2 : 0;
type NextDig<Arr> = Arr extends [infer _T1, ...infer TR] ? TR : [];

type SumDigits<
        Arr1 extends number[], Arr2 extends number[], 
        PrevC extends number = 0,
        SumFirst extends number[] = DigitArray<`${SumSmall<FirstDig<Arr1>, FirstDig<Arr2>, PrevC>}`>,
        NextC extends number = SecondDig<SumFirst>,
        TotalDigit extends number= FirstDig<SumFirst>,
    > = And<IsEmpty<Arr1>, IsEmpty<Arr2>> extends true ? (TotalDigit extends 0 ? [] : [TotalDigit])
    : [TotalDigit, ...SumDigits<NextDig<Arr1>, NextDig<Arr2>, NextC>]

type Sum<A extends string | number | bigint, B extends string | number | bigint> = 
    ArrayToNum<SumDigits<DigitArray<NumToStr<A>>, DigitArray<NumToStr<B>>>>

    /* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Sum<2, 3>, '5'>>,
  Expect<Equal<Sum<'13', '21'>, '34'>>,
  Expect<Equal<Sum<'328', 7>, '335'>>,
  Expect<Equal<Sum<1_000_000_000_000n, '123'>, '1000000000123'>>,
  Expect<Equal<Sum<9999, 1>, '10000'>>,
  Expect<Equal<Sum<4325234, '39532'>, '4364766'>>,
  Expect<Equal<Sum<728, 0>, '728'>>,
  Expect<Equal<Sum<'0', 213>, '213'>>,
  Expect<Equal<Sum<0, '0'>, '0'>>,
]