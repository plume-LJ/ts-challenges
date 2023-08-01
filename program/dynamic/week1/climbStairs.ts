function climbStairs (n: number) {
  if (n <=1) return n
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

function climbStairs1 (n: number, m: number) {
  if (n <=1) return n
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;
  
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i -j >=0) dp[i] +=dp[i-j]
    }
    // dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(climbStairs1(4, 2))