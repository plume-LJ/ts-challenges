function maxSubArray(nums) {
    var len = nums.length;
    if (len === 1)
        return nums[0];
    var dp = new Array(len);
    var resMax = dp[0] = nums[0];
    for (var i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        // 注意值为负数的情况
        if (dp[i] > resMax)
            resMax = dp[i];
    }
    return resMax;
}
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
