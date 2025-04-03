function dailyTemperatures(temperatures) {
    var length = temperatures.length;
    var stack = [];
    var resArr = new Array(length).fill(0);
    stack.push(0);
    for (var i = 1; i < length; i++) {
        var top = stack[stack.length - 1];
        while (stack.length > 0 &&
            temperatures[top] < temperatures[i]) {
            resArr[top] = i - top;
            stack.pop();
            top = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return resArr;
}
;
var dailyTemperatures1 = function (temperatures) {
    var n = temperatures.length;
    var res = Array(n).fill(0);
    var stack = []; // 递增栈：用于存储元素右面第一个比他大的元素下标
    stack.push(0);
    for (var i = 1; i < n; i++) {
        // 栈顶元素
        var top = stack[stack.length - 1];
        if (temperatures[i] < temperatures[top]) {
            stack.push(i);
        }
        else if (temperatures[i] === temperatures[top]) {
            stack.push(i);
        }
        else {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                var top_1 = stack.pop();
                res[top_1] = i - top_1;
            }
            stack.push(i);
        }
    }
    return res;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
