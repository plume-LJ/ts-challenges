"use strict";
exports.__esModule = true;
exports.findDuplicate2 = exports.findDuplicate = void 0;
function findDuplicate(nums, nums1) {
    var dp = new Array(nums.length + 1).fill(0).map(function () { return new Array(nums1.length + 1).fill(0); });
    var resMax = 0;
    for (var i = 1; i <= nums.length; i++) {
        for (var j = 1; j <= nums1.length; j++) {
            if (nums[i - 1] === nums1[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                resMax = Math.max(resMax, dp[i][j]);
            }
        }
    }
    return resMax;
}
exports.findDuplicate = findDuplicate;
function findDuplicate2(nums, nums1) {
    var dp = new Array(nums.length + 1).fill(0);
    var resMax = 0;
    for (var i = 1; i <= nums.length; i++) {
        for (var j = nums1.length; j >= 1; j--) {
            if (nums[i - 1] === nums1[j - 1]) {
                dp[j] = dp[j - 1] + 1;
                resMax = Math.max(resMax, dp[j]);
            }
            else {
                dp[j] = 0;
            }
        }
    }
    return resMax;
}
exports.findDuplicate2 = findDuplicate2;
console.log(findDuplicate([1, 3, 4, 2, 2], [3, 1, 3, 4, 2]));
console.log(findDuplicate2([1, 3, 4, 2, 2], [3, 1, 3, 4, 2]));
