function deleteBlank(arr) {
  let slow = 0;
  let fast = 0;
  // let arr = str.split("");
  let len = arr.length;
  while (fast < arr.length && arr[fast] === " ") {
    fast++;
  }
  while (arr[len - 1] === " ") {
    len--;
  }
  while (fast < len) {
    if (arr[fast] === " " && arr[fast - 1] === " ") {
      fast++;
      continue;
    }
    arr[slow++] = arr[fast++];
  }
  arr.length = slow;
  return arr.join("");
}
function reverseW(arr, left = 0, right = arr.length - 1) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
function reverseWithB(str) {
  const arr = str.split("");
  deleteBlank(arr);
  let len = arr.length;
  reverseW(arr);
  let start = 0;
  let end = 0;
  while (end < len) {
    end = start;
    while (arr[end] !== " " && end < len) {
      end++;
    }
    reverseW(arr, start, end-1);
    start = end + 1;
  }
  return arr.join('')
}
console.log(deleteBlank('  2323 abcd sdsm 232,   w  '.split('')).replace(/\s/g, '#'))
console.log(reverseWithB('  2323 abcd sdsm 232,   w  ').replace(/\s/g, '#'));
