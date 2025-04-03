function climbStairs(n) {
    if (n <= 1)
        return n;
    var dp = Array.from({ length: n + 1 }, function () { return 0; });
    dp[1] = 1;
    dp[2] = 2;
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
function climbStairs1(n, m) {
    if (n <= 1)
        return n;
    var dp = Array.from({ length: n + 1 }, function () { return 0; });
    dp[0] = 1;
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= m; j++) {
            if (i - j >= 0)
                dp[i] += dp[i - j];
        }
        // dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log(climbStairs1(4, 2));
