// 双指针法
function reverseList1(head: ListNode | null): ListNode | null {
  let preNode: ListNode | null = null,
      curNode: ListNode | null = head,
      tempNode: ListNode | null;
  while (curNode) {
      tempNode = curNode.next;
      curNode.next = preNode;
      preNode = curNode;
      curNode = tempNode;
  }
  return preNode;
};

// 递归（从前往后翻转）
function reverseList2(head: ListNode | null): ListNode | null {
  function recur(preNode: ListNode | null, curNode: ListNode | null): ListNode | null {
      if (curNode === null) return preNode;
      let tempNode: ListNode | null = curNode.next;
      curNode.next = preNode;
      preNode = curNode;
      curNode = tempNode;
      return recur(preNode, curNode);
  }
  return recur(null, head);
};

// 递归（从后往前翻转）
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let newHead: ListNode | null = null;
  function recur(node: ListNode, preNode: ListNode | null): void {
      if (node.next === null) {
          newHead = node;
          newHead.next = preNode;
      } else {
          recur(node.next, node);
          node.next = preNode;
      }
  }
  recur(head, null);
  return newHead;
};

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode: ListNode = new ListNode(0, head);
  let curNode: ListNode | null = dummyNode;
  while (curNode && curNode.next && curNode.next.next) {
      let firstNode: ListNode = curNode.next,
          secNode: ListNode = curNode.next.next,
          thirdNode: ListNode | null = curNode.next.next.next;
      curNode.next = secNode;
      secNode.next = firstNode;
      firstNode.next = thirdNode;
      curNode = firstNode;
  }
  return dummyNode.next;
};