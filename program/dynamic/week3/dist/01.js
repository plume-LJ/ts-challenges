"use strict";
exports.__esModule = true;
function badge(weights, value, capacity) {
    var n = weights.length;
    var dp = Array.from({ length: n }, function () { return Array(capacity + 1).fill(0); });
    for (var i = weights[0]; i < capacity; i++) {
        dp[0][i] = value[0];
    }
    for (var i = 1; i < n; i++) {
        for (var j = 0; j <= capacity; j++) {
            if (j < weights[i])
                dp[i][j] = dp[i - 1][j];
            else
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i]] + value[i]);
        }
    }
    return dp[n - 1][capacity];
}
console.log(badge([2, 3, 4, 5], [3, 4, 5, 6], 8));
function badge1(weights, value, capacity) {
    var n = weights.length;
    var dp = Array.from({ length: capacity + 1 }, function () { return 0; });
    for (var i = 0; i < n; i++) {
        for (var j = capacity; j >= weights[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weights[i]] + value[i]);
        }
    }
    return dp[capacity];
}
console.log(badge1([2, 3, 4, 5], [3, 4, 5, 6], 8));
