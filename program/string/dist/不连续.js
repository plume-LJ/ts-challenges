function findLengthOfLCIS(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var dp = new Array(nums.length).fill(1);
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        }
        for (var j = i - dp[i - 1]; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max.apply(Math, dp);
}
function lengthOfLIS(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var dp = new Array(nums.length).fill(1);
    var maxans = 1;
    for (var i = 1; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxans = Math.max(maxans, dp[i]);
    }
    return maxans;
}
console.log(lengthOfLIS([1, 3, 5, 4, 7]));
