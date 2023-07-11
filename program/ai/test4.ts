class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let p = l1;
  let q = l2;
  if (!p) return q;
  if (!q) return p;
  let newR: ListNode;
  if (p.val > q.val) {
    newR = new ListNode(q.val);
    q = q.next;
  } else {
    newR = new ListNode(p.val);
    p = p.next;
  }
  let curNode: ListNode = newR;
  while (p && q) {
    let tmpNode: ListNode;
    if (p.val > q.val) {
      curNode.next = q;
      q = q.next;
    } else {
      curNode.next = p;
      p = p.next;
    }
    curNode = curNode.next;
  }
  if (q) curNode.next = q;
  if (p) curNode.next = p;
  return newR;
}

mergeTwoLists(
  new ListNode(1, new ListNode(2, new ListNode(3))),
  new ListNode(1, new ListNode(2, new ListNode(4)))
);
