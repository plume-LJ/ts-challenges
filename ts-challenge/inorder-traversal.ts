interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
// type InorderTraversal<T extends TreeNode | null> = T extends TreeNode
//   ? [
//       ...(InorderTraversal<T["left"]> extends infer U extends any[]
//         ? U
//         : never),
//       T["val"],
//       ...(InorderTraversal<T["right"]> extends infer U extends any[]
//         ? U
//         : never)
//     ]
//   : [];

type InorderTraversal<
  T extends TreeNode | null,
  // Orders extends (string | number)[] = []
> = [T] extends [TreeNode]
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : [];
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type c = [null] extends [TreeNode] ? true:false;

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const;

const tree2 = {
  val: 1,
  left: null,
  right: null,
} as const;

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
} as const;

const tree4 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
} as const;

type cc = InorderTraversal<typeof tree1>;
type cases = [
  Expect<Equal<InorderTraversal<null>, []>>,
  Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
  Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
  Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
  Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>
];
