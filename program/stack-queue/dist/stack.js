var MyStack2 = /** @class */ (function () {
    function MyStack2() {
        this.queue = [];
        this.tempQueue = [];
    }
    MyStack2.prototype.push = function (x) {
        this.queue.push(x);
    };
    MyStack2.prototype.pop = function () {
        for (var i = 0, length = this.queue.length - 1; i < length; i++) {
            this.tempQueue.push(this.queue.shift());
        }
        var res = this.queue.pop();
        var temp = this.queue;
        this.queue = this.tempQueue;
        this.tempQueue = temp;
        return res;
    };
    MyStack2.prototype.top = function () {
        var res = this.pop();
        this.push(res);
        return res;
    };
    MyStack2.prototype.empty = function () {
        return this.queue.length === 0;
    };
    return MyStack2;
}());
var MyStack = /** @class */ (function () {
    function MyStack() {
        this.queue = [];
    }
    MyStack.prototype.push = function (x) {
        this.queue.push(x);
    };
    MyStack.prototype.pop = function () {
        // return this.queue.pop()!;
        for (var i = 0, length = this.queue.length - 1; i < length; i++) {
            this.queue.push(this.queue.shift());
        }
        return this.queue.shift();
    };
    MyStack.prototype.top = function () {
        var res = this.pop();
        this.push(res);
        return res;
    };
    MyStack.prototype.empty = function () {
        return this.queue.length === 0;
    };
    return MyStack;
}());
var stack = new MyStack();
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
