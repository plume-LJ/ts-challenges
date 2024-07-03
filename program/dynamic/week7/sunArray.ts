function maxSubArray(nums: number[]): number {
  const len = nums.length
  if (len === 1) return nums[0]

  const dp: number[] = new Array(len)
  let resMax: number = dp[0] = nums[0]

  for (let i = 1; i < len; i++) {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
      // 注意值为负数的情况
      if (dp[i] > resMax) resMax = dp[i]
  }

  return resMax
}

console.log(maxSubArray([5, 4, -1, 7, 8]))
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))