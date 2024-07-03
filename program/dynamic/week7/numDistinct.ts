function numDistinct(s: string, t: string): number {
  /**
      dp[i][j]: s前i个字符，t前j个字符，s子序列中t出现的个数
      dp[0][0]=1, 表示s前0个字符为''，t前0个字符为''
   */
  const sLen: number = s.length,
      tLen: number = t.length;
  const dp: number[][] = new Array(sLen + 1).fill(0)
      .map(_ => new Array(tLen + 1).fill(0));
  for (let m = 0; m < sLen; m++) {
      dp[m][0] = 1;
  }
  for (let i = 1; i <= sLen; i++) {
      for (let j = 1; j <= tLen; j++) {
          if (s[i - 1] === t[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
          } else {
              dp[i][j] = dp[i - 1][j];
          }
      }
  }
  return dp[sLen][tLen];
};