import { TreeNode } from 'program/tree/node';

export function rob(nums: number[]): number {
	const dp: number[] = [nums[0], Math.max(nums[0], nums[1])];
	for (let i = 2; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
	}
	return dp[nums.length - 1];
}

// console.log(rob([1, 2, 3, 1]));
// console.log(rob([2, 7, 9, 3, 1]));

export function rob2(nums: number[]): number {
	const len = nums.length;
	if (!len) return 0;
	if (len === 1) return nums[0];
	return Math.max(robRange(nums, 0, len - 2), robRange(nums, 1, len - 1));
}

function robRange(nums: number[], start: number, end: number): number {
	if (start === end) return nums[start];
	const dp = [nums[start], Math.max(nums[start], nums[start + 1])];
	for (let i = start + 2; i <= end; i++) {
		dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
	}
	return dp[end];
}

export function rob3(tree: TreeNode | null): number {
	const set = new Map<TreeNode, number>();
	function rob(tree: TreeNode | null): number {
		if (tree === null) return 0;
		if (tree.left === null && tree.right === null) return tree.val;

		if (set.has(tree)) return set.get(tree)!;
		let num1 = tree.val;
		if (tree.left) num1 += rob(tree.left.left) + rob(tree.left.right);
		if (tree.right) num1 += rob(tree.right.left) + rob(tree.right.right);
		let num2 = rob(tree.left) + rob(tree.right);
		const result = Math.max(num1, num2);
		set.set(tree, result);
		return result;
	}

	return rob(tree);
}

console.log(
	rob3(
		new TreeNode(
			3,
			new TreeNode(2, new TreeNode(3), new TreeNode(3)),
			new TreeNode(3, null, new TreeNode(1))
		)
	)
);

export function rob4(tree: TreeNode | null): number {
	function robTree(tree: TreeNode | null): [number, number] {
		if (tree === null) return [0, 0];
		const left = robTree(tree.left);
		const right = robTree(tree.right);
		const val1 = tree.val + left[0] + right[0];
		const val2 = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
		return [val1, val2];
	}
  const result = robTree(tree);
	return Math.max(result[0], result[1]);
}
