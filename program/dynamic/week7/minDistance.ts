function minDistance(word1: string, word2: string): number {
  /**
      dp[i][j]: word1前i个字符，word2前j个字符，所需最小步数
      dp[0][0]=0: word1前0个字符为'', word2前0个字符为''
   */
  const length1: number = word1.length,
      length2: number = word2.length;
  const dp: number[][] = new Array(length1 + 1).fill(0)
      .map(_ => new Array(length2 + 1).fill(0));
  for (let i = 0; i <= length1; i++) {
      dp[i][0] = i;
  }
  for (let i = 0; i <= length2; i++) {
      dp[0][i] = i;
  }
  for (let i = 1; i <= length1; i++) {
      for (let j = 1; j <= length2; j++) {
          if (word1[i - 1] === word2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1];
          } else {
              dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
          }
      }
  }
  return dp[length1][length2];
};

function minDistance2(word1: string, word2: string): number {
  /**
      dp[i][j]: word1前i个字符，word2前j个字符，最长公共子序列的长度
      dp[0][0]=0: word1前0个字符为'', word2前0个字符为''
   */
  const length1: number = word1.length,
      length2: number = word2.length;
  const dp: number[][] = new Array(length1 + 1).fill(0)
      .map(_ => new Array(length2 + 1).fill(0));
  for (let i = 1; i <= length1; i++) {
      for (let j = 1; j <= length2; j++) {
          if (word1[i - 1] === word2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
          }
      }
  }
  const maxLen: number = dp[length1][length2];
  return length1 + length2 - maxLen * 2;
};

console.log(minDistance("sea", "eat"), minDistance2("sea", "eat"));
console.log(minDistance("leetcode", "etco"), minDistance2("leetcode", "etco"))

// 编辑距离
function minDistance3(word1: string, word2: string): number {
  const len1 = word1.length;
  const len2 = word2.length;
  const dp: number[][] = new Array(len1 + 1).fill(0)
      .map(_ => new Array(len2 + 1).fill(0));
  for (let i = 0; i <= len1; i++) {
      dp[i][0] = i;
  }
  for (let i = 0; i <= len2; i++) {
      dp[0][i] = i;
  }
  for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
          if (word1[i - 1] === word2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1];
          } else {
              dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
          }
      }
  }
  return dp[len1][len2];
}

console.log(minDistance3("sea", "eat"))
console.log(minDistance3("leetcode", "ftco"))