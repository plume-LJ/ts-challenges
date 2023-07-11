function longestCommonSubstring(a: string, b: string): string {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  let longestLength = 0;
  let endIndex = 0;
  console.log(dp)

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i]![j] = dp[i - 1]![j - 1]! + 1;

        if (dp[i]![j]! > longestLength) {
          longestLength = dp[i]![j]!;
          endIndex = i - 1;
        }
      }
    }
  }

  if (longestLength === 0) {
    return "";
  }

  return a.substring(endIndex - longestLength + 1, endIndex + 1);
}
function te(str1: string, str2: string) {
  let len=0
        let resE = 0
        const dp = Array(str1.length +1).fill(Array(str2.length+1).fill(0))

        for (let i =1;i<=str1.length; i++) {
            for (let j =1;j<=str2.length; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i-1][j-1] +1
                    if (dp[i][j] > len) {
                    len = dp[i][j]
                    resE = i - 1

                    }
                }
            }
        }
        return str1.slice(resE-len+1,resE +1)
}

// 示例用法
const a = "abcdefghijklmnop";
const b = "abcsafjklmnopqrstuvw";
const result = te(a, b);
const result1 = longestCommonSubstring(a, b);
console.log(result, result1);
