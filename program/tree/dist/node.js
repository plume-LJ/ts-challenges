"use strict";
exports.__esModule = true;
exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        if (val === void 0) { val = 0; }
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.val = val;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
function quickSort(arr, left, right) {
    if (left < right) {
        var pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
}
function partition(arr, left, right) {
    var _a;
    var pivot = arr[Math.floor((right + left) / 2)];
    // console.log(pivot)
    var i = left;
    var j = right;
    while (i < j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        // console.log(arr, i, j);
        if (i < j) {
            console.log(arr, left, right);
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
            console.log(arr, pivot, i, j);
        }
        if (arr[j] === pivot) {
            i++;
        }
        if (arr[i] === pivot) {
            j--;
        }
    }
    // console.log(arr, i, j);
    // [arr[left], arr[j]] = [arr[j]!, arr[left]!];
    return j;
}
// let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8];
// 135782469
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);
