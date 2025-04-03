var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function twoSum(arr, i, target) {
    if (i === void 0) { i = 0; }
    var len = arr.length;
    // let i = 0;
    var j = len - 1;
    var res = [];
    while (i < j) {
        var sum = arr[i] + arr[j];
        if (sum > target) {
            while (arr[j] === arr[j - 1])
                j--;
            j--;
        }
        else if (sum < target) {
            while (arr[i] === arr[i + 1])
                i++;
            i++;
        }
        else {
            res.push([arr[i], arr[j]]);
            while (arr[i] === arr[i + 1])
                i++;
            while (arr[j] === arr[j - 1])
                j--;
            i++;
            j--;
        }
    }
    return res;
}
function nSumTarget(nums, n, start, target) {
    // 前提：nums要先排序好
    var res = [];
    if (n === 2) {
        res = twoSum(nums, start, target);
    }
    else {
        for (var i = start; i < nums.length; i++) {
            // 递归求(n - 1)sum
            var subRes = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
            for (var j = 0; j < subRes.length; j++) {
                res.push(__spreadArrays([nums[i]], subRes[j]));
            }
            // 跳过相同元素
            while (nums[i] === nums[i + 1])
                i++;
        }
    }
    return res;
}
function threeSum1(arr, target) {
    return nSumTarget(arr.sort(function (a, b) { return a - b; }), 3, 0, target);
}
console.log(threeSum1([1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 8], 13));
