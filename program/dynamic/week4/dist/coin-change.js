function change(amount, coins) {
    var dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (var i = 0, length = coins.length; i < length; i++) {
        for (var j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
        console.log(dp);
    }
    return dp[amount];
}
function changeErr(amount, coins) {
    var dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (var j = 0; j <= amount; j++) {
        for (var i = 0, length = coins.length; i < length; i++) {
            if (j >= coins[i])
                dp[j] += dp[j - coins[i]];
        }
        console.log(dp);
    }
    return dp[amount];
}
console.log(change(5, [1, 2, 5]));
console.log(changeErr(5, [1, 2, 5]));
