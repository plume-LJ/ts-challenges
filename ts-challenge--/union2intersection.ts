export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;
type UnionToInterFunction<U> = (
  U extends any ? (k: () => U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<UnionToIntersection<"foo" | 42 | true>, "foo" & 42 & true>>,
  Expect<
    Equal<
      UnionToIntersection<(() => "foo") | ((i: 42) => true)>,
      (() => "foo") & ((i: 42) => true)
    >
  >
];


// 解释

type Format320 = { urls: { format320p: string } }
type Format480 = { urls: { format480p: string } }
type Format720 = { urls: { format720p: string } }
type Format1080 = { urls: { format1080p: string } }

type Video = {} & (
  Format320 | Format480 | Format720 | Format1080
)
// type UnionToIntersection<T> = 
//   (T extends any ? (x: T) => any : never) extends 
//   (x: infer R) => any ? R : never

type Intersected1 = UnionToIntersection<Video["urls"]>

// 等价于

type Intersected2 = UnionToIntersection<
  { format320p: string } |
  { format480p: string } |
  { format720p: string } |
  { format1080p: string } 
>

// 我们有了一个裸类型, 这意味着
// 我们可以做并集的交集操作：

type Intersected3 = 
  UnionToIntersection<{ format320p: string }> |
  UnionToIntersection<{ format480p: string }> |
  UnionToIntersection<{ format720p: string }> |
  UnionToIntersection<{ format1080p: string }> 

// 展开...

type Intersected4 = 
  ({ format320p: string } extends any ? 
    (x: { format320p: string }) => any : never) extends 
    (x: infer R) => any ? R : never | 
  ({ format480p: string } extends any ? 
    (x: { format480p: string }) => any : never) extends 
    (x: infer R) => any ? R : never | 
  ({ format720p: string } extends any ? 
    (x: { format720p: string }) => any : never) extends 
    (x: infer R) => any ? R : never | 
  ({ format1080p: string } extends any ? 
    (x: { format1080p: string }) => any : never) extends 
    (x: infer R) => any ? R : never

// conditional one!

type Intersected5 = 
  (x: { format320p: string }) => any extends 
    (x: infer R) => any ? R : never | 
  ((x: { format480p: string }) => any extends 
    (x: infer R) => any ? R : never) | 
  ((x: { format720p: string }) => any extends 
    (x: infer R) => any ? R : never) | 
  ((x: { format1080p: string }) => any extends 
    (x: infer R) => any ? R : never)

// conditional two!, inferring R!
type Intersected6 = 
  { format320p: string } | 
  { format480p: string } | 
  { format720p: string } | 
  { format1080p: string }

// 但是等等! `R` 从一个逆变位置 inferred
//我做了一个交集, 否则我丢失了类型兼容性

type Intersected = 
  { format320p: string } & 
  { format480p: string } & 
  { format720p: string } & 
  { format1080p: string }

  type FormatKeys = keyof Intersected
  type cc = Video["urls"]
  type ccc = keyof cc
  type FormatKeys1 = keyof UnionToIntersection<cc>