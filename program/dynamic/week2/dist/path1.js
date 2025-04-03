"use strict";
exports.__esModule = true;
function findPaths(m, n) {
    var dp = Array.from({ length: m }, function () { return Array(n).fill(0); });
    for (var i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (var i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}
console.log(findPaths1(5, 9));
console.assert(findPaths1(3, 2) === 3);
function findPaths1(m, n) {
    var numerator = 1;
    var denominator = 1;
    var count = m - 1;
    var t = m + n - 2;
    while (count--) {
        numerator *= t--;
        while (denominator <= m - 1 && numerator % denominator == 0) {
            numerator /= denominator;
            denominator++;
        }
    }
    return numerator;
}
