"use strict";
exports.__esModule = true;
exports.longestPalindrome = exports.getLongestPalindrome = exports.manacher = void 0;
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param A string字符串
 * @return int整型
 */
// write code here
function manacher(s) {
    var ms = "$#";
    // 预处理
    for (var i = 0; i < s.length; i++) {
        // 使之都变成奇数回文子串
        ms += s.charAt(i);
        ms += "#";
    }
    // 目前已知的最长回文子串的最右一位的后一位
    var maxpos = 0;
    // 当前的最长回文子串的中心点
    var index = 0;
    var mp = new Array(ms.length).fill(0);
    for (var i = 0; i < ms.length; i++) {
        mp[i] = maxpos > i ? Math.min(mp[2 * index - i], maxpos - i) : 1;
        while (i - mp[i] > 0 &&
            i + mp[i] < ms.length &&
            ms.charAt(i + mp[i]) === ms.charAt(i - mp[i])) {
            // 两边扫
            mp[i]++;
        }
        // 更新位置
        if (i + mp[i] > maxpos) {
            maxpos = i + mp[i];
            index = i;
        }
    }
    var maxlen = 0;
    // 遍历数组
    for (var i = 0; i < ms.length; i++) {
        // 找到最大的长度
        maxlen = Math.max(maxlen, mp[i] - 1);
    }
    return maxlen;
}
exports.manacher = manacher;
console.log(manacher('bababd'));
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param A string字符串
 * @return int整型
 */
function getLongestPalindrome(A) {
    // write code here
    var n = A.length;
    var dp = Array.from({ length: n }, function () { return Array(n).fill(false); });
    var maxLen = 1;
    var start = 0;
    for (var i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    for (var i = 0; i < n - 1; i++) {
        if (A[i] === A[i + 1]) {
            dp[i][i + 1] = true;
            maxLen = 2;
            start = i;
        }
    }
    for (var len = 3; len <= n; len++) {
        for (var i = 0; i < n - len + 1; i++) {
            var j = i + len - 1;
            if (A[i] === A[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                if (len > maxLen) {
                    maxLen = len;
                    start = i;
                }
            }
        }
    }
    return maxLen;
}
exports.getLongestPalindrome = getLongestPalindrome;
function longestPalindrome(s) {
    if (s == null || s.length < 1)
        return "";
    var start = 0, end = 0;
    for (var i = 0; i < s.length; i++) {
        var len1 = expandAroundCenter(s, i, i); //从一个字符扩展
        var len2 = expandAroundCenter(s, i, i + 1); //从两个字符之间扩展
        var len = Math.max(len1, len2);
        //根据 i 和 len 求得字符串的相应下标
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
}
exports.longestPalindrome = longestPalindrome;
function expandAroundCenter(s, left, right) {
    var L = left, R = right;
    while (L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}
