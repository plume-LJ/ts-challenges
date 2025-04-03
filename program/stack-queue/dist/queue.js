var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.stackIn = [];
        this.stackOut = [];
    }
    MyQueue.prototype.push = function (x) {
        this.stackIn.push(x);
    };
    MyQueue.prototype.pop = function () {
        if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
        return this.stackOut.pop();
    };
    MyQueue.prototype.peek = function () {
        var temp = this.pop();
        this.stackOut.push(temp);
        return temp;
    };
    MyQueue.prototype.empty = function () {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    };
    return MyQueue;
}());
var queue = new MyQueue;
queue.push(1);
queue.push(2);
queue.push(3);
queue.peek();
console.log(queue);
queue.pop();
console.log(queue);
