var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function subsets(nums) {
    var resArr = [];
    backTracking(nums, 0, []);
    return resArr;
    function backTracking(nums, startIndex, route) {
        resArr.push(__spreadArrays(route));
        var length = nums.length;
        if (startIndex === length)
            return; // 终止条件可以不加
        for (var i = startIndex; i < length; i++) {
            route.push(nums[i]);
            backTracking(nums, i + 1, route);
            route.pop();
        }
    }
}
;
console.log(subsets([1, 2, 3]));
