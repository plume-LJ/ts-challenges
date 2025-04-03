"use strict";
exports.__esModule = true;
exports.heapSort = void 0;
var cc = 1;
function heapSort(arr) {
    var _a;
    function heapify(n, i) {
        var _a;
        var largest = i;
        var l = 2 * i + 1;
        var r = 2 * i + 2;
        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest !== i) {
            _a = [arr[largest], arr[i]], arr[i] = _a[0], arr[largest] = _a[1];
            console.log(arr, cc++);
            heapify(n, largest);
        }
    }
    var n = arr.length;
    // Build max heap
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
        // console.log(arr)
    }
    // Extract elements from heap
    for (var i = n - 1; i >= 0; i--) {
        _a = [arr[i], arr[0]], arr[0] = _a[0], arr[i] = _a[1];
        heapify(i, 0);
    }
}
exports.heapSort = heapSort;
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
heapSort(arr);
console.log(arr);
