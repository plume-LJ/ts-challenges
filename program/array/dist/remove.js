"use strict";
exports.__esModule = true;
function removeElement(nums, val) {
    var slowIndex = 0, fastIndex = 0;
    while (fastIndex < nums.length) {
        if (nums[fastIndex] !== val) {
            nums[slowIndex++] = nums[fastIndex];
        }
        fastIndex++;
    }
    return slowIndex;
}
;
