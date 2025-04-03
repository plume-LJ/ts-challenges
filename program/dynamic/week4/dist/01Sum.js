function findMaxForm(strs, m, n) {
    var goodsNum = strs.length;
    var dp = new Array(m + 1).fill(0)
        .map(function (_) { return new Array(n + 1).fill(0); });
    for (var i = 0; i < goodsNum; i++) {
        var _a = countBinary(strs[i]), numOfZero = _a.numOfZero, numOfOne = _a.numOfOne;
        for (var j = m; j >= numOfZero; j--) {
            for (var k = n; k >= numOfOne; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - numOfZero][k - numOfOne] + 1);
            }
        }
    }
    return dp[m][n];
}
;
function countBinary(str) {
    var numOfZero = 0, numOfOne = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var s = str_1[_i];
        if (s === '0') {
            numOfZero++;
        }
        else {
            numOfOne++;
        }
    }
    return { numOfZero: numOfZero, numOfOne: numOfOne };
}
