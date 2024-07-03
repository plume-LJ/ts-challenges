function getSingleStack(arr: number[]) {
  const len = arr.length;
  const stack: number[] = [];
  const result = Array.from({ length: len }, () => -1);
  stack.push(0);
  for (let i = 1; i < len; i++) {
    let top = stack[stack.length - 1]!;
    if (arr[i] > arr[top]) {
      // result[top] = i;
      stack.push(i);
    } else if (arr[i] === arr[top]) {
      stack.push(i);
    } else {
      while (stack.length && arr[i] < arr[top]) {
        top = stack.pop()!;
        result[top] = i;
      }
      stack.push(i);
    }
  }
  console.log(stack);
  return result;
}

function getSingleStackDown(arr: number[]) {
  const len = arr.length;
  const stack: number[] = [];
  const result = Array.from({ length: len }, () => -1);
  stack.push(0);
  for (let i = 1; i < len; i++) {
    let top = stack[stack.length - 1];
    if (arr[i] < arr[top]) {
      // result[top] = i;
      stack.push(i);
    } else if (arr[i] === arr[top]) {
      stack.push(i);
    } else {
      while (stack.length && arr[i] > arr[top]) {
        top = stack.pop()!;
        result[top] = i;
      }
      stack.push(i);
    }
  }
  return result;
}

console.log(getSingleStack([1, 5, 11, 5]));
console.log(getSingleStackDown([1, 5, 11, 5]));

class MonotonicStack {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  push(element: number): void {
    while (
      this.stack.length > 0 &&
      this.stack[this.stack.length - 1] < element
    ) {
      this.stack.pop();
    }
    this.stack.push(element);
  }

  pop(): number | undefined {
    return this.stack.pop();
  }

  peek(): number | undefined {
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}
class MonotonicStackDown {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  push(element: number): void {
    while (
      this.stack.length > 0 &&
      this.stack[this.stack.length - 1] > element
    ) {
      this.stack.pop();
    }
    this.stack.push(element);
  }

  pop(): number | undefined {
    return this.stack.pop();
  }

  peek(): number | undefined {
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}
let arr = [1, 5, 11, 5];
const st = new MonotonicStack();
const std = new MonotonicStackDown();
for (let i = 0; i < 4; i++) {
  st.push(arr[i]);
  std.push(arr[i]);
  // console.log(st)
  // console.log(std)
}
console.log(st);
console.log(std);

export {};
