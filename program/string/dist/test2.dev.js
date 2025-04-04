"use strict";

function KMP(str1, str2) {
  function getNext(str2) {
    var next = [];
    var i = 0;
    var j = -1;
    next[i] = j;

    while (i < str2.length) {
      if (j === -1 || str2[i] === str2[j]) {
        i++;
        j++;
        next[i] = j;
      } else {
        j = next[j];
      }
    }

    return next;
  }

  var next = getNext(str2);
  console.log(next);
  var i = 0;
  var j = 0;

  while (i < str1.length && j < str2.length) {
    if (j === -1 || str1[i] == str2[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }

  if (j === str2.length) return i - j;
  return -1;
}

console.log(KMP("asdfasdfsafabababafababababababsdf", "abababca"));