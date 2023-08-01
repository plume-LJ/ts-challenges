class MaxHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  public insert(value: number): void {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  public extractMax(): number | undefined {
    if (this.heap.length === 0) return undefined;

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.siftDown(0);

    return max;
  }

  private siftUp(index: number): void {
    if (index === 0) return;

    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex] < this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      this.siftUp(parentIndex);
    }
  }

  private siftDown(index: number): void {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let maxIndex = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
      maxIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
      maxIndex = rightChildIndex;
    }

    if (maxIndex !== index) {
      [this.heap[maxIndex], this.heap[index]] = [this.heap[index], this.heap[maxIndex]];
      this.siftDown(maxIndex);
    }
  }
}
