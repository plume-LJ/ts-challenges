function longestCommonSubstring(a, b) {
    var m = a.length;
    var n = b.length;
    var dp = Array.from({ length: m + 1 }, function () { return Array(n + 1).fill(0); });
    var longestLength = 0;
    var endIndex = 0;
    console.log(dp);
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > longestLength) {
                    longestLength = dp[i][j];
                    endIndex = i - 1;
                }
            }
        }
    }
    if (longestLength === 0) {
        return "";
    }
    return a.substring(endIndex - longestLength + 1, endIndex + 1);
}
function te(str1, str2) {
    var len = 0;
    var resE = 0;
    var dp = Array(str1.length + 1).fill(Array(str2.length + 1).fill(0));
    for (var i = 1; i <= str1.length; i++) {
        for (var j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > len) {
                    len = dp[i][j];
                    resE = i - 1;
                }
            }
        }
    }
    return str1.slice(resE - len + 1, resE + 1);
}
// 示例用法
var a = "abcdefghijklmnop";
var b = "abcsafjklmnopqrstuvw";
var result = te(a, b);
var result1 = longestCommonSubstring(a, b);
console.log(result, result1);
