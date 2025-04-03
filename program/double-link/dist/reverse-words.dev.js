"use strict";

function deleteBlank(arr) {
  var slow = 0;
  var fast = 0; // let arr = str.split("");

  var len = arr.length;

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

function reverseW(arr) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - 1;

  while (left < right) {
    var _ref = [arr[right], arr[left]];
    arr[left] = _ref[0];
    arr[right] = _ref[1];
    left++;
    right--;
  }
}

function reverseWithB(str) {
  var arr = str.split("");
  deleteBlank(arr);
  var len = arr.length;
  reverseW(arr);
  var start = 0;
  var end = 0;

  while (end < len) {
    end = start;

    while (arr[end] !== " " && end < len) {
      end++;
    }

    reverseW(arr, start, end - 1);
    start = end + 1;
  }

  return arr.join('');
}

console.log(deleteBlank('  2323 abcd sdsm 232,   w  '.split('')).replace(/\s/g, '#'));
console.log(reverseWithB('  2323 abcd sdsm 232,   w  ').replace(/\s/g, '#'));