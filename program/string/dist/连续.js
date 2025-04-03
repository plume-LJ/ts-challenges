"use strict";
exports.__esModule = true;
function findLengthOfLCIS(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var count = 1;
    var maxCount = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            count++;
            maxCount = Math.max(maxCount, count);
        }
        else {
            count = 1;
        }
    }
    return maxCount;
}
function findLengthOfLCIS1(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var dp = new Array(nums.length).fill(1);
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        }
    }
    return Math.max.apply(Math, dp);
}
