function subsets(nums: number[]): number[][] {
  const resArr: number[][] = [];
  backTracking(nums, 0, []);
  return resArr;
  function backTracking(nums: number[], startIndex: number, route: number[]): void {
      resArr.push([...route]);
      let length = nums.length;
      if (startIndex === length) return; // 终止条件可以不加
      for (let i = startIndex; i < length; i++) {
          route.push(nums[i]!);
          backTracking(nums, i + 1, route);
          route.pop();
      }
  }
};

console.log(subsets([1,2,3]));