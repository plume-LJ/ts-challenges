function combine(n: number, k: number): number[][] {
  let resArr: number[][] = [];
  function backTracking(n: number, k: number, startIndex: number, tempArr: number[]): void {
      if (tempArr.length === k) {
          resArr.push(tempArr.slice());
          return;
      }
      for (let i = startIndex; i <= n - k + 1 + tempArr.length; i++) {
          tempArr.push(i);
          backTracking(n, k, i + 1, tempArr);
          tempArr.pop();
      }
  }
  backTracking(n, k, 1, []);
  return resArr;
};

function combinationSum3(k: number, n: number): number[][] {
  const resArr: number[][] = [];
  function backTracking(k: number, n: number, sum: number, startIndex: number, tempArr: number[]): void {
      if (sum > n) return;
      if (tempArr.length === k) {
          if (sum === n) {
              resArr.push(tempArr.slice());
          }
          return;
      }
      for (let i = startIndex; i <= 9 - (k - tempArr.length) + 1; i++) {
          tempArr.push(i);
          backTracking(k, n, sum + i, i + 1, tempArr);
          tempArr.pop();
      }
  }
  backTracking(k, n, 0, 1, []);
  return resArr;
};