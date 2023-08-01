function Permutation (arr: number[]) {
  const resArr: number[][] = [];
  
  function backTracking (path: number[], used: number[]) {
    if (path.length === arr.length) {
      resArr.push([...path]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;
      used[i] = 1;
      path.push(arr[i]!);
      backTracking(path, used);
      used[i] = 0;
      path.pop();
    }
  }

  backTracking([], [])
  return resArr
}

function permute(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const helperSet: Set<number> = new Set();
  backTracking(nums, []);
  return resArr;
  function backTracking(nums: number[], route: number[]): void {
      if (route.length === nums.length) {
          resArr.push([...route]);
          return;
      }
      let tempVal: number;
      for (let i = 0, length = nums.length; i < length; i++) {
          tempVal = nums[i]!;
          if (!helperSet.has(tempVal)) {
              route.push(tempVal);
              helperSet.add(tempVal);
              backTracking(nums, route);
              route.pop();
              helperSet.delete(tempVal);
          }
      }
  }
};

console.log(Permutation([1,2,3]));

console.log(permute([1,2,3]));