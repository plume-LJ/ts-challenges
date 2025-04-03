function longestCommonSubsequence(text1, text2) {
    /**
        dp[i][j]: text1中前i-1个和text2中前j-1个，最长公共子序列的长度
     */
    var length1 = text1.length, length2 = text2.length;
    var dp = new Array(length1 + 1).fill(0)
        .map(function (_) { return new Array(length2 + 1).fill(0); });
    for (var i = 1; i <= length1; i++) {
        for (var j = 1; j <= length2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }
    return dp[length1][length2];
}
;
