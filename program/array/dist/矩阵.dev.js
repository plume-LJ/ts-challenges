"use strict";

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function generateMatrix(n) {
  var startX = 0;
  var startY = 0; // 起始位置

  var loop = Math.floor(n / 2); // 旋转圈数

  var mid = Math.floor(n / 2); // 中间位置

  var offset = 1; // 控制每一层填充元素个数

  var count = 1; // 更新填充数字

  var res = new Array(n).fill(0).map(function () {
    return new Array(n).fill(0);
  });

  while (loop--) {
    var row = startX,
        col = startY; // 上行从左到右（左闭右开）

    for (; col < startY + n - offset; col++) {
      res[row][col] = count++;
    } // 右列从上到下（左闭右开）


    for (; row < startX + n - offset; row++) {
      res[row][col] = count++;
    } // 下行从右到左（左闭右开）


    for (; col > startY; col--) {
      res[row][col] = count++;
    } // 左列做下到上（左闭右开）


    for (; row > startX; row--) {
      res[row][col] = count++;
    } // 更新起始位置


    startX++;
    startY++; // 更新offset

    offset += 2;
  } // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值


  if (n % 2 === 1) {
    res[mid][mid] = count;
  }

  return res;
};

console.log(generateMatrix(4));