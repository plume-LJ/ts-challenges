// i.e. 123 x 45 = A x B
type Multiply<A extends string | number | bigint, B extends string | number | bigint> = FirstPass<`${A}`, `${B}`>

// i.e. A x 40 + A x 5
type FirstPass<A extends string, B extends string> =
  ParseLast<`${B}`> extends `${infer LeadingB}|${infer LastB}` ? ( // ForEach B, A x 5, A x 4
    ParseLast<SecondPass<`${A}`, LastB>> extends `${infer Leading}|${infer Digit}` ? ( // i.e. 1 x B, 1, 2 x B, 3 x B
      `${RemoveLeadingZero<Sum<FirstPass<A, LeadingB>, Leading>>}${Digit}`
    ) : never
  ) : ''  // when B is empty

// i.e. 100 x B + 20 x B + 3 x B
type SecondPass<A extends string, LastB extends string> =
  ParseLast<A> extends `${infer LeadingA}|${infer LastA}` ? (
    CalculateMap[`${LastA}x${LastB}` & keyof CalculateMap] extends `${infer Forward}${infer Digit}` ? (
      `${Sum<SecondPass<LeadingA, LastB>, Forward>}${Digit}`
    ) : never
  ) : ''  // when A is empty

type Sum<A extends string | number | bigint, B extends string | number | bigint> =
  `${ParseLast<`${A}`>}|${ParseLast<`${B}`>}` extends `${infer LeadingA}|${infer LastA}|${infer LeadingB}|${infer LastB}` ? (
    CalculateMap[`${LastA}+${LastB}` & keyof CalculateMap] extends `${infer Forward}${infer Digit}` ? (
      `${RemoveLeadingZero<Sum<Sum<LeadingA, LeadingB>, Forward>>}${Digit}`
    ) : never
  ) : `${A}${B}` // when either is empty

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
  '0x0': '00', '0x1': '00', '0x2': '00', '0x3': '00', '0x4': '00', '0x5': '00', '0x6': '00', '0x7': '00', '0x8': '00', '0x9': '00',
  '1x0': '00', '1x1': '01', '1x2': '02', '1x3': '03', '1x4': '04', '1x5': '05', '1x6': '06', '1x7': '07', '1x8': '08', '1x9': '09',
  '2x0': '00', '2x1': '02', '2x2': '04', '2x3': '06', '2x4': '08', '2x5': '10', '2x6': '12', '2x7': '14', '2x8': '16', '2x9': '18',
  '3x0': '00', '3x1': '03', '3x2': '06', '3x3': '09', '3x4': '12', '3x5': '15', '3x6': '18', '3x7': '21', '3x8': '24', '3x9': '27',
  '4x0': '00', '4x1': '04', '4x2': '08', '4x3': '12', '4x4': '16', '4x5': '20', '4x6': '24', '4x7': '28', '4x8': '32', '4x9': '36',
  '5x0': '00', '5x1': '05', '5x2': '10', '5x3': '15', '5x4': '20', '5x5': '25', '5x6': '30', '5x7': '35', '5x8': '40', '5x9': '45',
  '6x0': '00', '6x1': '06', '6x2': '12', '6x3': '18', '6x4': '24', '6x5': '30', '6x6': '36', '6x7': '42', '6x8': '48', '6x9': '54',
  '7x0': '00', '7x1': '07', '7x2': '14', '7x3': '21', '7x4': '28', '7x5': '35', '7x6': '42', '7x7': '49', '7x8': '56', '7x9': '63',
  '8x0': '00', '8x1': '08', '8x2': '16', '8x3': '24', '8x4': '32', '8x5': '40', '8x6': '48', '8x7': '56', '8x8': '64', '8x9': '72',
  '9x0': '00', '9x1': '09', '9x2': '18', '9x3': '27', '9x4': '36', '9x5': '45', '9x6': '54', '9x7': '63', '9x8': '72', '9x9': '81',
}

  /* _____________ Test Cases _____________ */
  import type { Equal, Expect } from '@type-challenges/utils'

  type cases = [
    Expect<Equal<Multiply<2, 3>, '6'>>,
    Expect<Equal<Multiply<3, '5'>, '15'>>,
    Expect<Equal<Multiply<'4', 10>, '40'>>,
    Expect<Equal<Multiply<0, 16>, '0'>>,
    Expect<Equal<Multiply<'13', '21'>, '273'>>,
    Expect<Equal<Multiply<'43423', 321543n>, '13962361689'>>,
    Expect<Equal<Multiply<9999, 1>, '9999'>>,
    Expect<Equal<Multiply<4325234, '39532'>, '170985150488'>>,
    Expect<Equal<Multiply<100_000n, '1'>, '100000'>>,
    Expect<Equal<Multiply<259, 9125385>, '2363474715'>>,
    Expect<Equal<Multiply<9, 99>, '891'>>,
    Expect<Equal<Multiply<315, '100'>, '31500'>>,
    Expect<Equal<Multiply<11n, 13n>, '143'>>,
    Expect<Equal<Multiply<728, 0>, '0'>>,
    Expect<Equal<Multiply<'0', 213>, '0'>>,
    Expect<Equal<Multiply<0, '0'>, '0'>>,
  ]