function removeNthFromEnd(head, n) {
    var newHead = new ListNode(0, head);
    //根据leetcode题目的定义可推断这里快慢指针均不需要定义为ListNode | null。
    var slowNode = newHead;
    var fastNode = newHead;
    while (n--) {
        fastNode = fastNode.next; //由虚拟头节点前进n个节点时,fastNode.next可推断不为null。
    }
    while (fastNode.next) { //遍历直至fastNode.next = null， 即尾部节点。 此时slowNode指向倒数第n个节点。
        fastNode = fastNode.next;
        slowNode = slowNode.next;
    }
    slowNode.next = slowNode.next.next; //倒数第n个节点可推断其next节点不为空。 
    return newHead.next;
}
// function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
//   let curNode: ListNode | null = head;
//   let listSize: number = 0;
//   while (curNode) {
//       curNode = curNode.next;
//       listSize++;
//   }
//   if (listSize === n) {
//       head = head.next;
//   } else {
//       curNode = head;
//       for (let i = 0; i < listSize - n - 1; i++) {
//           curNode = curNode.next;
//       }
//       curNode.next = curNode.next.next;
//   }
//   return head;
// };
function removeNthFromEnd2(head, n) {
    var newHead = new ListNode(0, head);
    var cnt = 0;
    function recur(node) {
        if (node === null)
            return;
        recur(node.next);
        cnt++;
        if (cnt === n + 1) {
            node.next = node.next.next;
        }
    }
    recur(newHead);
    return newHead.next;
}
;
