"use strict";
exports.__esModule = true;
function jump(nums) {
    var length = nums.length;
    var curFarthestIndex = 0, nextFarthestIndex = 0;
    var curIndex = 0;
    var stepNum = 0;
    while (curIndex < length - 1) {
        nextFarthestIndex = Math.max(nextFarthestIndex, curIndex + nums[curIndex]);
        if (curIndex === curFarthestIndex) {
            curFarthestIndex = nextFarthestIndex;
            stepNum++;
        }
        curIndex++;
    }
    return stepNum;
}
console.log(jump([2, 3, 1, 1, 4]));
