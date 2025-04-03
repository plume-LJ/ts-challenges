/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    var _a;
    var length = s.length;
    var left = 0, right = length - 1;
    var tempStr;
    while (left < right) {
        _a = [s[right], s[left]], s[left] = _a[0], s[right] = _a[1];
        left++;
        right--;
    }
}
;
function reverseStr(s, k) {
    var left, right;
    var arr = s.split('');
    var temp;
    for (var i = 0, length = arr.length; i < length; i += 2 * k) {
        left = i;
        right = (i + k - 1) >= length ? length - 1 : i + k - 1;
        while (left < right) {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr.join('');
}
;
