"use strict";
exports.__esModule = true;
// 先遍历物品
function numSquares(n) {
    var goodsNum = Math.floor(Math.sqrt(n));
    var dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (var i = 1; i <= goodsNum; i++) {
        var tempVal = i * i;
        for (var j = tempVal; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - tempVal] + 1);
        }
    }
    return dp[n];
}
;
// 先遍历背包
function numSquares1(n) {
    var dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
}
;
