"use strict";
exports.__esModule = true;
function coinChange(nums, amount) {
    var dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = nums[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j - nums[i]] + 1, dp[j]);
            // if (dp[i - j] !== Infinity) {
            // }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
console.log(coinChange([1, 2, 5], 11));
