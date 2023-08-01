function climbStairs (n: number, m: number) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i -j >=0) dp[i] +=dp[i-j]
    }
    // dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(climbStairs(4, 2))

export {}