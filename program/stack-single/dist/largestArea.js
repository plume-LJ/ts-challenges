function largestRectangleArea(heights) {
    var resMax = 0;
    for (var i = 0, length = heights.length; i < length; i++) {
        // 左开右开
        var left = i - 1, right = i + 1;
        while (left >= 0 && heights[left] >= heights[i]) {
            left--;
        }
        while (right < length && heights[right] >= heights[i]) {
            right++;
        }
        resMax = Math.max(resMax, heights[i] * (right - left - 1));
    }
    return resMax;
}
;
function largestRectangleArea1(heights) {
    var length = heights.length;
    var leftHeightDp = [], rightHeightDp = [];
    leftHeightDp[0] = -1;
    rightHeightDp[length - 1] = length;
    for (var i = 1; i < length; i++) {
        var j = i - 1;
        while (j >= 0 && heights[i] <= heights[j]) {
            j = leftHeightDp[j];
        }
        leftHeightDp[i] = j;
    }
    for (var i = length - 2; i >= 0; i--) {
        var j = i + 1;
        while (j < length && heights[i] <= heights[j]) {
            j = rightHeightDp[j];
        }
        rightHeightDp[i] = j;
    }
    var resMax = 0;
    for (var i = 0; i < length; i++) {
        var area = heights[i] * (rightHeightDp[i] - leftHeightDp[i] - 1);
        resMax = Math.max(resMax, area);
    }
    return resMax;
}
;
function largestRectangleArea2(heights) {
    heights.push(0);
    var length = heights.length;
    // 栈底->栈顶：严格单调递增
    var stack = [];
    stack.push(0);
    var resMax = 0;
    for (var i = 1; i < length; i++) {
        var top = stack[stack.length - 1];
        if (heights[top] < heights[i]) {
            stack.push(i);
        }
        else if (heights[top] === heights[i]) {
            stack.pop();
            stack.push(i);
        }
        else {
            while (stack.length > 0 && heights[top] > heights[i]) {
                var mid = stack.pop();
                var left = stack.length > 0 ? stack[stack.length - 1] : -1;
                var w = i - left - 1;
                var h = heights[mid];
                resMax = Math.max(resMax, w * h);
                top = stack[stack.length - 1];
            }
            stack.push(i);
        }
    }
    return resMax;
}
;
