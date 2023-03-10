function replaceSpace(s: string): string {
  let arr: string[] = s.split('');
  let spaceNum: number = 0;
  let oldLength: number = arr.length;
  for (let i = 0; i < oldLength; i++) {
      if (arr[i] === ' ') {
          spaceNum++;
      }
  }
  arr.length = oldLength + 2 * spaceNum;
  let cur: number = oldLength - 1;
  for (let i = arr.length - 1; i >= 0; i--, cur--) {
      if (arr[cur] !== ' ') {
          arr[i] = arr[cur]
      } else {
          arr[i] = '0';
          arr[--i] = '2';
          arr[--i] = '%';
      }
  }
  return arr.join('');
};

function delExtraSpace(arr: string[]) {
  let slow = 0;
  for (let i = 0; i< arr.length; ++i) {
    if (arr[i] !== ' ') {
      if (slow !== 0) arr[slow++] = ' '
      while (i < arr.length && arr[i] !== ' ') {
        arr[slow++] = arr[i++]
      }
    }
  }
  arr.length = slow

}

let arr = 'hello world sds   s'.split('')
delExtraSpace(arr)

function reverseWords(s: string): string {
  /** Utils **/
  // 删除多余空格, 如'   hello     world   ' => 'hello world'
  function delExtraSpace(arr: string[]): void {
      let left: number = 0,
          right: number = 0,
          length: number = arr.length;
      while (right < length && arr[right] === ' ') {
          right++;
      }
      while (right < length) {
          if (arr[right] === ' ' && arr[right - 1] === ' ') {
              right++;
              continue;
          }
          arr[left++] = arr[right++];
      }
      if (arr[left - 1] === ' ') {
          arr.length = left - 1;
      } else {
          arr.length = left;
      }
  }
  // 翻转字符串，如：'hello' => 'olleh'
  function reverseWords(strArr: string[], start: number, end: number) {
      let temp: string;
      while (start < end) {
          temp = strArr[start];
          strArr[start] = strArr[end];
          strArr[end] = temp;
          start++;
          end--;
      }
  }

  /** Main code **/
  let strArr: string[] = s.split('');
  delExtraSpace(strArr);
  let length: number = strArr.length;
  // 翻转整个字符串
  reverseWords(strArr, 0, length - 1);
  let start: number = 0,
      end: number = 0;
  while (start < length) {
      end = start;
      while (strArr[end] !== ' ' && end < length) {
          end++;
      }
      // 翻转单个单词
      reverseWords(strArr, start, end - 1);
      start = end + 1;
  }
  return strArr.join('');
};

console.log(reverseWords(arr.join('')))