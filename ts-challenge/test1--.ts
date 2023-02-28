type Gened<A extends string>
  = (A extends `${any}${infer A}`
    ? `Z${Gened<A>}`
    : ''
  )
  type A = Gened<`${''
}${'00000000000000000000000000000000000000000000000000'
}`>

