function lastStoneWeightII(stones) {
    var sum = stones.reduce(function (a, b) { return a + b; });
    var target = Math.floor(sum / 2);
    var n = stones.length;
    // dp[j]表示容量（总数和）为j的背包所能装下的数（下标[0, i]之间任意取）的总和（<= 容量）的最大值
    var dp = new Array(target + 1).fill(0);
    for (var i = 0; i < n; i++) {
        for (var j = target; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
        }
    }
    return sum - dp[target] - dp[target];
}
;
