export function maxProfit(prices: number[]): number {
	const dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));
	// console.log(dp);
	dp[0][0] -= prices[0];
	dp[0][1] = 0;

	for (let i = 1; i < prices.length; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
		dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
	}
	return dp[prices.length - 1][1];
}

export function maxProfit1(prices: number[]): number {
	const dp = new Array(2).fill(0).map(() => new Array(2).fill(0));
	// console.log(dp);
	dp[0][0] -= prices[0];
	dp[0][1] = 0;

	for (let i = 1; i < prices.length; i++) {
		let tmp = (i - 1) % 2;
		dp[i % 2][0] = Math.max(dp[tmp][0], -prices[i]);
		dp[i % 2][1] = Math.max(dp[tmp][1], dp[tmp][0] + prices[i]);
	}
	return dp[(prices.length - 1) % 2][1];
}

export function maxProfit2(prices: number[]): number {
	let low = Infinity;
	let result = 0;
	for (let i = 0; i < prices.length; i++) {
		low = Math.min(low, prices[i]);
		result = Math.max(result, prices[i] - low);
	}
	return result;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
console.log(maxProfit1([7, 1, 5, 3, 6, 4]));
console.log(maxProfit1([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
