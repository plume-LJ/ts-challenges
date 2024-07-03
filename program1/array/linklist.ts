class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

class MyLinkList {
  private head: ListNode | null
  private tail: ListNode | null
  private length: number
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val: number): void {
    const node = new ListNode(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail!.next = node
      this.tail = node
    }
    this.length++
  }

  pop(): ListNode | null {
    if (!this.head) return null
    const node = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head!.next
    }
    this.length--
    return node
  }

  getNode(index: number): ListNode | null {
    if (index < 0 || index >= this.length) return null
    let node = this.head
    for (let i = 0; i < index; i++) {
      node = node!.next
    }
    return node
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) return
    if (index === this.length) {
      this.push(val)
      return
    }
    const node = this.getNode(index)
    const newNode = new ListNode(val)
    newNode.next = node!.next
    node!.next = newNode
    this.length++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) return
    if (index === this.length - 1) {
      this.pop()
      return
    }
    const node = this.getNode(index)
    node!.next = node!.next!.next
    this.length--
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val)
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.length, val)
  }
}

export {}