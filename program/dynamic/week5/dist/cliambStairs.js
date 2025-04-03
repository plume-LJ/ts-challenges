"use strict";
exports.__esModule = true;
function climbStairs(n, m) {
    var dp = Array.from({ length: n + 1 }, function () { return 0; });
    dp[1] = 1;
    dp[2] = 2;
    for (var i = 3; i <= n; i++) {
        for (var j = 1; j <= m; j++) {
            if (i - j >= 0)
                dp[i] += dp[i - j];
        }
        // dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log(climbStairs(4, 2));
