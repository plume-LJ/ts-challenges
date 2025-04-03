"use strict";
exports.__esModule = true;
function findPaths(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1)
        return 0;
    var dp = Array.from({ length: m }, function () { return Array(n).fill(0); });
    for (var i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1;
    }
    for (var i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
        dp[0][i] = 1;
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1)
                continue;
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}
console.log(findPaths([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
function findPaths1(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1)
        return 0;
    var dp = Array(n).fill(0);
    dp[0] = 1;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
            }
            else if (j > 0) {
                dp[j] += dp[j - 1];
            }
        }
    }
    return dp[n - 1];
}
