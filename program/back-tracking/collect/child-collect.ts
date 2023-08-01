function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const resArr: number[][] = [];
  backTraking(nums, 0, []);
  return resArr;
  function backTraking(
    nums: number[],
    startIndex: number,
    route: number[]
  ): void {
    resArr.push([...route]);
    let length: number = nums.length;
    if (startIndex === length) return;
    for (let i = startIndex; i < length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) continue;
      route.push(nums[i]!);
      backTraking(nums, i + 1, route);
      route.pop();
    }
  }
}

// 使用set去重版本
function subsetsWithDupSet(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  // 去重之前先排序
  nums.sort((a, b) => a - b);
  function backTracking(startIndex: number) {
    // 收集结果
    result.push([...path]);
    // 此处不返回也可以因为，每次递归都会使startIndex + 1，当这个数大到nums.length的时候就不会进入递归了。
    if (startIndex === nums.length) {
      return;
    }
    // 定义每一个树层的set集合
    const set: Set<number> = new Set();
    for (let i = startIndex; i < nums.length; i++) {
      // 去重
      if (set.has(nums[i]!)) {
        continue;
      }
      set.add(nums[i]!);
      path.push(nums[i]!);
      backTracking(i + 1);
      // 回溯
      path.pop();
    }
  }
  backTracking(0);
  return result;
}


console.log(subsetsWithDupSet([1,2,2]));
console.log(subsetsWithDup([1,2,2]));