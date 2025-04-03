var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function subsetsWithDup(nums) {
    nums.sort(function (a, b) { return a - b; });
    var resArr = [];
    backTraking(nums, 0, []);
    return resArr;
    function backTraking(nums, startIndex, route) {
        resArr.push(__spreadArrays(route));
        var length = nums.length;
        if (startIndex === length)
            return;
        for (var i = startIndex; i < length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1])
                continue;
            route.push(nums[i]);
            backTraking(nums, i + 1, route);
            route.pop();
        }
    }
}
// 使用set去重版本
function subsetsWithDupSet(nums) {
    var result = [];
    var path = [];
    // 去重之前先排序
    nums.sort(function (a, b) { return a - b; });
    function backTracking(startIndex) {
        // 收集结果
        result.push(__spreadArrays(path));
        // 此处不返回也可以因为，每次递归都会使startIndex + 1，当这个数大到nums.length的时候就不会进入递归了。
        if (startIndex === nums.length) {
            return;
        }
        // 定义每一个树层的set集合
        var set = new Set();
        for (var i = startIndex; i < nums.length; i++) {
            // 去重
            if (set.has(nums[i])) {
                continue;
            }
            set.add(nums[i]);
            path.push(nums[i]);
            backTracking(i + 1);
            // 回溯
            path.pop();
        }
    }
    backTracking(0);
    return result;
}
console.log(subsetsWithDupSet([1, 2, 2]));
console.log(subsetsWithDup([1, 2, 2]));
