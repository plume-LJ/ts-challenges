function minCostClimbingStairs(cost) {
    var n = cost.length;
    var dp = Array.from({ length: n + 1 }, function () { return 0; });
    dp[0] = 0;
    dp[1] = 0;
    for (var i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[n];
}
;
