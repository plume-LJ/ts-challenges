"use strict";
exports.__esModule = true;
function getSingleStack(arr) {
    var len = arr.length;
    var stack = [];
    var result = Array.from({ length: len }, function () { return -1; });
    stack.push(0);
    for (var i = 1; i < len; i++) {
        var top = stack[stack.length - 1];
        if (arr[i] > arr[top]) {
            // result[top] = i;
            stack.push(i);
        }
        else if (arr[i] === arr[top]) {
            stack.push(i);
        }
        else {
            while (stack.length && arr[i] < arr[top]) {
                top = stack.pop();
                result[top] = i;
            }
            stack.push(i);
        }
    }
    console.log(stack);
    return result;
}
function getSingleStackDown(arr) {
    var len = arr.length;
    var stack = [];
    var result = Array.from({ length: len }, function () { return -1; });
    stack.push(0);
    for (var i = 1; i < len; i++) {
        var top = stack[stack.length - 1];
        if (arr[i] < arr[top]) {
            // result[top] = i;
            stack.push(i);
        }
        else if (arr[i] === arr[top]) {
            stack.push(i);
        }
        else {
            while (stack.length && arr[i] > arr[top]) {
                top = stack.pop();
                result[top] = i;
            }
            stack.push(i);
        }
    }
    return result;
}
console.log(getSingleStack([1, 5, 11, 5]));
console.log(getSingleStackDown([1, 5, 11, 5]));
var MonotonicStack = /** @class */ (function () {
    function MonotonicStack() {
        this.stack = [];
    }
    MonotonicStack.prototype.push = function (element) {
        while (this.stack.length > 0 &&
            this.stack[this.stack.length - 1] < element) {
            this.stack.pop();
        }
        this.stack.push(element);
    };
    MonotonicStack.prototype.pop = function () {
        return this.stack.pop();
    };
    MonotonicStack.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    MonotonicStack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    return MonotonicStack;
}());
var MonotonicStackDown = /** @class */ (function () {
    function MonotonicStackDown() {
        this.stack = [];
    }
    MonotonicStackDown.prototype.push = function (element) {
        while (this.stack.length > 0 &&
            this.stack[this.stack.length - 1] > element) {
            this.stack.pop();
        }
        this.stack.push(element);
    };
    MonotonicStackDown.prototype.pop = function () {
        return this.stack.pop();
    };
    MonotonicStackDown.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    MonotonicStackDown.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    return MonotonicStackDown;
}());
var arr = [1, 5, 11, 5];
var st = new MonotonicStack();
var std = new MonotonicStackDown();
for (var i = 0; i < 4; i++) {
    st.push(arr[i]);
    std.push(arr[i]);
    // console.log(st)
    // console.log(std)
}
console.log(st);
console.log(std);
