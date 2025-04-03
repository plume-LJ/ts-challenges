var DeQueue = /** @class */ (function () {
    function DeQueue() {
        this.queue = [];
    }
    ;
    /** 入队：value如果大于队尾元素，则将队尾元素删除，直至队尾元素大于value，或者队列为空 */
    DeQueue.prototype.enqueue = function (value) {
        var back = this.queue[this.queue.length - 1];
        while (back !== undefined && back < value) {
            this.queue.pop();
            back = this.queue[this.queue.length - 1];
        }
        this.queue.push(value);
    };
    ;
    /** 出队：只有当队头元素等于value，才出队 */
    DeQueue.prototype.dequeue = function (value) {
        var top = this.top();
        if (top !== undefined && top === value) {
            this.queue.shift();
        }
    };
    DeQueue.prototype.top = function () {
        return this.queue[0];
    };
    return DeQueue;
}());
var UpQueue = /** @class */ (function () {
    function UpQueue() {
        this.queue = [];
    }
    ;
    /** 入队：value如果大于队尾元素，则将队尾元素删除，直至队尾元素大于value，或者队列为空 */
    UpQueue.prototype.enqueue = function (value) {
        var back = this.queue[this.queue.length - 1];
        while (back !== undefined && back > value) {
            this.queue.pop();
            back = this.queue[this.queue.length - 1];
        }
        this.queue.push(value);
    };
    ;
    /** 出队：只有当队头元素等于value，才出队 */
    UpQueue.prototype.dequeue = function (value) {
        var top = this.top();
        if (top !== undefined && top === value) {
            this.queue.shift();
        }
    };
    UpQueue.prototype.top = function () {
        return this.queue[0];
    };
    return UpQueue;
}());
function maxSlidingWindow(nums, k) {
    /** 单调递减队列 */
    var helperQueue = new DeQueue();
    var i = 0, j = 0;
    var resArr = [];
    while (j < k) {
        helperQueue.enqueue(nums[j++]);
    }
    resArr.push(helperQueue.top());
    while (j < nums.length) {
        helperQueue.enqueue(nums[j]);
        helperQueue.dequeue(nums[i]);
        resArr.push(helperQueue.top());
        j++, i++;
    }
    return resArr;
}
;
function minSlidingWindow(nums, k) {
    /** 单调递减队列 */
    var helperQueue = new UpQueue();
    var i = 0, j = 0;
    var resArr = [];
    while (j < k) {
        helperQueue.enqueue(nums[j++]);
    }
    resArr.push(helperQueue.top());
    while (j < nums.length) {
        helperQueue.enqueue(nums[j]);
        helperQueue.dequeue(nums[i]);
        resArr.push(helperQueue.top());
        j++, i++;
    }
    return resArr;
}
;
console.log(maxSlidingWindow([1, -1, 3, -4, 2, 34, 56, 732, 5], 3));
console.log(minSlidingWindow([1, -1, 3, -4, 2, 34, 56, 732, 5], 3));
