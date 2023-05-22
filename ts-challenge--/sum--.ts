type Sum<A extends string | number | bigint, B extends string | number | bigint> =
  `${ParseLast<`${A}`>}|${ParseLast<`${B}`>}` extends `${infer PrecededA}|${infer LastA}|${infer PrecededB}|${infer LastB}` ? (
    CalculateMap[`${LastA}+${LastB}` & keyof CalculateMap] extends `${infer Forward}${infer Digit}` ? (
      `${RemoveLeadingZero<Sum<Sum<PrecededA, PrecededB>, Forward>>}${Digit}`
    ) : A
  ) : `${A}${B}` // when A or B is empty

type RemoveLeadingZero<T extends string> = T extends `0${infer Rest}` ? RemoveLeadingZero<Rest> : T

type ParseLast<T extends string, Leading extends string = ''> =
  T extends `${infer First}${infer Rest}` ? (
    Rest extends '' ? (
      `${Leading}|${First}`
    ) : ParseLast<Rest, `${Leading}${First}`>
  ) : Leading extends '' ? (
    ''  // T and Leading are empty
  ) : `${Leading}|${T}`

type CalculateMap = {
  '0+0': '00', '0+1': '01', '0+2': '02', '0+3': '03', '0+4': '04', '0+5': '05', '0+6': '06', '0+7': '07', '0+8': '08', '0+9': '09',
  '1+0': '01', '1+1': '02', '1+2': '03', '1+3': '04', '1+4': '05', '1+5': '06', '1+6': '07', '1+7': '08', '1+8': '09', '1+9': '10',
  '2+0': '02', '2+1': '03', '2+2': '04', '2+3': '05', '2+4': '06', '2+5': '07', '2+6': '08', '2+7': '09', '2+8': '10', '2+9': '11',
  '3+0': '03', '3+1': '04', '3+2': '05', '3+3': '06', '3+4': '07', '3+5': '08', '3+6': '09', '3+7': '10', '3+8': '11', '3+9': '12',
  '4+0': '04', '4+1': '05', '4+2': '06', '4+3': '07', '4+4': '08', '4+5': '09', '4+6': '10', '4+7': '11', '4+8': '12', '4+9': '13',
  '5+0': '05', '5+1': '06', '5+2': '07', '5+3': '08', '5+4': '09', '5+5': '10', '5+6': '11', '5+7': '12', '5+8': '13', '5+9': '14',
  '6+0': '06', '6+1': '07', '6+2': '08', '6+3': '09', '6+4': '10', '6+5': '11', '6+6': '12', '6+7': '13', '6+8': '14', '6+9': '15',
  '7+0': '07', '7+1': '08', '7+2': '09', '7+3': '10', '7+4': '11', '7+5': '12', '7+6': '13', '7+7': '14', '7+8': '15', '7+9': '16',
  '8+0': '08', '8+1': '09', '8+2': '10', '8+3': '11', '8+4': '12', '8+5': '13', '8+6': '14', '8+7': '15', '8+8': '16', '8+9': '17',
  '9+0': '09', '9+1': '10', '9+2': '11', '9+3': '12', '9+4': '13', '9+5': '14', '9+6': '15', '9+7': '16', '9+8': '17', '9+9': '18',
}

type c = Sum<'', 3>

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