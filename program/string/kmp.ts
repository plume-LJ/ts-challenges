function strStr(haystack: string, needle: string): number {
  function getNext(str: string): number[] {
    let next: number[] = [];
    let j: number = -1;
    next[0] = j;
    for (let i = 1, length = str.length; i < length; i++) {
      while (j >= 0 && str[i] !== str[j + 1]) {
        j = next[j];
      }
      if (str[i] === str[j + 1]) {
        j++;
      }
      next[i] = j;
    }
    return next;
  }
  if (needle.length === 0) return 0;
  let next: number[] = getNext(needle);
  console.log(next)
  let j: number = -1;
  for (let i = 0, length = haystack.length; i < length; i++) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j];
    }
    if (haystack[i] === needle[j + 1]) {
      if (j === needle.length - 2) {
        return i - j - 1;
      }
      j++;
    }
  }
  return -1;
}

// 不减一版本
function strStr1(haystack: string, needle: string): number {
  function getNext(str: string): number[] {
    let next: number[] = [];
    let j: number = 0;
    next[0] = j;
    for (let i = 1, length = str.length; i < length; i++) {
      while (j > 0 && str[i] !== str[j]) {
        j = next[j - 1];
      }
      if (str[i] === str[j]) {
        j++;
      }
      next[i] = j;
    }
    return next;
  }
  if (needle.length === 0) return 0;
  let next: number[] = getNext(needle);
  console.log(next)
  let j: number = 0;
  for (let i = 0, length = haystack.length; i < length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
      if (j === needle.length - 1) {
        return i - j;
      }
    }
  }
  return -1;
}

// console.log(strStr("hello", "ll"));
// console.log(strStr1("hello", "ll"));
console.log(strStr1('asdfasdfsafabababafabababacasdf', 'abcabdddabcabc'));
export {}


function KMP (haystack:string,needle:string) {
  function getNext(str: string) {
    let next = Array(str.length-1)
    let j = -1
    next[0] = j
    let i =0
    while (i<str.length) {
      if (j=== -1 || str[i] === str[j]) {
        i++
        j++
        next[i] = j
      } else {
        j = next[j]
      }
    }
    return next
  }
  let next = getNext(needle)
  console.log(next)
  let i=0;
  let j=0;
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      j++
      i++
    } else {
      j = next[j]
    }
  }
  if (j === needle.length) return i-j 
  return -1
}

console.log(KMP('asdfasdfsafabababafabababcacasdf', 'abababca'))