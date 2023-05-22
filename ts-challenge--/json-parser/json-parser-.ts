type Pure<T> = {
  [P in keyof T]: T[P] extends object ? Pure<T[P]> : T[P]
}

type SetProperty<T, K extends PropertyKey, V> = {
  [P in (keyof T) | K]: P extends K ? V : P extends keyof T ? T[P] : never
}

type Token = '{' | '}' | '[' | ']' | ':' | ',' | `"${string}"` | null | true | false | number

type ValueToken = `"${string}"` | null | true | false | number

type ParseResult<T extends Token[]> =
  T extends [infer FirstToken, ...infer RestTokens extends Token[]] ? (
    FirstToken extends '{' ? (
      ParseObjectResult<RestTokens>
    ) : FirstToken extends '[' ? (
      ParseArrayResult<RestTokens>
    ) : never
  ) : never

type Tokenize<S, T extends Token[] = [], pre extends string = ''> =
  S extends `${infer First}${infer Rest}` ? (
    First extends '{' | '}' | '[' | ']' | ':' | ',' ? (
      Tokenize<Rest, [...T, First], First>
    ) : First extends `"` ? (
      ParseStringResult<Rest> extends [infer Rest, infer Token extends `"${string}"`] ? (
        Tokenize<Rest, [...T, Token], Token>
      ) : never
    ) : First extends `t` | `f` | `n` ? (
      ParsePrimitiveResult<S> extends [infer Rest, infer Token extends `"${string}"` | null | true | false] ? (
        Tokenize<Rest, [...T, Token]>
      ) : never
    ) : First extends `0` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `-` ? (
        pre extends ":" ? ParseNumberResult<Rest, First> extends [infer Rest, `"${infer N extends number}"`] ? (
          Tokenize<Rest, [...T, N]>
        // never
        ) :
        never 
      : never
    ) : First extends ` ` | `\t` | `\n` ? (
      Tokenize<Rest, T>
    ) : never
  ) : T

type ParseLiteral<T extends Token[]> =
  T extends [ValueToken] ? (
    [ParseLiteralResult<T[0]>]
  ) : ParseResult<T>

// 1. Tokenize: {"F": {"true": false}} >> [`{`, `"F"`, `:`, `{`, "true", `:`, `false`, `}`, `}`]
// 2. ParseLiteral: [`{`, "F", `:`, `{`, `"true"`, `:`, `false` `}`, `}`] >> [`{`, `F`, `:`, `{`, true, `:`, false, `}`, `}`]
// 3. ParseResult: [`{`, `F`, `:`, `{`, true, `:`, false, `}`, `}`] >> [{F:{true:false}]
type Parse<T extends string> = Pure<ParseLiteral<Tokenize<T>>[0]>

type c1 = `\t   
{
  "F": {
    "true": false,
    "2":22,
    "\\n":2
  }
}
`
type c_1= c1 extends `${infer F}${infer _R}` ? F : 'R'
type c2 = Tokenize<c1>
type c3 = ParseResult<c2>
type c4 = Pure<c3>[0]
type c5 = Pure<SetProperty<SetProperty<SetProperty<{}, "true", false>, "2", 22>, "\n", 2>>

type ParseLiteralResult<T extends ValueToken> =
  T extends `"${infer StringContent}"` ? (
    UnescapeString<StringContent>
  ) : T

type UnescapeString<S extends string> =
  S extends `${infer First}${infer Second}${infer Rest}` ? (
    `${First}${Second}` extends `\\n` ? (
      `\n${UnescapeString<Rest>}`
    ) : `${First}${Second}` extends `\\r` ? (
      `\r${UnescapeString<Rest>}`
    ) : `${First}${Second}` extends `\\f` ? (
      `\f${UnescapeString<Rest>}`
    ) : `${First}${Second}` extends `\\b` ? (
      `\b${UnescapeString<Rest>}`
    ) : `${First}${Second}` extends `\\t` ? (
      `\t${UnescapeString<Rest>}`
    ) : `${First}${Second}${UnescapeString<Rest>}`
  ) : S

type EscapeCharactor<S extends string> =
  S extends `n` ? (
    `\n`
  ) : S extends `r` ? (
    `\r`
  ) : S extends `f` ? (
    `\f`
  ) : S extends `b` ? (
    `\b`
  ) : S extends `t` ? (
    `\t`
  ) : S

type ParseStringResult<S extends string, Result extends string = ``> =
  S extends `\\${infer First}${infer Rest}` ? (
    ParseStringResult<Rest, `${Result}${EscapeCharactor<First>}`>
  ) : S extends `"${infer Rest}` ? (
    [Rest, `"${Result}"`]
  ) : S extends `\n${string}` ? (
    never
  ) : S extends `${infer First}${infer Rest}` ? (
    ParseStringResult<Rest, `${Result}${First}`>
  ) : never

