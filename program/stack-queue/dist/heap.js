/**
 * 最大堆
 * == 基础版（number，没有做泛型）
 */
var MaxBinaryHeap = /** @class */ (function () {
    function MaxBinaryHeap(data) {
        if (data === void 0) { data = []; }
        this.data = data;
        for (var i = data.length / 2; i >= 0; i--) {
            this.siftDown(i);
        }
    }
    /**
     * 获取元素个数
     * @return {number}
     */
    MaxBinaryHeap.prototype.getSize = function () {
        return this.data.length;
    };
    /**
     * 是否不包含任何元素
     * @return {boolean}
     */
    MaxBinaryHeap.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    /**
     * 获取当前结点的父结点索引
     * @param {number} i - 目标结点的索引
     * @return {number}
     */
    MaxBinaryHeap.prototype.getParentIndex = function (i) {
        if (i === 0) {
            throw new Error("Root element(index-0) doesn't has parent!");
        }
        return Math.floor((i - 1) / 2);
    };
    /**
     * 获取其左子结点的索引
     * @param {number} i - 目标结点的索引
     * @return {number}
     */
    MaxBinaryHeap.prototype.getLeftChildIndex = function (i) {
        return i * 2 + 1;
    };
    /**
     * 获取其右子结点的索引
     * @param {number} i - 目标结点的索引
     * @return {number}
     */
    MaxBinaryHeap.prototype.getRightChildIndex = function (i) {
        return i * 2 + 2;
    };
    /**
     * 向堆中添加新元素
     * @param {number} el - 新添加的元素
     */
    MaxBinaryHeap.prototype.add = function (el) {
        // 先将新元素添加到尾部
        this.data.push(el);
        // 再将该元素上浮到合适的位置
        this.siftUp(this.getSize() - 1);
    };
    /**
     * 查看当前堆中的最大元素
     * @return {number}
     */
    MaxBinaryHeap.prototype.findMax = function () {
        if (this.getSize() === 0) {
            throw new Error("Failed to execute, Heap is Empty!");
        }
        return this.data[0];
    };
    /**
     * 取出当前堆中的最大值
     * @return {number}
     */
    MaxBinaryHeap.prototype.extractMax = function () {
        var max = this.findMax();
        // 交换堆顶和堆尾元素
        this.swap(0, this.getSize() - 1);
        // 将当前最大元素移出堆
        this.data.pop();
        // 调整好堆
        this.siftDown(0);
        return max;
    };
    /**
     * 上浮当前元素到合适的位置
     * @param {number} i - 特定元素的位置
     */
    MaxBinaryHeap.prototype.siftUp = function (i) {
        var _a = this, data = _a.data, getParentIndex = _a.getParentIndex;
        while (i > 0 && data[i] > data[getParentIndex(i)]) {
            var parentIdx = getParentIndex(i);
            this.swap(i, parentIdx);
            i = parentIdx;
        }
    };
    /**
     * 下沉当前元素到合适的位置
     * @param {number} i - 特定元素的位置
     */
    MaxBinaryHeap.prototype.siftDown = function (i) {
        var _a = this, data = _a.data, getLeftChildIndex = _a.getLeftChildIndex, getRightChildIndex = _a.getRightChildIndex;
        var size = this.getSize();
        // 如果当前结点不是叶子结点
        //（如果是叶子结点，其左子结点是不存在，另外其左子索引即使存在也将越界）
        while (getLeftChildIndex(i) < size) {
            var j = getLeftChildIndex(i);
            // 如果左子结点存在，且其右子结点比左子结点要大，则更新j
            if (j + 1 < size && data[j + 1] > data[j]) {
                j = getRightChildIndex(i);
            }
            // 如果当前结点不小于左右子结点中的更大者，则中断（已经满足堆性质）
            if (data[i] >= data[j])
                break;
            this.swap(i, j);
            i = j;
        }
    };
    /**
     * 交换两个位置上的元素
     * @param {number} i - 待交换结点A
     * @param {number} j - 待交换结点B
     */
    MaxBinaryHeap.prototype.swap = function (i, j) {
        var size = this.getSize();
        if (i < 0 || j < 0 || i >= size || j >= size) {
            throw new RangeError("Index is not valid!");
        }
        var data = this.data;
        var t = data[i];
        data[i] = data[j];
        data[j] = t;
    };
    /**
     * 将数据以字符串的形式输出展示
     * @return {string}
     */
    MaxBinaryHeap.prototype.toString = function () {
        return "[" + this.data.toString() + "]";
    };
    return MaxBinaryHeap;
}());
var h = new MaxBinaryHeap([1, 2, 3, 8, 5, 6, 7, 8, 9]);
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
var MinBinaryHeap = /** @class */ (function () {
    function MinBinaryHeap() {
        this.data = [];
    }
    MinBinaryHeap.prototype.getSize = function () {
        return this.data.length;
    };
    MinBinaryHeap.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    MinBinaryHeap.prototype.getParentIndex = function (i) {
        if (i <= 0) {
            throw new RangeError("Root element has no parent!");
        }
        return Math.floor((i - 1) / 2);
    };
    MinBinaryHeap.prototype.getLeftChildIndex = function (i) {
        return i * 2 + 1;
    };
    MinBinaryHeap.prototype.getRightChildIndex = function (i) {
        return i * 2 + 2;
    };
    MinBinaryHeap.prototype.findMin = function () {
        if (this.getSize() === 0) {
            throw new Error("Empty heap!");
        }
        return this.data[0];
    };
    MinBinaryHeap.prototype.add = function (el) {
        this.data.push(el);
        this.siftUp(this.getSize() - 1);
    };
    MinBinaryHeap.prototype.siftUp = function (k) {
        var _a = this, data = _a.data, getParentIndex = _a.getParentIndex;
        while (k > 0 && data[getParentIndex(k)] > data[k]) {
            var parentIdx = getParentIndex(k);
            this.swap(k, parentIdx);
            k = parentIdx;
        }
    };
    MinBinaryHeap.prototype.extractMin = function () {
        var min = this.findMin();
        this.swap(0, this.getSize() - 1);
        this.data.pop();
        this.siftDown(0);
        return min;
    };
    MinBinaryHeap.prototype.siftDown = function (k) {
        var _a = this, data = _a.data, getLeftChildIndex = _a.getLeftChildIndex, getRightChildIndex = _a.getRightChildIndex;
        var size = this.getSize();
        while (getLeftChildIndex(k) < size) {
            var i = getLeftChildIndex(k);
            if (i + 1 < size && data[i] > data[i + 1]) {
                i = getRightChildIndex(i);
            }
            if (data[k] <= data[i]) {
                break;
            }
            this.swap(k, i);
            k = i;
        }
    };
    MinBinaryHeap.prototype.swap = function (i, j) {
        var data = this.data;
        var t = data[i];
        data[i] = data[j];
        data[j] = t;
    };
    return MinBinaryHeap;
}());
