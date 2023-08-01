function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const resArr: number[][] = [];
  function backTracking(
      candidates: number[], target: number,
      curSum: number, startIndex: number, route: number[]
  ) {
      if (curSum > target) return;
      if (curSum === target) {
          resArr.push(route.slice());
          return;
      }
      for (let i = startIndex, length = candidates.length; i < length; i++) {
          if (i > startIndex && candidates[i] === candidates[i - 1]) {
              continue;
          }
          let tempVal: number = candidates[i]!;
          route.push(tempVal);
          backTracking(candidates, target, curSum + tempVal, i + 1, route);
          route.pop();

      }
  }
  backTracking(candidates, target, 0, 0, []);
  return resArr;
};

function combinationSum22(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const resArr: number[][] = [];
  function backTracking(
      candidates: number[], target: number,
      curSum: number, startIndex: number, route: number[]
  ) {
      // if (curSum > target) return;
      if (curSum === target) {
          resArr.push(route.slice());
          return;
      }
      for (let i = startIndex, length = candidates.length; i < length && curSum + candidates[i]! <= target; i++) {
          if (i > startIndex && candidates[i] === candidates[i - 1]) {
              continue;
          }
          let tempVal: number = candidates[i]!;
          route.push(tempVal);
          backTracking(candidates, target, curSum + tempVal, i + 1, route);
          route.pop();

      }
  }
  backTracking(candidates, target, 0, 0, []);
  return resArr;
};

console.log(combinationSum2([2,3,6,7], 7));
console.log(combinationSum22([2,3,6,7], 12));