export function findDuplicate(nums: number[], nums1: number[],): number {
  const dp = new Array(nums.length +1).fill(0).map(() => new Array(nums1.length + 1).fill(0));
  let resMax = 0;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= nums1.length; j++) {
      if (nums[i - 1] === nums1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        resMax = Math.max(resMax, dp[i][j]);
      }
    }
  }
  return resMax;
}

export function findDuplicate2(nums: number[], nums1: number[],): number {
  const dp = new Array(nums.length +1).fill(0);
  let resMax = 0;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = nums1.length; j >= 1; j--) {
      if (nums[i - 1] === nums1[j - 1]) {
        dp[j] = dp[j - 1] + 1;
        resMax = Math.max(resMax, dp[j]);
      } else {
        dp[j] = 0;
      }
    }
  }
  return resMax;
}
console.log(findDuplicate([1, 3, 4, 2, 2], [3, 1, 3, 4, 2]));
console.log(findDuplicate2([1, 3, 4, 2, 2], [3, 1, 3, 4, 2]));