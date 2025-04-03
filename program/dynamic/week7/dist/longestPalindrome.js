function longestPalindromeSubseq(s) {
    /**
      dp[i][j]：[i,j]区间内，最长回文子序列的长度
   */
    var length = s.length;
    var dp = new Array(length)
        .fill(0)
        .map(function (_) { return new Array(length).fill(0); });
    for (var i = 0; i < length; i++) {
        dp[i][i] = 1;
    }
    // 自下而上，自左往右遍历
    for (var i = length - 1; i >= 0; i--) {
        for (var j = i + 1; j < length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            }
            else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
            }
        }
    }
    return dp[0][length - 1];
}
console.log(longestPalindromeSubseq('bbbab'));