type ParseNumberResult<S extends string, Result extends string> =
  S extends `.${infer Rest}` ? (
    Result extends `${string}.${string}` ? (
      never
    ) : ParseNumberResult<Rest, `${Result}.`>
  ) : S extends `${infer First}${infer Rest}` ? (
    First extends `0` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` ? (
      ParseNumberResult<Rest, `${Result}${First}`>
    ) : Result extends '-' ? (
      never
    ) : [S, `"${Result}"`]
  ) : Result extends '-' | `${string}.` ? (
    never
  ) : [S, `"${Result}"`]

type ParsePrimitiveResult<S extends string> =
  S extends `true${infer Rest}` ? (
    [Rest, true]
  ) : S extends `false${infer Rest}` ? (
    [Rest, false]
  ) : S extends `null${infer Rest}` ? (
    [Rest, null]
  ) : never

type ParseArrayResult<T extends Token[], Result extends unknown[] = [], Expected extends Token = ValueToken | ']' | '[' | '{'> =
  T extends [infer FirstToken, ...infer RestTokens extends Token[]] ? (
    FirstToken extends Expected ? (
      FirstToken extends ']' ? (
        [Result, RestTokens]
      ) : FirstToken extends '[' ? (
        ParseArrayResult<RestTokens> extends [infer ArrayResult, infer RestTokens extends Token[]] ? (
          ParseArrayResult<RestTokens, [...Result, ArrayResult], ',' | ']'>
        ) : never
      ) : FirstToken extends '{' ? (
        ParseObjectResult<RestTokens> extends [infer ObjectResult, infer RestTokens extends Token[]] ? (
          ParseArrayResult<RestTokens, [...Result, ObjectResult], ',' | ']'>
        ) : never
      ) : FirstToken extends ',' ? (
        ParseArrayResult<RestTokens, Result, ValueToken | '[' | '{'>
      ) : FirstToken extends ValueToken ? (
        ParseArrayResult<RestTokens, [...Result, ParseLiteralResult<FirstToken>], ',' | ']'>
      ) : never
    ) : never
  ) : never

type ParseObjectResult<T extends Token[], Result extends object = {}, Expected extends Token = '}' | `"${string}"`, Key extends string = ``> =
  T extends [infer FirstToken, ...infer RestTokens extends Token[]] ? (
    FirstToken extends Expected ? (
      Key extends `"${string}"` ? (
        FirstToken extends ':' ? (
          ParseObjectResult<RestTokens, Result, ValueToken | '[' | '{', Key>
        ) : FirstToken extends ValueToken ? (
          ParseObjectResult<RestTokens, SetProperty<Result, ParseLiteralResult<Key>, ParseLiteralResult<FirstToken>>, ',' | '}'>
        ) : FirstToken extends '[' ? (
          ParseArrayResult<RestTokens> extends [infer ArrayResult, infer RestTokens extends Token[]] ? (
            ParseObjectResult<RestTokens, SetProperty<Result, ParseLiteralResult<Key>, ArrayResult>, ',' | '}'>
          ) : never
        ) : FirstToken extends '{' ? (
          ParseObjectResult<RestTokens> extends [infer ObjectResult, infer RestTokens extends Token[]] ? (
            ParseObjectResult<RestTokens, SetProperty<Result, ParseLiteralResult<Key>, ObjectResult>, ',' | '}'>
          ) : never
        ) : never
      ) : FirstToken extends ',' ? (
        ParseObjectResult<RestTokens, Result, `"${string}"`, ``>
      ) : FirstToken extends `"${string}"` ? (
        ParseObjectResult<RestTokens, Result, ':', FirstToken>
      ) : FirstToken extends '}' ? (
        [Result, RestTokens]
      ) : never
    ) : never
  ) : never
type c = Parse<`
{
  "a": "b", 
  "b": false, 
  "c": [true, false, "hello", {
    "a": "b", 
    "b": {}
  }], 
  "nil": null
}
`>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cc = Parse<'{ 1: "world" }'>

type cases = [
  Expect<Equal<(
    Parse<`
      {
        "a": "b", 
        "b": false, 
        "c": [true, false, "hello", {
          "a": "b", 
          "b": false
        }], 
        "nil": null
      }
    `>
  ), (
    {
      nil: null
      c: [true, false, 'hello', {
        a: 'b'
        b: false
      }]
      b: false
      a: 'b'
    }

  )>>,
  Expect<Equal<Parse<'{}'>, {}>>,

  Expect<Equal<Parse<'[]'>, []>>,

  Expect<Equal<Parse<'[1]'>, never>>,

  Expect<Equal<Parse<'true'>, true>>,

  Expect<Equal<
  Parse<'["Hello", true, false, null]'>,
  ['Hello', true, false, null]
  >>,

  Expect<Equal<
  (
    Parse<`
      {
        "hello\\r\\n\\b\\f": "world"
      }`>
  ), (
    {
      'hello\r\n\b\f': 'world'
    }
  )
  >>,

  Expect<Equal<Parse<'{ 1: "world" }'>, never>>,

  Expect<Equal<Parse<`{ "hello
  
  world": 123 }`>, never>>,
]
