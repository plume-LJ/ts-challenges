function manacherAlgorithm(s: string): string {
  // 预处理字符串，插入特殊字符
  const processedStr = processString(s);

  const n = processedStr.length;
  const p: number[] = new Array(n).fill(0); // 辅助数组P，记录以每个字符为中心的最长回文子串的半径

  let center = 0; // 最右回文子串的中心
  let right = 0; // 最右回文子串的边界

  for (let i = 1; i < n - 1; i++) {
    // 判断当前字符是否在最右回文子串边界内
    if (i < right) {
      const mirror = 2 * center - i; // i关于center的对称位置

      // 修正错误：需要判断对称位置的回文半径是否超过边界
      if (i + p[mirror] < right) {
        p[i] = p[mirror];
        continue;
      }
      p[i] = right - i;
    }

    // 中心扩展法查找最长回文子串
    while (processedStr[i + p[i] + 1] === processedStr[i - p[i] - 1]) {
      p[i]++;
    }

    // 更新最右回文子串的边界和中心
    if (i + p[i] > right) {
      center = i;
      right = i + p[i];
    }
  }

  // 找到最长回文子串的长度和中心位置
  let maxLength = 0;
  let centerIndex = 0;
  for (let i = 1; i < n - 1; i++) {
    if (p[i] > maxLength) {
      maxLength = p[i];
      centerIndex = i;
    }
  }
console.log(centerIndex, maxLength)
  // 提取最长回文子串
  const start = Math.floor((centerIndex - maxLength) / 2);
  return s.substring(start, start + maxLength);
}

// 预处理字符串，插入特殊字符
function processString(s: string): string {
  let processed = "^#";
  for (let i = 0; i < s.length; i++) {
    processed += s[i] + "#";
  }
  processed += "$";
  return processed;
}

// 示例使用
const input = "ab";
const longestPalindrome = manacherAlgorithm(input);
console.log(longestPalindrome); // 输出 "babadabab"
