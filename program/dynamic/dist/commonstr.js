function longestCommonStr(s, l) {
    var m = s.length;
    var n = l.length;
    var maxLength = 0;
    var start = 0;
    var dp = Array.from({ length: m + 1 }, function () {
        return Array(n + 1).fill(0);
    });
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (s[i - 1] === l[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            // else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            if (dp[i][j] > maxLength) {
                start = i - dp[i][j];
                maxLength = dp[i][j];
            }
        }
    }
    console.log(dp);
    if (maxLength === 0)
        return "";
    return s.slice(start, start + maxLength);
}
console.log(longestCommonStr("abcde", "abce"));
