function minSubArrayLen(target, nums) {
    var left = 0, right = 0;
    var res = nums.length + 1;
    var sum = 0;
    while (right < nums.length) {
        sum += nums[right];
        if (sum >= target) {
            // 不断移动左指针，直到不能再缩小为止
            while (sum - nums[left] >= target) {
                sum -= nums[left++];
            }
            res = Math.min(res, right - left + 1);
        }
        right++;
    }
    return res === nums.length + 1 ? 0 : res;
}
;
