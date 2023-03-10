/**
 * 最大堆
 * == 基础版（number，没有做泛型）
 */
class MaxBinaryHeap {
  private data: number[];

  public constructor(data: number[] = []) {
    this.data = data;
    
    for(let i = data.length/2;i>=0;i--) {
      this.siftDown(i)
    }
  }

  /**
   * 获取元素个数
   * @return {number}
   */
  public getSize(): number {
    return this.data.length;
  }

  /**
   * 是否不包含任何元素
   * @return {boolean}
   */
  public isEmpty(): boolean {
    return this.data.length === 0;
  }

  /**
   * 获取当前结点的父结点索引
   * @param {number} i - 目标结点的索引
   * @return {number}
   */
  private getParentIndex(i: number): number {
    if (i === 0) {
      throw new Error("Root element(index-0) doesn't has parent!");
    }
    return Math.floor((i - 1) / 2);
  }

  /**
   * 获取其左子结点的索引
   * @param {number} i - 目标结点的索引
   * @return {number}
   */
  private getLeftChildIndex(i: number): number {
    return i * 2 + 1;
  }

  /**
   * 获取其右子结点的索引
   * @param {number} i - 目标结点的索引
   * @return {number}
   */
  private getRightChildIndex(i: number): number {
    return i * 2 + 2;
  }

  /**
   * 向堆中添加新元素
   * @param {number} el - 新添加的元素
   */
  public add(el: number): void {
    // 先将新元素添加到尾部
    this.data.push(el);
    // 再将该元素上浮到合适的位置
    this.siftUp(this.getSize() - 1);
  }

  /**
   * 查看当前堆中的最大元素
   * @return {number}
   */
  public findMax(): number {
    if (this.getSize() === 0) {
      throw new Error("Failed to execute, Heap is Empty!");
    }
    return this.data[0];
  }

  /**
   * 取出当前堆中的最大值
   * @return {number}
   */
  public extractMax(): number {
    const max = this.findMax();
    // 交换堆顶和堆尾元素
    this.swap(0, this.getSize() - 1);
    // 将当前最大元素移出堆
    this.data.pop();
    // 调整好堆
    this.siftDown(0);

    return max;
  }

  /**
   * 上浮当前元素到合适的位置
   * @param {number} i - 特定元素的位置
   */
  private siftUp(i: number): void {
    const { data, getParentIndex } = this;
    while (i > 0 && data[i] > data[getParentIndex(i)]) {
      const parentIdx = getParentIndex(i);
      this.swap(i, parentIdx);
      i = parentIdx;
    }
  }

  /**
   * 下沉当前元素到合适的位置
   * @param {number} i - 特定元素的位置
   */
  private siftDown(i: number): void {
    const { data, getLeftChildIndex, getRightChildIndex } = this;
    const size = this.getSize();
    // 如果当前结点不是叶子结点
    //（如果是叶子结点，其左子结点是不存在，另外其左子索引即使存在也将越界）
    while (getLeftChildIndex(i) < size) {
      let j = getLeftChildIndex(i);
      // 如果左子结点存在，且其右子结点比左子结点要大，则更新j
      if (j + 1 < size && data[j + 1] > data[j]) {
        j = getRightChildIndex(i);
      }
      // 如果当前结点不小于左右子结点中的更大者，则中断（已经满足堆性质）
      if (data[i] >= data[j]) break;
      this.swap(i, j);
      i = j;
    }
  }

  /**
   * 交换两个位置上的元素
   * @param {number} i - 待交换结点A
   * @param {number} j - 待交换结点B
   */
  private swap(i: number, j: number): void {
    const size = this.getSize();
    if (i < 0 || j < 0 || i >= size || j >= size) {
      throw new RangeError("Index is not valid!");
    }
    const data = this.data;
    const t = data[i];
    data[i] = data[j];
    data[j] = t;
  }

  /**
   * 将数据以字符串的形式输出展示
   * @return {string}
   */
  public toString(): string {
    return "[" + this.data.toString() + "]";
  }
}

const h = new MaxBinaryHeap([1, 2, 3, 8, 5, 6, 7, 8, 9]);
// h.add(0);
// h.add(5);
// h.add(1);
// h.add(4);

console.log(h.toString());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.toString());

// 输出如下：
// [5,4,1,0]
// 5
// 4
// 1
// 0
// []

class MinBinaryHeap {
  private data: number[];
  constructor() {
    this.data = [];
  }
  public getSize(): number {
    return this.data.length;
  }
  public isEmpty(): boolean {
    return this.data.length === 0;
  }
  private getParentIndex(i: number): number {
    if (i <= 0) {
      throw new RangeError("Root element has no parent!");
    }
    return Math.floor((i - 1) / 2);
  }
  private getLeftChildIndex(i: number): number {
    return i * 2 + 1;
  }
  private getRightChildIndex(i: number): number {
    return i * 2 + 2;
  }
  public findMin(): number {
    if (this.getSize() === 0) {
      throw new Error("Empty heap!");
    }
    return this.data[0];
  }
  public add(el: number): void {
    this.data.push(el);
    this.siftUp(this.getSize() - 1);
  }
  private siftUp(k: number): void {
    const { data, getParentIndex } = this;
    while (k > 0 && data[getParentIndex(k)] > data[k]) {
      const parentIdx = getParentIndex(k);
      this.swap(k, parentIdx);
      k = parentIdx;
    }
  }
  public extractMin(): number {
    const min = this.findMin();
    this.swap(0, this.getSize() - 1);
    this.data.pop();
    this.siftDown(0);
    return min;
  }
  private siftDown(k: number): void {
    const { data, getLeftChildIndex, getRightChildIndex } = this;
    const size = this.getSize();
    while (getLeftChildIndex(k) < size) {
      let i = getLeftChildIndex(k);
      if (i + 1 < size && data[i] > data[i + 1]) {
        i = getRightChildIndex(i);
      }
      if (data[k] <= data[i]) {
        break;
      }
      this.swap(k, i);
      k = i;
    }
  }
  private swap(i: number, j: number): void {
    const { data } = this;
    const t = data[i];
    data[i] = data[j];
    data[j] = t;
  }
}
