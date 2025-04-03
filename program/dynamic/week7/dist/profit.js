"use strict";
exports.__esModule = true;
exports.maxProfit6 = exports.maxProfit5 = exports.maxProfit4 = exports.maxProfit33 = exports.maxProfit3 = exports.maxProfit2 = void 0;
function maxProfit2(prices) {
    var dp = new Array(prices.length).fill(0).map(function () { return new Array(2).fill(0); });
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    for (var i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]);
    }
    return dp[prices.length - 1][1];
}
exports.maxProfit2 = maxProfit2;
function maxProfit3(prices) {
    if (prices.length === 0)
        return 0;
    var dp = new Array(prices.length).fill(0).map(function () { return new Array(5).fill(0); });
    dp[0][1] = -prices[0];
    dp[0][3] = -prices[0];
    for (var i = 1; i < prices.length; i++) {
        dp[i][0] = dp[i - 1][0];
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
    }
    return dp[prices.length - 1][4];
}
exports.maxProfit3 = maxProfit3;
function maxProfit33(prices) {
    if (prices.length === 0)
        return 0;
    var dp = new Array(5).fill(0);
    dp[1] = -prices[0];
    dp[3] = -prices[0];
    for (var i = 1; i < prices.length; i++) {
        dp[0] = dp[0];
        dp[1] = Math.max(dp[1], dp[0] - prices[i]);
        dp[2] = Math.max(dp[2], dp[1] + prices[i]);
        dp[3] = Math.max(dp[3], dp[2] - prices[i]);
        dp[4] = Math.max(dp[4], dp[3] + prices[i]);
    }
    return dp[4];
}
exports.maxProfit33 = maxProfit33;
function maxProfit4(prices, k) {
    if (prices.length === 0)
        return 0;
    var dp = new Array(prices.length)
        .fill(0)
        .map(function () { return new Array(2 * k + 1).fill(0); });
    for (var i = 1; i <= 2 * k; i += 2) {
        dp[0][i] = -prices[0];
    }
    for (var i = 1; i < prices.length; i++) {
        for (var j = 0; j < 2 * k; j += 2) {
            dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
            dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
        }
    }
    return dp[prices.length - 1][2 * k];
}
exports.maxProfit4 = maxProfit4;
function maxProfit5(prices) {
    if (prices.length === 0)
        return 0;
    var dp = new Array(prices.length).fill(0).map(function () { return new Array(4).fill(0); });
    dp[0][0] = -prices[0];
    for (var i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][3] - prices[i], dp[i - 1][1] - prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3]);
        dp[i][2] = dp[i - 1][0] + prices[i];
        dp[i][3] = dp[i - 1][2];
    }
    return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2], dp[prices.length - 1][3]);
}
exports.maxProfit5 = maxProfit5;
function maxProfit6(prices, fee) {
    if (prices.length === 0)
        return 0;
    var dp = new Array(prices.length).fill(0).map(function () { return new Array(2).fill(0); });
    dp[0][1] = -prices[0];
    for (var i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][0]);
}
exports.maxProfit6 = maxProfit6;
// console.log(maxProfit4([3, 2, 6, 5, 0, 3], 2));
// console.log(maxProfit4([3, 2, 6, 5, 0, 3], 3));
// console.log(maxProfit4([3, 2, 6, 5, 0, 3], 1));
// console.log(maxProfit4([1, 2, 4, 2, 5, 7, 2, 4, 9, 0], 2));
// console.log(maxProfit4([1, 2, 4, 2, 5, 7, 2, 4, 9, 0], 3));
// console.log(maxProfit4([1, 2, 4, 2, 5, 7, 2, 4, 9, 0], 4));
console.log(maxProfit6([1, 2, 4, 2, 5, 7, 2, 4, 9, 0], 2));
