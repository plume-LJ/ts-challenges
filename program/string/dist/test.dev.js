"use strict";

function KMP(haystack, needle) {
  function getNext(str) {
    var next = [];
    var j = -1;
    next[0] = j;
    var i = 0;

    while (i < str.length) {
      if (j === -1 || str[i] === str[j]) {
        i++;
        j++;
        next[i] = j;
      } else {
        j = next[j];
      }
    }

    return next;
  }

  var next = getNext(needle);
  console.log(next);
  var i = 0;
  var j = 0;

  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      j++;
      i++;
    } else {
      j = next[j];
    }
  }

  if (j === needle.length) return i - j;
  return -1;
}

function strStr(haystack, needle) {
  function getNext(str) {
    var next = [];
    var j = -1;
    next[0] = j;

    for (var i = 0, length_1 = str.length; i < length_1;) {
      while (j >= 0 && str[i] !== str[j]) {
        j = next[j];
      } // if (str[i] === str[j + 1]) {
      // }


      j++;
      i++;
      next[i] = j;
    }

    return next;
  }

  if (needle.length === 0) return 0;
  var next = getNext(needle);
  console.log(next);
  var j = 0;

  for (var i = 0, length_2 = haystack.length; i < length_2;) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j];
    }

    j++;
    i++;

    if (j === needle.length - 1) {
      return i - j - 1;
    }
  }

  return -1;
} // console.log(strStr("asdfasdfsafabababafabababacasdf", "abababac"));


console.log(KMP("asdfasdfsafabababafababababababsdf", "abcac"));