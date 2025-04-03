function isStraight(nums) {
    var zero = 0;
    var gap = 0;
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zero++;
        }
        else if (nums[i] === nums[i + 1]) {
            return false;
        }
        else {
            gap += nums[i + 1] - nums[i] - 1;
        }
    }
    return zero >= gap;
}
;
isStraight([1, 2, 3, 4, 5]);
