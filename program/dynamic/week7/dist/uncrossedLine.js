function maxUncrossedLines(nums1, nums2) {
    /**
        dp[i][j]: nums1前i-1个，nums2前j-1个，最大连线数
     */
    var length1 = nums1.length, length2 = nums2.length;
    var dp = new Array(length1 + 1).fill(0)
        .map(function (_) { return new Array(length2 + 1).fill(0); });
    for (var i = 1; i <= length1; i++) {
        for (var j = 1; j <= length2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[length1][length2];
}
;
function maxUncrossedLines1(nums1, nums2) {
    var len1 = nums1.length;
    var len2 = nums2.length;
    var dp = new Array(len2 + 1).fill(0);
    for (var i = 1; i <= len1; i++) {
        var prev = 0;
        var temp = 0;
        for (var j = 1; j <= len2; j++) {
            // 备份一下当前状态（经过上层迭代后的）
            temp = dp[j];
            // prev 相当于 dp[j-1]（累加了上层的状态）
            // 如果单纯 dp[j-1] 则不会包含上层状态
            if (nums1[i - 1] === nums2[j - 1])
                dp[j] = prev + 1;
            // dp[j] 表示之前的 dp[i][j-1]，dp[j-1] 表示 dp[i-1][j]
            else
                dp[j] = Math.max(dp[j], dp[j - 1]);
            // 继续使用上一层状态更新参数用于当前层下一个状态
            prev = temp;
        }
    }
    return dp[len2];
}
