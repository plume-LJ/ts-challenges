"use strict";
exports.__esModule = true;
exports.quickSort = void 0;
function quickSort(arr, left, right) {
    if (left < right) {
        var pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
}
exports.quickSort = quickSort;
function partition(arr, left, right) {
    var pivot = arr[right];
    var i = left - 1;
    for (var j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right);
    return i + 1;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var arr = [1, 3, 5, 7, 9, 2, 4, 6, 8];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
