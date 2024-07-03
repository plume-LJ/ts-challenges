function longestCommonSubsequence(text1: string, text2: string): number {
  /**
      dp[i][j]: text1中前i-1个和text2中前j-1个，最长公共子序列的长度
   */
  const length1: number = text1.length,
      length2: number = text2.length;
  const dp: number[][] = new Array(length1 + 1).fill(0)
      .map(_ => new Array(length2 + 1).fill(0));
  for (let i = 1; i <= length1; i++) {
      for (let j = 1; j <= length2; j++) {
          if (text1[i - 1] === text2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
          }
      }
  }
  return dp[length1][length2];
};