function canPartition(nums) {
    var sum = nums.reduce(function (acc, num) { return acc + num; }, 0);
    if (sum % 2 !== 0) {
        return false;
    }
    var target = sum / 2;
    var dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        for (var i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    console.log(dp);
    return dp[target];
}
console.log(canPartition([1, 5, 11, 5]));
