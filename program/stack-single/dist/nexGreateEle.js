function nextGreaterElement(nums1, nums2) {
    var resArr = new Array(nums1.length).fill(-1);
    var stack = [];
    var helperMap = new Map();
    nums1.forEach(function (num, index) {
        helperMap.set(num, index);
    });
    stack.push(0);
    for (var i = 1, length = nums2.length; i < length; i++) {
        var top = stack[stack.length - 1];
        while (stack.length > 0 && nums2[top] < nums2[i]) {
            var index = helperMap.get(nums2[top]);
            if (index !== undefined) {
                resArr[index] = nums2[i];
            }
            stack.pop();
            top = stack[stack.length - 1];
        }
        if (helperMap.get(nums2[i]) !== undefined) {
            stack.push(i);
        }
    }
    return resArr;
}
;
function nextGreaterElements(nums) {
    var length = nums.length;
    var stack = [];
    stack.push(0);
    var resArr = new Array(length).fill(-1);
    for (var i = 1; i < length * 2; i++) {
        var index = i % length;
        var top = stack[stack.length - 1];
        while (stack.length > 0 && nums[top] < nums[index]) {
            resArr[top] = nums[index];
            stack.pop();
            top = stack[stack.length - 1];
        }
        if (i < length) {
            stack.push(i);
        }
    }
    return resArr;
}
;
