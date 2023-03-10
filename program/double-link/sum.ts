function twoSum(arr: number[], i = 0, target: number) {
  let len = arr.length;
  // let i = 0;
  let j = len - 1;
  let res: number[][] = [];
  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum > target) {
      while (arr[j] === arr[j - 1]) j--;
      j--;
    } else if (sum < target) {
      while (arr[i] === arr[i + 1]) i++;
      i++;
    } else {
      res.push([arr[i], arr[j]]);
      while (arr[i] === arr[i + 1]) i++;
      while (arr[j] === arr[j - 1]) j--;
      i++;
      j--;
    }
  }
  return res;
}
function nSumTarget(
  nums: number[],
  n: number,
  start: number,
  target: number
): number[][] {
  // 前提：nums要先排序好
  let res: number[][] = [];
  if (n === 2) {
    res = twoSum(nums, start, target);
  } else {
    for (let i = start; i < nums.length; i++) {
      // 递归求(n - 1)sum
      let subRes = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
      for (let j = 0; j < subRes.length; j++) {
        res.push([nums[i], ...subRes[j]]);
      }
      // 跳过相同元素
      while (nums[i] === nums[i + 1]) i++;
    }
  }
  return res;
}
function threeSum1(arr: number[], target: number) {
  return nSumTarget(
    arr.sort((a, b) => a - b),
    3,
    0,
    target
  );
}
console.log(threeSum1([1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 8], 13));
