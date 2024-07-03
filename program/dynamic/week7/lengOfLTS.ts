function lengthOfLIS(nums: number[]): number {
	/**
      dp[i]: 前i个元素中，以nums[i]结尾，最长子序列的长度
   */
	const dp: number[] = new Array(nums.length).fill(1);
	let resMax: number = 0;
	for (let i = 0, length = nums.length; i < length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
		resMax = Math.max(resMax, dp[i]);
	}
	return resMax;
}

function lengthOfLIS2(nums: number[]): number {
	/**
      dp[i]: 前i个元素中，以nums[i]结尾，最长子序列的长度
   */
	const dp: number[] = new Array(nums.length).fill(1);
	let resMax: number = 0;
	for (let i = 1, length = nums.length; i < length; i++) {
		if (nums[i] > nums[i - 1]) {
			dp[i] = dp[i - 1] + 1;
		}
		resMax = Math.max(resMax, dp[i]);
	}
	return resMax;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18]));
