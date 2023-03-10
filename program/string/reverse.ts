/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
  let length: number = s.length;
  let left: number = 0,
      right: number = length - 1;
  let tempStr: string;
  while (left < right) {
      [s[left],s[right]] = [s[right],s[left]];
      left++;
      right--;
  }
};

function reverseStr(s: string, k: number): string {
  let left: number, right: number;
  let arr: string[] = s.split('');
  let temp: string;
  for (let i = 0, length = arr.length; i < length; i += 2 * k) {
      left = i;
      right = (i + k - 1) >= length ? length - 1 : i + k - 1;
      while (left < right) {
          temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
      }
  }
  return arr.join('');
};