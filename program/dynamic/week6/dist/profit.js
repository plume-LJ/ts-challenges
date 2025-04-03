"use strict";
exports.__esModule = true;
exports.maxProfit2 = exports.maxProfit1 = exports.maxProfit = void 0;
function maxProfit(prices) {
    var dp = new Array(prices.length).fill(0).map(function () { return new Array(2).fill(0); });
    // console.log(dp);
    dp[0][0] -= prices[0];
    dp[0][1] = 0;
    for (var i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    }
    return dp[prices.length - 1][1];
}
exports.maxProfit = maxProfit;
function maxProfit1(prices) {
    var dp = new Array(2).fill(0).map(function () { return new Array(2).fill(0); });
    // console.log(dp);
    dp[0][0] -= prices[0];
    dp[0][1] = 0;
    for (var i = 1; i < prices.length; i++) {
        var tmp = (i - 1) % 2;
        dp[i % 2][0] = Math.max(dp[tmp][0], -prices[i]);
        dp[i % 2][1] = Math.max(dp[tmp][1], dp[tmp][0] + prices[i]);
    }
    return dp[(prices.length - 1) % 2][1];
}
exports.maxProfit1 = maxProfit1;
function maxProfit2(prices) {
    var low = Infinity;
    var result = 0;
    for (var i = 0; i < prices.length; i++) {
        low = Math.min(low, prices[i]);
        result = Math.max(result, prices[i] - low);
    }
    return result;
}
exports.maxProfit2 = maxProfit2;
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
console.log(maxProfit1([7, 1, 5, 3, 6, 4]));
console.log(maxProfit1([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
