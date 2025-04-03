function sortedSquares(nums) {
    var ans = [];
    var left = 0, right = nums.length - 1;
    while (left <= right) {
        // 右侧的元素不需要取绝对值，nums 为非递减排序的整数数组
        // 在同为负数的情况下，左侧的平方值一定大于右侧的平方值
        if (Math.abs(nums[left]) > nums[right]) {
            // 使用 Array.prototype.unshift() 直接在数组的首项插入当前最大值
            ans.unshift(Math.pow(nums[left], 2));
            left++;
        }
        else {
            ans.unshift(Math.pow(nums[right], 2));
            right--;
        }
    }
    return ans;
}
;
// function sortedSquares(nums: number[]): number[] {
//   return nums.map(i => i * i).sort((a, b) => a - b);
// };
