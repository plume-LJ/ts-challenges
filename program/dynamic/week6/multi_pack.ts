export function multiPack(
	weights: number[],
	values: number[],
	nums: number[],
	capacity: number
): number {
	const dp = new Array(capacity + 1).fill(0);
	for (let i = 0; i < weights.length; i++) {
		for (let j = capacity; j >= weights[i]; j--) {
			for (let k = 1; k <= nums[i] && j - weights[i] * k >= 0; k++) {
				dp[j] = Math.max(dp[j], dp[j - weights[i] * k] + values[i] * k);
			}
		}
	}
	return dp[capacity];
}
