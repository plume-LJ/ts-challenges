function combinationSum(candidates: number[], target: number): number[][] {
  const resArr: number[][] = [];
  function backTracking(
      candidates: number[], target: number,
      startIndex: number, route: number[], curSum: number
  ): void {
      if (curSum > target) return;
      if (curSum === target) {
          resArr.push(route.slice());
          return
      }
      for (let i = startIndex, length = candidates.length; i < length; i++) {
          let tempVal: number = candidates[i]!;
          route.push(tempVal);
          backTracking(candidates, target, i, route, curSum + tempVal);
          route.pop();
      }
  }
  backTracking(candidates, target, 0, [], 0);
  return resArr;
};

function combinationSum1(candidates: number[], target: number): number[][] {
  const resArr: number[][] = [];
  function backTracking(
      candidates: number[], target: number,
      startIndex: number, route: number[], curSum: number
  ): void {
      // if (curSum > target) return;
      if (curSum === target) {
          resArr.push(route.slice());
          return
      }
      for (let i = startIndex, length = candidates.length; i < length && curSum + candidates[i]! <= target; i++) {
          let tempVal: number = candidates[i]!;
          route.push(tempVal);
          backTracking(candidates, target, i, route, curSum + tempVal);
          route.pop();
      }
  }
  backTracking(candidates, target, 0, [], 0);
  return resArr;
};

console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum1([2,3,6,7,5], 12));