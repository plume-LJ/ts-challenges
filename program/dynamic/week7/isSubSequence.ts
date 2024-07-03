function isSubsequence(s: string, t: string): boolean {
  const len1 = s.length
  const len2 = t.length
  let i = 0
  let j = 0
  while (i < len1 && j < len2) {
      if (s[i] === t[j]) i++
      j++
      console.log(i, j)
  }
  console.log(i, len1)
  return i === len1
}

console.log(isSubsequence("abc", "ahbgdabdc"))

function isSubsequence1(s: string, t: string): boolean {
  /**
      dp[i][j]: s的前i-1个，t的前j-1个，最长公共子序列的长度
   */
  const sLen = s.length
  const tLen = t.length
  const dp: number[][] = new Array(sLen + 1).fill(0).map(_ => new Array(tLen + 1).fill(0))

  for (let i = 1; i <= sLen; i++) {
      for (let j = 1; j <= tLen; j++) {
          if (s[i - 1] === t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1
          // 只需要取 j-2 的 dp 值即可，不用考虑 i-2
          else dp[i][j] = dp[i][j - 1]
      }
  }
  return dp[sLen][tLen] === s.length
}


console.log(isSubsequence1("abc", "ahbgdabdc"))

function isSubsequence2(s: string, t: string): boolean {
  const sLen = s.length
  const tLen = t.length
  const dp: number[] = new Array(tLen + 1).fill(0)

  for (let i = 1; i <= sLen; i++) {
      let prev: number = 0;
      let temp: number = 0;
      for (let j = 1; j <= tLen; j++) {
          // 备份一下当前状态（经过上层迭代后的）
          temp = dp[j]
          // prev 相当于 dp[j-1]（累加了上层的状态）
          // 如果单纯 dp[j-1] 则不会包含上层状态
          if (s[i - 1] === t[j - 1]) dp[j] = prev + 1
          else dp[j] = dp[j - 1]
          // 继续使用上一层状态更新参数用于当前层下一个状态
          prev = temp
      }
  }
  return dp[tLen] === sLen
}


console.log(isSubsequence2("abc", "ahbgdabdc"))