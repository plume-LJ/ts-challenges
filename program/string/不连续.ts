function findLengthOfLCIS(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const dp: number[] = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! > nums[i - 1]!) {
      dp[i] = dp[i - 1]! + 1;
    }
    for (let j = i - dp[i - 1]!; j < i; j++) {
      if (nums[i]! > nums[j]!) {
        dp[i] = Math.max(dp[i]!, dp[j]! + 1);
      }
    }
  }

  return Math.max(...dp);
}

function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  const dp: number[] = new Array(nums.length).fill(1);
  let maxans = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i]! > nums[j]!) {
        dp[i] = Math.max(dp[i]!, dp[j]! + 1);
      }
    }
    maxans = Math.max(maxans, dp[i]!);
  }
  return maxans;
}
  

console.log(lengthOfLIS([1, 3, 5, 4, 7]));

