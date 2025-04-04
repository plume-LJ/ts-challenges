function numTrees(n) {
    /**
        dp[i]: i个节点对应的种树
        dp[0]: -1; 无意义；
        dp[1]: 1;
        ...
        dp[i]: 2 * dp[i - 1] +
            (dp[1] * dp[i - 2] + dp[2] * dp[i - 3] + ... + dp[i - 2] * dp[1]); 从1加到i-2
     */
    var dp = [];
    dp[0] = -1; // 表示无意义
    dp[1] = 1;
    for (var i = 2; i <= n; i++) {
        dp[i] = 2 * dp[i - 1];
        for (var j = 1, end = i - 1; j < end; j++) {
            dp[i] += dp[j] * dp[end - j];
        }
    }
    return dp[n];
}
;
function numTrees1(n) {
    /**
        dp[i]: i个节点对应的种树
        dp[0]: -1; 无意义；
        dp[1]: 1;
        ...
        dp[i]: 2 * dp[i - 1] +
            (dp[1] * dp[i - 2] + dp[2] * dp[i - 3] + ... + dp[i - 2] * dp[1]); 从1加到i-2
     */
    var dp = new Array(n + 1).fill(0);
    dp[0] = 1; // 表示无意义
    dp[1] = 1;
    for (var i = 2; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
}
;
console.log(numTrees(5));
console.log(numTrees1(5));
