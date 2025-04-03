"use strict";
exports.__esModule = true;
function longestPalindrome(s) {
    var processedString = "^#" + s.split('').join('#') + "#$";
    var n = processedString.length;
    var p = new Array(n).fill(0);
    var maxRight = 0;
    var center = 0;
    for (var i = 1; i < n - 1; i++) {
        if (i < maxRight) {
            var mirror = 2 * center - i;
            p[i] = Math.min(maxRight - i, p[mirror]);
        }
        var left = i - (p[i] + 1);
        var right = i + (p[i] + 1);
        while (left >= 0 && right < n && processedString[left] === processedString[right]) {
            p[i]++;
            left--;
            right++;
        }
        if (i + p[i] > maxRight) {
            maxRight = i + p[i];
            center = i;
        }
    }
    var start = Math.floor((center - p[center]) / 2);
    var length = p[center];
    return s.slice(start, start + length);
}
// 示例用法
var s = "babad";
var result = longestPalindrome(s);
console.log(result); // 输出: "bab"
