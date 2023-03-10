function circle(node: ListNode | null) {
  if (node === null) return null;
  const dummyNode = new ListNode(0, node);
  let fast: ListNode | null = dummyNode.next;
  let slow: ListNode | null = dummyNode.next;
  while (fast?.next) {
    fast = fast.next?.next;
    slow = slow?.next || null;
    if (fast === slow) {
      fast = dummyNode.next
      while (fast !== slow) {
        fast = fast?.next || null
        slow = slow?.next || null
      }
      return slow
    }
  }
}
const node11 = new ListNode(1)
console.log(circle(node11))
export {}