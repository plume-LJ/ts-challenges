function findLengthOfLCIS(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let count = 1;
  let maxCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 1;
    }
  }

  return maxCount;
}

function findLengthOfLCIS1(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const dp: number[] = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! > nums[i - 1]!) {
      dp[i] = dp[i - 1]! + 1;
    }
  }

  return Math.max(...dp);
}
export {}