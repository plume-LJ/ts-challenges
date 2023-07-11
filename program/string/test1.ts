function longestPalindrome(s: string): string {
  const processedString = `^#${s.split('').join('#')}#$`;
  const n = processedString.length;

  const p: number[] = new Array(n).fill(0);
  let maxRight = 0;
  let center = 0;

  for (let i = 1; i < n - 1; i++) {
    if (i < maxRight) {
      let mirror = 2 * center - i;
      p[i] = Math.min(maxRight - i, p[mirror]!);
    }

    let left = i - (p[i]! + 1);
    let right = i + (p[i]! + 1);
    while (left >= 0 && right < n && processedString[left]! === processedString[right]!) {
      p[i]++;
      left--;
      right++;
    }

    if (i + p[i]! > maxRight) {
      maxRight = i + p[i]!;
      center = i;
    }
  }

  let start = Math.floor((center - p[center]!) / 2);
  let length = p[center]!;

  return s.slice(start, start + length);
}

// 示例用法
const s = "babad";
const result = longestPalindrome(s);
console.log(result);  // 输出: "bab"
export {}