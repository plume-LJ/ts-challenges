"use strict";

function replaceBlank(str) {
  var arr = str.split("");
  var space = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var s = _step.value;
      if (s === " ") space++;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  arr.length = arr.length + space * 2;
  var j = str.length - 1;
  console.log(arr.length, j);

  for (var i = arr.length - 1; i >= 0; i--, j--) {
    if (arr[j] !== " ") {
      arr[i] = arr[j];
    } else {
      arr[i] = '0';
      arr[--i] = '2';
      arr[--i] = '%';
    }
  }

  return arr.join('');
}

console.log(replaceBlank('2323 sdsd sds'));