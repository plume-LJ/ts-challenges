"use strict";

// const col = [];
// const dg = [];
// const udg = [];
// const result = []
function transformBoard1(board) {
  var resArr = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = board[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var row = _step.value;
      resArr.push(row.join(""));
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

  return resArr;
}

function solve(n) {
  var result = [];
  var col = [];
  var dg = [];
  var udg = [];

  function dfs(u, n, arr) {
    // const result = []
    if (u === n) {
      // console.log(arr)
      console.log(col, dg, udg);
      result.push(transformBoard1(arr)); // arr.pop();
    }

    for (var i = 0; i < n; i++) {
      if (!col[i] && !dg[i + u] && !udg[n + i - u]) {
        arr[u][i] = "Q";
        col[i] = dg[i + u] = udg[n + i - u] = true;
        dfs(u + 1, n, arr);
        arr[u][i] = ".";
        col[i] = dg[i + u] = udg[n + i - u] = false;
      }
    }
  }

  var arr = Array(n).fill().map(function () {
    return Array(n).fill(".");
  });
  dfs(0, n, arr);
  console.log(result);
}

solve(3);
solve(4);
solve(5);