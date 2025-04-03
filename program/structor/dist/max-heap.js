var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.heap = [];
    }
    MaxHeap.prototype.insert = function (value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
    };
    MaxHeap.prototype.extractMax = function () {
        if (this.heap.length === 0)
            return undefined;
        var max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return max;
    };
    MaxHeap.prototype.siftUp = function (index) {
        var _a;
        if (index === 0)
            return;
        var parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] < this.heap[index]) {
            _a = [this.heap[index], this.heap[parentIndex]], this.heap[parentIndex] = _a[0], this.heap[index] = _a[1];
            this.siftUp(parentIndex);
        }
    };
    MaxHeap.prototype.siftDown = function (index) {
        var _a;
        var leftChildIndex = 2 * index + 1;
        var rightChildIndex = 2 * index + 2;
        var maxIndex = index;
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
            maxIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
            maxIndex = rightChildIndex;
        }
        if (maxIndex !== index) {
            _a = [this.heap[index], this.heap[maxIndex]], this.heap[maxIndex] = _a[0], this.heap[index] = _a[1];
            this.siftDown(maxIndex);
        }
    };
    return MaxHeap;
}());
