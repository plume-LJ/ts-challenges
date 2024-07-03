function countSubstrings(s: string): number {
  /**
      dp[i][j]: [i,j]区间内的字符串是否为回文(左闭右闭)
   */
  const length: number = s.length;
  const dp: boolean[][] = new Array(length).fill(0)
      .map(_ => new Array(length).fill(false));
  let resCount: number = 0;
  // 自下而上，自左向右遍历
  for (let i = length - 1; i >= 0; i--) {
      for (let j = i; j < length; j++) {
          if (
              s[i] === s[j] &&
              (j - i <= 1 || dp[i + 1][j - 1] === true)
          ) {
              dp[i][j] = true;
              resCount++;
          }
      }
  }
  return resCount;
};

function countSubstrings1(s: string): number {
  const length: number = s.length;
  let resCount: number = 0;
  for (let i = 0; i < length; i++) {
      resCount += expandRange(s, i, i);
      resCount += expandRange(s, i, i + 1);
  }
  return resCount;
};
function expandRange(s: string, left: number, right: number): number {
  let palindromeNum: number = 0;
  while (
      left >= 0 && right < s.length &&
      s[left] === s[right]
  ) {
      palindromeNum++;
      left--;
      right++;
  }
  return palindromeNum;
}