// class ListNode {
//   public val: number;
//   public next: ListNode|null = null;
//   constructor(value: number) {
//     this.val = value;
//     this.next = null;
//   }
// }

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElements1(head: ListNode | null, val: number): ListNode | null {
  // 删除头部节点
  while (head !== null && head.val === val) {
    head = head.next;
  }
  if (head === null) return head;
  let pre: ListNode = head,
    cur: ListNode | null = head.next;
  // 删除非头部节点
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next;
    } else {
      //此处不加类型断言时：编译器会认为pre类型为ListNode, pre.next类型为ListNode | null
      pre = pre.next as ListNode;
    }
    cur = cur.next;
  }
  return head;
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 添加虚拟节点
  const data = new ListNode(0, head);
  let pre = data,
    cur = data.next;
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    cur = cur.next;
  }
  return data.next;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let newHead: ListNode | null = new ListNode(0, head);
  //根据leetcode题目的定义可推断这里快慢指针均不需要定义为ListNode | null。
  let slowNode: ListNode = newHead;
  let fastNode: ListNode = newHead;

  while(n--) {
      fastNode = fastNode.next!; //由虚拟头节点前进n个节点时,fastNode.next可推断不为null。
  }
  while(fastNode.next) {  //遍历直至fastNode.next = null， 即尾部节点。 此时slowNode指向倒数第n个节点。
      fastNode = fastNode.next;
      slowNode = slowNode.next!;
  }
  slowNode.next = slowNode.next!.next; //倒数第n个节点可推断其next节点不为空。 
  return newHead.next; 
}
let a = new ListNode();
let b = a;
for (let i of [1, 2, 6, 3, 4, 5, 6]) {
  b.next = new ListNode(i);
  b = b.next;
}
console.log(JSON.stringify(removeNthFromEnd(a,2)))
console.log(JSON.stringify(removeElements(a, 6)));
export {};
