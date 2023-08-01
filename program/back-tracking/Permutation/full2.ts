function permute(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const used = Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  backTracking(nums, []);
  return resArr;
  function backTracking(nums: number[], route: number[]): void {
    if (route.length === nums.length) {
      resArr.push([...route]);
      return;
    }
    let tempVal: number;
    const set = new Set<number>()
    for (let i = 0, length = nums.length; i < length; i++) {
      tempVal = nums[i]!;
      if (set.has(tempVal)) continue;
      if (!used[i]) {
        set.add(tempVal);
        used[i] = true;
        route.push(tempVal);
        backTracking(nums, route);
        route.pop();
        used[i] = false;
      }
    }
  }
}

function permute1(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const used = Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
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
      if (i>0 && !used[i-1] && nums[i-1] === tempVal) continue;
      if (!used[i]) {
        used[i] = true;
        route.push(tempVal);
        backTracking(nums, route);
        route.pop();
        used[i] = false;
      }
    }
  }
}

console.log(permute([1, 1, 3]));
console.log(permute1([1, 1, 3]));

export {};
