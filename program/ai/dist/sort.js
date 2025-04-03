function quickSortStack(arr) {
    var _a;
    if (arr.length <= 1) {
        return arr;
    }
    var stack = [[0, arr.length - 1]];
    while (stack.length) {
        var _b = stack.pop(), low = _b[0], high = _b[1];
        if (low >= high) {
            continue;
        }
        var pivot = arr[Math.floor((low + high) / 2)];
        var i = low;
        var j = high;
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
                i++;
                j--;
            }
        }
        if (j > low) {
            stack.push([low, j]);
        }
        if (i < high) {
            stack.push([i, high]);
        }
    }
    return arr;
}
console.log(quickSortStack([1, 2, 34, 5, 6, 6, 34,]));
