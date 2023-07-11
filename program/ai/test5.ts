function isStraight(nums: number[]): boolean {
  let zero = 0
  let gap = 0
  nums.sort((a, b) => a - b)
  for (let i =0; i< nums.length; i++) {
      if (nums[i]! === 0) {
          zero ++
      } else if (nums[i]! === nums[i+1]!) {
          return false
      } else {
          gap += nums[i+1]! - nums[i]! -1
      }
  }
  return zero >= gap
};
isStraight([1,2,3,4,5])