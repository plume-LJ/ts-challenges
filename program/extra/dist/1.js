var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var countSubarrays = function (nums, k) {
    var n = nums.length;
    var kIndex = -1;
    for (var i = 0; i < n; i++) {
        if (nums[i] === k) {
            kIndex = i;
            break;
        }
    }
    var ans = 0;
    var counts = new Map();
    counts.set(0, 1);
    var sum = 0;
    for (var i = 0; i < n; i++) {
        // @ts-ignore
        sum += sign(nums[i] - k);
        if (i < kIndex) {
            counts.set(sum, (counts.get(sum) || 0) + 1);
        }
        else {
            var prev0 = (counts.get(sum) || 0);
            var prev1 = (counts.get(sum - 1) || 0);
            ans += prev0 + prev1;
        }
    }
    return ans;
};
var sign = function (num) {
    if (num === 0) {
        return 0;
    }
    return num > 0 ? 1 : -1;
};
var countSubarrays1 = function (nums, k) {
    var n = nums.length;
    var kIndex = -1;
    for (var i = 0; i < n; i++) {
        if (nums[i] === k) {
            kIndex = i;
            break;
        }
    }
    var ans = 0;
    var result = [];
    var counts = new Map();
    counts.set(0, [-1]);
    var sum = 0;
    var _loop_1 = function (i) {
        // @ts-ignore
        sum += sign(nums[i] - k);
        if (i < kIndex) {
            counts.set(sum, __spreadArrays((counts.get(sum) || []), [i]));
        }
        else {
            var prev0 = counts.get(sum) || [];
            var prev1 = counts.get(sum - 1) || [];
            // console.log(prev0, prev1)
            result.push.apply(result, prev0.concat(prev1).map(function (item) { return nums.slice(item + 1, i + 1); }));
            // ans += prev0 + prev1;
        }
    };
    for (var i = 0; i < n; i++) {
        _loop_1(i);
    }
    console.log(counts);
    return result;
};
console.log(countSubarrays1([4, 6, 2, 1, 5, 3, 7, 8], 5));
console.log(countSubarrays([4, 6, 2, 1, 5, 3, 7, 8], 5));
