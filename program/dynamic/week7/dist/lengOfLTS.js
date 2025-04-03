function lengthOfLIS(nums) {
    /**
      dp[i]: 前i个元素中，以nums[i]结尾，最长子序列的长度
   */
    var dp = new Array(nums.length).fill(1);
    var resMax = 0;
    for (var i = 0, length = nums.length; i < length; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        resMax = Math.max(resMax, dp[i]);
    }
    return resMax;
}
function lengthOfLIS2(nums) {
    /**
      dp[i]: 前i个元素中，以nums[i]结尾，最长子序列的长度
   */
    var dp = new Array(nums.length).fill(1);
    var resMax = 0;
    for (var i = 1, length = nums.length; i < length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        }
        resMax = Math.max(resMax, dp[i]);
    }
    return resMax;
}
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18]));
