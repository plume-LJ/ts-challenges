"use strict"; // exports.__esModule = true;

function strStr(haystack, needle) {
  function getNext(str) {
    var next = [];
    var j = -1;
    next[0] = j;

    for (var i = 1, length_1 = str.length; i < length_1; i++) {
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
  var next = getNext(needle);
  console.log(next);
  var j = -1;

  for (var i = 0, length_2 = haystack.length; i < length_2; i++) {
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
} // 不减一版本


function strStr1(haystack, needle) {
  function getNext(str) {
    var next = [];
    var j = 0;
    next[0] = j;

    for (var i = 1, length_3 = str.length; i < length_3; i++) {
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
  var next = getNext(needle);
  console.log(next);
  var j = 0;

  for (var i = 0, length_4 = haystack.length; i < length_4; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }

    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }

      j++;
    }
  }

  return -1;
} // console.log(strStr("hello", "ll"));
// console.log(strStr1("hello", "ll"));
// console.log(strStr1('asdfasdfsafabababafabababacasdf', 'abcabdddabcabc'));


function getNext(str) {
  var next = Array(str.length - 1);
  var j = -1;
  next[0] = j;
  var i = 1;

  while (i < str.length) {
    if (j == -1 || str[i] === str[j]) {
      i++;
      j++;
      next[i] = j;
    } else {
      j = next[j];
    }
  }

  return next;
}