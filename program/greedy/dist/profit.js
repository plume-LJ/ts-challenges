function maxProfit(prices) {
    var resProfit = 0;
    for (var i = 1, length = prices.length; i < length; i++) {
        resProfit += Math.max(prices[i] - prices[i - 1], 0);
    }
    return resProfit;
}
console.log(maxProfit([7, 1, 5, 10, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
function maxProfit1(prices) {
    var dp = Array(prices.length)
        .fill(0)
        .map(function () { return Array(2).fill(0); });
    dp[0][0] = -prices[0];
    for (var i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    }
    return dp[prices.length - 1][1];
}
console.log(maxProfit1([7, 1, 5, 10, 3, 6, 4]));
