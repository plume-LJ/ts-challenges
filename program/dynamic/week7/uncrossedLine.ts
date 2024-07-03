function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  /**
      dp[i][j]: nums1前i-1个，nums2前j-1个，最大连线数
   */
  const length1: number = nums1.length,
      length2: number = nums2.length;
  const dp: number[][] = new Array(length1 + 1).fill(0)
      .map(_ => new Array(length2 + 1).fill(0));
  for (let i = 1; i <= length1; i++) {
      for (let j = 1; j <= length2; j++) {
          if (nums1[i - 1] === nums2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          }
      }
  }
  return dp[length1][length2];
};

function maxUncrossedLines1(nums1: number[], nums2: number[]): number {
  const len1 = nums1.length
  const len2 = nums2.length

  const dp: number[] = new Array(len2 + 1).fill(0)

  for (let i = 1; i <= len1; i++) {
      let prev: number = 0;
      let temp: number = 0;
      for (let j = 1; j <= len2; j++) {
          // 备份一下当前状态（经过上层迭代后的）
          temp = dp[j]
          // prev 相当于 dp[j-1]（累加了上层的状态）
          // 如果单纯 dp[j-1] 则不会包含上层状态
          if (nums1[i - 1] === nums2[j - 1]) dp[j] = prev + 1
          // dp[j] 表示之前的 dp[i][j-1]，dp[j-1] 表示 dp[i-1][j]
          else dp[j] = Math.max(dp[j], dp[j - 1])
          // 继续使用上一层状态更新参数用于当前层下一个状态
          prev = temp
      }
  }
  return dp[len2]
}