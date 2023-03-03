import { Calc } from "./number";

type Power<A extends string, R0 extends string = '1', R1 extends string = ''>
  = (Calc.IsNotless<A, '1'> extends true
    ? Power<
      Calc.Subed<A, '1'>,
      Calc.Subed<`${R0}0`, R0>,
      `${R1}00`
    >
    : `${R0}${R1}`
  )

type A = Power<'2'> // "810000"
type B = Power<'5'> // "590490000000000"
type MaxV = '3'

type Add<A extends string, B extends string> = `${A}${B}`

type Gened<A extends string, R extends string = '', L extends string = MaxV>
  = (Calc.IsNotless<A, Power<L>> extends true
    ? Gened<
      Calc.Subed<A, Power<L>>,
      Add<R, L extends '0'
        ? `Z`
        : Gened<Power<L>, '', Calc.Subed<L, '1'>>
      >,
      L
    >
    : (L extends '0'
      ? R
      : Gened<A, R, Calc.Subed<L, '1'>>
    )
  )

  type test = Gened<'9999999', '23', '6'>


