"use strict";
exports.__esModule = true;
function integerBreak(n) {
    var dp = Array.from({ length: n + 1 }, function () { return 0; });
    dp[2] = 1;
    for (var i = 3; i <= n; i++) {
        for (var j = 1; j < i - 1; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
}
console.log(integerBreak(5));
