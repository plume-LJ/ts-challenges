class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkList {
  head: ListNode | null;
  tail: ListNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get(index: number): number {
    // 索引无效的情况
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let curNode = this.getNode(index);
    // 这里在前置条件下，理论上不会出现 null的情况
    return curNode.val;
  }

  addAtHead(val: number) {
    const node = new ListNode(val, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }

    this.size++;
  }

  addAtTail(val: number) {
    const node = new ListNode(val);
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.size++;
  }

  addAtIndex(index: number, val: number) {
    if (index > this.size) return;
    if (index <= 0) {
      this.addAtHead(val);
    }
    if (this.size === index) this.addAtTail(val);

    const curNode = this.getNode(index - 1);
    const node = new ListNode(val, curNode.next);
    curNode.next = node;
    this.size++;
  }

  deleteAtIndex(index: number) {
    if (index > this.size || index < 0) return;
    if (index == 0) {
      this.head = this.head?.next || null;
      if (index === this.size - 1) this.tail = null;
      this.size--;
      return;
    }
    let curNode = this.getNode(index - 1);
    curNode.next = curNode.next?.next || null;
    if (index === this.size - 1) this.tail = curNode;
    this.size--;
    return;
  }

  getNode(index: number): ListNode {
    let curNode: ListNode = new ListNode(0, this.head);
    for (let i = 0; i <= index; i++) {
      // 理论上不会出现 null
      curNode = curNode.next!;
    }
    return curNode;
  }
}

function deleteAtEndIndex(index: number, node: ListNode | null) {
  let dummyNode = new ListNode(0, node);
  let curNode: ListNode | null = node;
  let curNode1: ListNode | null = dummyNode;
  while (index-- && curNode) {
    curNode = curNode.next;
  }
  while (curNode) {
    curNode = curNode.next;
    curNode1 = curNode1?.next || null;
  }
  if (curNode1?.next) {
    curNode1.next = curNode1.next.next;
  }
  return dummyNode.next;
}

function deleteAtEndIndexWithStack(index: number, node: ListNode | null) {
  let dummyNode: ListNode | null = new ListNode(0, node);
  const arr: ListNode[] = [];
  let cur: ListNode | null = dummyNode;
  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }
  for (let i = 0; i < index; i++) {
    arr.pop();
  }
  let pre = arr.pop();
  if (pre?.next) pre.next = pre.next.next;
  const newNode = dummyNode.next;
  dummyNode = null;
  return newNode;
}

function intersectionNode(listA: ListNode | null, listB: ListNode | null) {
  let sizeA = 0;
  let sizeB = 0;
  let curA: ListNode | null = listA;
  let curB: ListNode | null = listB;
  while (curA) {
    sizeA++;
    curA = curA.next;
  }
  while (curB) {
    sizeB++;
    curB = curB.next;
  }
  curA = listA;
  curB = listB;
  if (sizeA < sizeB) {
    [sizeA, sizeB] = [sizeB, sizeA];
    [curA, curB] = [curB, curA];
  }
  let gap = sizeA - sizeB;
  while (gap-- && curA) {
    curA = curA.next;
  }
  while (curA && curB) {
    if (curA === curB) {
      return curA;
    }
    curA = curA.next;
    curB = curB.next;
  }
  return null;
}

function reverseLinkList(node: ListNode | null) {
  let pre: ListNode | null = null;
  let cur = node;
  while (cur) {
    let tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }
  return pre;
}
function reverseLinkList1(node: ListNode | null) {
  function recur(
    pre: ListNode | null,
    curNode: ListNode | null
  ): ListNode | null {
    if (curNode === null) return pre;
    let temp = curNode.next;
    curNode.next = pre;
    pre = curNode;
    return recur(pre, temp);
  }
  // let pre: ListNode | null = null;
  // let cur = node;
  // while (cur) {
  //   let tmp = cur.next;
  //   cur.next = pre;
  //   pre = cur;
  //   cur = tmp;
  // }
  return recur(null, node);
}
const list = new LinkList();
list.addAtHead(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
const node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
const node1 = new ListNode(5);
node1.next = new ListNode(6);
node1.next.next = new ListNode(4);
node1.next.next.next = new ListNode(4);
const node2 = new ListNode(7);
node2.next = new ListNode(8);
node2.next.next = new ListNode(9);
node2.next.next.next = new ListNode(4);

function circle(node: ListNode | null) {
  if (node === null) return null;
  const dummyNode = new ListNode(0, node);
  let fast: ListNode | null = dummyNode.next;
  let slow: ListNode | null = dummyNode.next;
  while (fast?.next) {
    fast = fast.next?.next;
    slow = slow?.next || null;
    if (fast === slow) {
      fast = dummyNode.next;
      while (fast !== slow) {
        fast = fast?.next || null;
        slow = slow?.next || null;
      }
      return slow;
    }
  }
}
node2.next.next.next = node;
let aaa = node2
while (aaa) {
  if (aaa.next === null) {
    aaa.next = node;
    break
  } else {
    aaa = aaa.next
  }
}
console.log(circle(node2)?.next?.next)

// node1.next.next = node
// node2.next.next.next.next = node
// console.log(JSON.stringify(intersectionNode(node1,node2)))
// console.log(JSON.stringify(list.head))
// console.log(JSON.stringify(reverseLinkList1(list.head)));
// console.log(JSON.stringify(deleteAtEndIndexWithStack(3, list.head)));
// export{}
