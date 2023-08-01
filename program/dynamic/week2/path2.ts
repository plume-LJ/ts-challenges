function findPaths(obstacleGrid: number[][]) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  if (obstacleGrid[m-1][n-1] === 1 || obstacleGrid[0][0] === 1) return 0

  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < n&& obstacleGrid[0][i] === 0; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) continue
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

console.log(findPaths([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));

function findPaths1(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) return 0;

  const dp: number[] = Array(n).fill(0);
  dp[0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0;
      } else if (j > 0) {
        dp[j] += dp[j - 1];
      }
    }
  }

  return dp[n - 1];
}


export {}