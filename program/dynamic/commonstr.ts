function longestCommonStr(s: string, l: string) {
  const m = s.length;
  const n = l.length;
  let maxLength = 0;
  let start = 0;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i-1] === l[j-1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      // else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);

      if (dp[i][j] > maxLength) {
        start = i - dp[i][j];
        maxLength = dp[i][j];
      }
    }
  }
  console.log(dp)
  if (maxLength === 0) return "";
  return s.slice(start, start+maxLength)
  
}

console.log(longestCommonStr("abcde", "abce"))