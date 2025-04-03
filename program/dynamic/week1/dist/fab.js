function fab(n) {
    var dp = Array.from({ length: n + 1 }, function () { return 0; });
    dp[0] = 0;
    dp[1] = 1;
    for (var i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log(fab(6));
