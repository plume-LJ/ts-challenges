function findTargetSumWays(nums, target) {
    // 把数组分成两个组合left, right.left + right = sum, left - right = target.
    var sum = nums.reduce(function (a, b) { return a + b; });
    if ((sum + target) % 2 || Math.abs(target) > sum)
        return 0;
    var left = (sum + target) / 2;
    // 将问题转化为装满容量为left的背包有多少种方法
    // dp[i]表示装满容量为i的背包有多少种方法
    var dp = new Array(left + 1).fill(0);
    dp[0] = 1; // 装满容量为0的背包有1种方法（什么也不装）
    for (var i = 0; i < nums.length; i++) {
        for (var j = left; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
        console.log(dp);
    }
    return dp[left];
}
;
console.log(findTargetSumWays([1, 1, 1, 1, 1], -1));
