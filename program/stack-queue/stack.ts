class MyStack2 {
  private queue: number[];
  private tempQueue: number[];
  constructor() {
    this.queue = [];
    this.tempQueue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    for (let i = 0, length = this.queue.length - 1; i < length; i++) {
      this.tempQueue.push(this.queue.shift()!);
    }
    let res: number = this.queue.pop()!;
    let temp: number[] = this.queue;
    this.queue = this.tempQueue;
    this.tempQueue = temp;
    return res;
  }

  top(): number {
    let res: number = this.pop();
    this.push(res);
    return res;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
class MyStack {
  private queue: number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    // return this.queue.pop()!;
    for (let i = 0, length = this.queue.length - 1; i < length; i++) {
      this.queue.push(this.queue.shift()!);
    }
    return this.queue.shift()!;
  }

  top(): number {
    let res: number = this.pop();
    this.push(res);
    return res;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.top();
console.log(stack);
stack.pop();
console.log(stack);
stack.push(4);
stack.push(5);
stack.pop();
console.log(stack);
