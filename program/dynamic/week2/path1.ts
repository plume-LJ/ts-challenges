function findPaths(m: number, n: number) {
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}
console.log(findPaths1(5, 9));
console.assert(findPaths1(3, 2) === 3);

function findPaths1(m: number, n: number) {
  let numerator = 1;
  let denominator = 1;
  let count = m - 1;
  let t = m + n - 2;
  while (count--) {
    numerator *= t--;
    while (denominator <= m - 1 && numerator % denominator == 0) {
      numerator /= denominator;
      denominator++;
    }
  }
  return numerator;
}
export {}