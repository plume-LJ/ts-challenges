function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
          const tempStr: string = s.slice(j, i);
          if (wordDict.includes(tempStr) && dp[j] === true) {
              dp[i] = true;
              break;
          }
      }
  }
  return dp[s.length];
};

function wordBreak1(s: string, wordDict: string[]): boolean {
  // 只需要记忆结果为false的情况
  const memory: boolean[] = [];
  return backTracking(s, wordDict, 0, memory);
  function backTracking(s: string, wordDict: string[], startIndex: number, memory: boolean[]): boolean {
      if (startIndex >= s.length) return true;
      if (memory[startIndex] === false) return false;
      for (let i = startIndex + 1, length = s.length; i <= length; i++) {
          const str: string = s.slice(startIndex, i);
          if (wordDict.includes(str) && backTracking(s, wordDict, i, memory))
              return true;
      }
      memory[startIndex] = false;
      return false;
  }
};

export {}