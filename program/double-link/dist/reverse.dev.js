"use strict";

function reverse(str) {
  var arr = str.split("");
  var fast = arr.length - 1;
  var slow = 0;

  while (fast > slow) {
    var _ref = [arr[slow], arr[fast]];
    arr[fast] = _ref[0];
    arr[slow] = _ref[1];
    fast--;
    slow++;
  }

  return arr.join('');
}

var a = "23adc";
reverse(a);
console.log(reverse(a));