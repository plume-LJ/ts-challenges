// JavaScript: （版本一）左闭右闭区间 [left, right]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
  let mid, left = 0, right = nums.length - 1;
  // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
  while (left <= right) {
      // 位运算 + 防止大数溢出
      mid = left + ((right - left) >> 1);
      // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
      if (nums[mid] > target) {
          right = mid - 1;  // 去左面闭区间寻找
      } else if (nums[mid] < target) {
          left = mid + 1;   // 去右面闭区间寻找
      } else {
          return mid;
      }
  }
  return -1;
};

// （版本二）左闭右开区间 [left, right)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // right是数组最后一个数的下标+1，nums[right]不在查找范围内，是左闭右开区间
  let mid, left = 0, right = nums.length;    
  // 当left=right时，由于nums[right]不在查找范围，所以不必包括此情况
  while (left < right) {
      // 位运算 + 防止大数溢出
      mid = left + ((right - left) >> 1);
      // 如果中间值大于目标值，中间值不应在下次查找的范围内，但中间值的前一个值应在；
      // 由于right本来就不在查找范围内，所以将右边界更新为中间值，如果更新右边界为mid-1则将中间值的前一个值也踢出了下次寻找范围
      if (nums[mid] > target) {
          right = mid;  // 去左区间寻找
      } else if (nums[mid] < target) {
          left = mid + 1;   // 去右区间寻找
      } else {
          return mid;
      }
  }
  return -1;
};

function search1 (arr) {
  let left = 0;
  let right = arr.length
  let mid = left + (right - left)>>2
  arr[-1]= arr[right] = -Infinity
  let ans = 0
  while (left < right) {
    if (arr[mid] > arr[mid-1] && arr[mid] >arr[mid+1]) {
      ans = mid
      break
    }
    if (arr[mid] > arr[mid-1]) {
      left = mid -1
    } else {
      right = mid +1
    }
  }
  return ans;
}

const nums = [1,2,1,3,5,6,4]
console.log(search1(nums))

var findPeakElement = function(nums) {
  const n = nums.length;
  let left = 0, right = n - 1, ans = -1;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (compare(nums, mid - 1, mid) < 0 && compare(nums, mid, mid + 1) > 0) {
          ans = mid;
          break;
      }
      if (compare(nums, mid, mid + 1) < 0) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return ans;
}

// 辅助函数，输入下标 i，返回一个二元组 (0/1, nums[i])
// 方便处理 nums[-1] 以及 nums[n] 的边界情况
const get = (nums, idx) => {
  if (idx === -1 || idx === nums.length) {
      return [0, 0];
  }
  return [1, nums[idx]];
}

const compare = (nums, idx1, idx2) => {
  const num1 = get(nums, idx1);
  const num2 = get(nums, idx2);
  if (num1[0] !== num2[0]) {
      return num1[0] > num2[0] ? 1 : -1;
  }
  if (num1[1] === num2[1]) {
      return 0;
  }
  return num1[1] > num2[1] ? 1 : -1;
}