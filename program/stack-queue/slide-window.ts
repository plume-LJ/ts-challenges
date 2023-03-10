class DeQueue {
  private queue: number[];
  constructor() {
      this.queue = [];
  };
  /** 入队：value如果大于队尾元素，则将队尾元素删除，直至队尾元素大于value，或者队列为空 */
  public enqueue(value: number): void {
      let back: number | undefined = this.queue[this.queue.length - 1];
      while (back !== undefined && back < value) {
          this.queue.pop();
          back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
  };
  /** 出队：只有当队头元素等于value，才出队 */
  public dequeue(value: number): void {
      let top: number | undefined = this.top();
      if (top !== undefined && top === value) {
          this.queue.shift();
      }
  }
  public top(): number | undefined {
      return this.queue[0];
  }
}
class UpQueue {
  private queue: number[];
  constructor() {
      this.queue = [];
  };
  /** 入队：value如果大于队尾元素，则将队尾元素删除，直至队尾元素大于value，或者队列为空 */
  public enqueue(value: number): void {
      let back: number | undefined = this.queue[this.queue.length - 1];
      while (back !== undefined && back > value) {
          this.queue.pop();
          back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
  };
  /** 出队：只有当队头元素等于value，才出队 */
  public dequeue(value: number): void {
      let top: number | undefined = this.top();
      if (top !== undefined && top === value) {
          this.queue.shift();
      }
  }
  public top(): number | undefined {
      return this.queue[0];
  }
}
function maxSlidingWindow(nums: number[], k: number): number[] {
  /** 单调递减队列 */
  
  const helperQueue: DeQueue = new DeQueue();
  let i: number = 0,
      j: number = 0;
  let resArr: number[] = [];
  while (j < k) {
      helperQueue.enqueue(nums[j++]);
  }
  resArr.push(helperQueue.top()!);
  while (j < nums.length) {
      helperQueue.enqueue(nums[j]);
      helperQueue.dequeue(nums[i]);
      resArr.push(helperQueue.top()!);
      j++, i++;
  }
  return resArr;
};

function minSlidingWindow(nums: number[], k: number): number[] {
  /** 单调递减队列 */
  
  const helperQueue: UpQueue = new UpQueue();
  let i: number = 0,
      j: number = 0;
  let resArr: number[] = [];
  while (j < k) {
      helperQueue.enqueue(nums[j++]);
  }
  resArr.push(helperQueue.top()!);
  while (j < nums.length) {
      helperQueue.enqueue(nums[j]);
      helperQueue.dequeue(nums[i]);
      resArr.push(helperQueue.top()!);
      j++, i++;
  }
  return resArr;
};

console.log(maxSlidingWindow([1,-1,3,-4,2,34,56,732,5],3))
console.log(minSlidingWindow([1,-1,3,-4,2,34,56,732,5],3))