function combineSum(nums, target) {
    var dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    // for (let j = target; j>=0;j--) {
    //   for (let i = 1; i<nums.length; i++) {
    //     if (j >= nums[i]) dp[j] += dp[j - nums[i]]
    //   }
    // }
    for (var j = 0; j <= target; j++) {
        for (var i = 0; i < nums.length; i++) {
            if (j >= nums[i])
                dp[j] += dp[j - nums[i]];
        }
    }
    return dp[target];
}
console.log(combineSum([1, 2, 3], 4));
