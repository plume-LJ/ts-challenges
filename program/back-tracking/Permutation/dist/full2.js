"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function permute(nums) {
    var resArr = [];
    var used = Array(nums.length).fill(false);
    nums.sort(function (a, b) { return a - b; });
    backTracking(nums, []);
    return resArr;
    function backTracking(nums, route) {
        if (route.length === nums.length) {
            resArr.push(__spreadArrays(route));
            return;
        }
        var tempVal;
        var set = new Set();
        for (var i = 0, length = nums.length; i < length; i++) {
            tempVal = nums[i];
            if (set.has(tempVal))
                continue;
            if (!used[i]) {
                set.add(tempVal);
                used[i] = true;
                route.push(tempVal);
                backTracking(nums, route);
                route.pop();
                used[i] = false;
            }
        }
    }
}
function permute1(nums) {
    var resArr = [];
    var used = Array(nums.length).fill(false);
    nums.sort(function (a, b) { return a - b; });
    backTracking(nums, []);
    return resArr;
    function backTracking(nums, route) {
        if (route.length === nums.length) {
            resArr.push(__spreadArrays(route));
            return;
        }
        var tempVal;
        for (var i = 0, length = nums.length; i < length; i++) {
            tempVal = nums[i];
            if (i > 0 && !used[i - 1] && nums[i - 1] === tempVal)
                continue;
            if (!used[i]) {
                used[i] = true;
                route.push(tempVal);
                backTracking(nums, route);
                route.pop();
                used[i] = false;
            }
        }
    }
}
console.log(permute([1, 1, 3]));
console.log(permute1([1, 1, 3]));
