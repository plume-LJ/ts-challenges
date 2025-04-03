var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function topKFrequent1(nums, k) {
    var countMap = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    // tS没有最小堆的数据结构，所以直接对整个数组进行排序，取前k个元素
    return __spreadArrays(countMap.entries()).sort(function (a, b) { return b[1] - a[1]; })
        .slice(0, k)
        .map(function (i) { return i[0]; });
}
;
