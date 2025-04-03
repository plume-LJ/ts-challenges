"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var threeSum = function threeSum(nums) {
  var res = [],
      len = nums.length; // 将数组排序

  nums.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < len; i++) {
    var l = i + 1,
        r = len - 1,
        iNum = nums[i]; // 数组排过序，如果第一个数大于0直接返回res

    if (iNum > 0) return res; // 去重

    if (iNum == nums[i - 1]) continue;

    while (l < r) {
      var lNum = nums[l],
          rNum = nums[r],
          _threeSum = iNum + lNum + rNum; // 三数之和小于0，则左指针向右移动


      if (_threeSum < 0) l++;else if (_threeSum > 0) r--;else {
        res.push([iNum, lNum, rNum]); // 去重

        while (l < r && nums[l] == nums[l + 1]) {
          l++;
        }

        while (l < r && nums[r] == nums[r - 1]) {
          r--;
        }

        l++;
        r--;
      }
    }
  }

  return res;
};
/**
 *  nsum通用解法，支持2sum，3sum，4sum...等等
 *  时间复杂度分析：
 *  1. n = 2时，时间复杂度O(NlogN)，排序所消耗的时间。、
 *  2. n > 2时，时间复杂度为O(N^n-1)，即N的n-1次方，至少是2次方，此时可省略排序所消耗的时间。举例：3sum为O(n^2)，4sum为O(n^3)
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function threeSum(nums) {
  // nsum通用解法核心方法
  function nSumTarget(nums, n, start, target) {
    // 前提：nums要先排序好
    var res = [];

    if (n === 2) {
      res = towSumTarget(nums, start, target);
    } else {
      for (var i = start; i < nums.length; i++) {
        // 递归求(n - 1)sum
        var subRes = nSumTarget(nums, n - 1, i + 1, target - nums[i]);

        for (var j = 0; j < subRes.length; j++) {
          res.push([nums[i]].concat(_toConsumableArray(subRes[j])));
        } // 跳过相同元素


        while (nums[i] === nums[i + 1]) {
          i++;
        }
      }
    }

    return res;
  }

  function towSumTarget(nums, start, target) {
    // 前提：nums要先排序好
    var res = [];
    var len = nums.length;
    var left = start;
    var right = len - 1;

    while (left < right) {
      var sum = nums[left] + nums[right];

      if (sum < target) {
        while (nums[left] === nums[left + 1]) {
          left++;
        }

        left++;
      } else if (sum > target) {
        while (nums[right] === nums[right - 1]) {
          right--;
        }

        right--;
      } else {
        // 相等
        res.push([nums[left], nums[right]]); // 跳过相同元素

        while (nums[left] === nums[left + 1]) {
          left++;
        }

        while (nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }
    }

    return res;
  }

  nums.sort(function (a, b) {
    return a - b;
  }); // n = 3，此时求3sum之和

  return nSumTarget(nums, 3, 0, 0);
};

function towSumTarget(nums, start, target) {
  // 前提：nums要先排序好
  var res = [];
  var len = nums.length;
  var left = start;
  var right = len - 1;

  while (left < right) {
    var sum = nums[left] + nums[right];

    if (sum < target) {
      while (nums[left] === nums[left + 1]) {
        left++;
      }

      left++;
    } else if (sum > target) {
      while (nums[right] === nums[right - 1]) {
        right--;
      }

      right--;
    } else {
      // 相等
      res.push([nums[left], nums[right]]); // 跳过相同元素

      while (nums[left] === nums[left + 1]) {
        left++;
      }

      while (nums[right] === nums[right - 1]) {
        right--;
      }

      left++;
      right--;
    }
  }

  return res;
}

console.log(towSumTarget([0, 0, 1, 3], 0, 0));