"use strict";
exports.__esModule = true;
function twoSum(nums, target) {
    var helperMap = new Map();
    var index;
    var resArr = [];
    for (var i = 0, length = nums.length; i < length; i++) {
        index = helperMap.get(target - nums[i]);
        if (index !== undefined) {
            resArr = [i, index];
        }
        helperMap.set(nums[i], i);
    }
    return resArr;
}
function fourSumCount(nums1, nums2, nums3, nums4) {
    var helperMap = new Map();
    var resNum = 0;
    var tempVal;
    for (var _i = 0, nums1_1 = nums1; _i < nums1_1.length; _i++) {
        var i = nums1_1[_i];
        for (var _a = 0, nums2_1 = nums2; _a < nums2_1.length; _a++) {
            var j = nums2_1[_a];
            tempVal = helperMap.get(i + j);
            helperMap.set(i + j, tempVal ? tempVal + 1 : 1);
        }
    }
    for (var _b = 0, nums3_1 = nums3; _b < nums3_1.length; _b++) {
        var k = nums3_1[_b];
        for (var _c = 0, nums4_1 = nums4; _c < nums4_1.length; _c++) {
            var l = nums4_1[_c];
            tempVal = helperMap.get(0 - (k + l));
            if (tempVal) {
                resNum += tempVal;
            }
        }
    }
    return resNum;
}
function threeSum(nums) {
    nums.sort(function (a, b) { return a - b; });
    var length = nums.length;
    var left = 0, right = length - 1;
    var resArr = [];
    for (var i = 0; i < length; i++) {
        if (nums[i] > 0) {
            return resArr; //nums经过排序后，只要nums[i]>0, 此后的nums[i] + nums[left] + nums[right]均大于0,可以提前终止循环。
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        left = i + 1;
        right = length - 1;
        while (left < right) {
            var total = nums[i] + nums[left] + nums[right];
            if (total === 0) {
                resArr.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
                while (nums[left] === nums[left - 1]) {
                    left++;
                }
            }
            else if (total < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return resArr;
}
function fourSum(nums, target) {
    nums.sort(function (a, b) { return a - b; });
    var first = 0, second, third, fourth;
    var length = nums.length;
    var resArr = [];
    for (; first < length; first++) {
        if (first > 0 && nums[first] === nums[first - 1]) {
            continue;
        }
        for (second = first + 1; second < length; second++) {
            if ((second - first) > 1 && nums[second] === nums[second - 1]) {
                continue;
            }
            third = second + 1;
            fourth = length - 1;
            while (third < fourth) {
                var total = nums[first] + nums[second] + nums[third] + nums[fourth];
                if (total === target) {
                    resArr.push([nums[first], nums[second], nums[third], nums[fourth]]);
                    third++;
                    fourth--;
                    while (nums[third] === nums[third - 1])
                        third++;
                    while (nums[fourth] === nums[fourth + 1])
                        fourth--;
                }
                else if (total < target) {
                    third++;
                }
                else {
                    fourth--;
                }
            }
        }
    }
    return resArr;
}
;
var nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
