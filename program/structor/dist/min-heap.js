var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [];
    }
    MinHeap.prototype.insert = function (value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
    };
    MinHeap.prototype.extractMin = function () {
        if (this.heap.length === 0)
            return undefined;
        var min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return min;
    };
    MinHeap.prototype.siftUp = function (index) {
        var _a;
        if (index === 0)
            return;
        var parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] > this.heap[index]) {
            _a = [this.heap[index], this.heap[parentIndex]], this.heap[parentIndex] = _a[0], this.heap[index] = _a[1];
            this.siftUp(parentIndex);
        }
    };
    MinHeap.prototype.siftDown = function (index) {
        var _a;
        var leftChildIndex = 2 * index + 1;
        var rightChildIndex = 2 * index + 2;
        var minIndex = index;
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
            minIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
            minIndex = rightChildIndex;
        }
        if (minIndex !== index) {
            _a = [this.heap[index], this.heap[minIndex]], this.heap[minIndex] = _a[0], this.heap[index] = _a[1];
            this.siftDown(minIndex);
        }
    };
    return MinHeap;
}());
