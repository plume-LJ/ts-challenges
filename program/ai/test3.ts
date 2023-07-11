// a1 → a2
// \
//   c1 → c2 → c3
// /
// b1 → b2 → b3
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) {
    return null;
  }

  let pA: ListNode | null = headA;
  let pB: ListNode | null = headB;

  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }

  return pA;
}

// 示例用法
const commonNode = new ListNode(8, new ListNode(4, new ListNode(5)));
const headA = new ListNode(4, new ListNode(1, commonNode));
const headB = new ListNode(5, new ListNode(0, new ListNode(1, commonNode)));

const result = getIntersectionNode(headA, headB);
var result2 = getIntersectionNode(
  new ListNode(8, new ListNode(4, new ListNode(5))),
  new ListNode(8, new ListNode(4, new ListNode(5, new ListNode(3))))
);
console.log(result);
console.log(result2);
export {};
