function reverseLeftWords(s: string, n: number): string {
  /** Utils */
  function reverseWords(strArr: string[], start: number, end: number): void {
    // let temp: string;
    while (start < end) {
      [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
      // temp = strArr[start];
      // strArr[start] = strArr[end];
      // strArr[end] = temp;
      start++;
      end--;
    }
  }
  /** Main code */
  let strArr: string[] = s.split("");
  let length: number = strArr.length;
  // reverseWords(strArr, 0, length - 1);
  // reverseWords(strArr, 0, length - n - 1);
  // reverseWords(strArr, length - n, length - 1);
  reverseWords(strArr, 0, n-1)
  reverseWords(strArr, n, length - 1)
  reverseWords(strArr, 0, length-1)
  return strArr.join("");
}

// 拼接两个字符串，截取符合要求的部分
function reverseLeftWords1(s: string, n: number): string {
  return (s + s).slice(n, s.length + n);
}
console.log(reverseLeftWords('23adce',4))