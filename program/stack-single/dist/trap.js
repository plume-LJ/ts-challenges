function trap(height) {
    var length = height.length;
    var stack = [];
    stack.push(0);
    var resVal = 0;
    for (var i = 1; i < length; i++) {
        var top = stack[stack.length - 1];
        if (height[top] > height[i]) {
            stack.push(i);
        }
        else if (height[top] === height[i]) {
            stack.pop();
            stack.push(i);
        }
        else {
            while (stack.length > 0 && height[top] < height[i]) {
                var mid = stack.pop();
                if (stack.length > 0) {
                    var left = stack[stack.length - 1];
                    var h = Math.min(height[left], height[i]) - height[mid];
                    var w = i - left - 1;
                    resVal += h * w;
                    top = stack[stack.length - 1];
                }
            }
            stack.push(i);
        }
    }
    return resVal;
}
;
function trap1(height) {
    var length = height.length;
    var leftMaxHeightDp = [], rightMaxHeightDp = [];
    leftMaxHeightDp[0] = height[0];
    rightMaxHeightDp[length - 1] = height[length - 1];
    for (var i = 1; i < length; i++) {
        leftMaxHeightDp[i] = Math.max(height[i], leftMaxHeightDp[i - 1]);
    }
    for (var i = length - 2; i >= 0; i--) {
        rightMaxHeightDp[i] = Math.max(height[i], rightMaxHeightDp[i + 1]);
    }
    var resVal = 0;
    for (var i = 0; i < length; i++) {
        resVal += Math.min(leftMaxHeightDp[i], rightMaxHeightDp[i]) - height[i];
    }
    return resVal;
}
;
function trap2(height) {
    var length = height.length;
    var resVal = 0;
    for (var i = 0; i < length; i++) {
        var leftMaxHeight = height[i], rightMaxHeight = height[i];
        var leftIndex = i - 1, rightIndex = i + 1;
        while (leftIndex >= 0) {
            if (height[leftIndex] > leftMaxHeight)
                leftMaxHeight = height[leftIndex];
            leftIndex--;
        }
        while (rightIndex < length) {
            if (height[rightIndex] > rightMaxHeight)
                rightMaxHeight = height[rightIndex];
            rightIndex++;
        }
        resVal += Math.min(leftMaxHeight, rightMaxHeight) - height[i];
    }
    return resVal;
}
;
