function isSubsequence(s, t) {
    var len1 = s.length;
    var len2 = t.length;
    var i = 0;
    var j = 0;
    while (i < len1 && j < len2) {
        if (s[i] === t[j])
            i++;
        j++;
        console.log(i, j);
    }
    console.log(i, len1);
    return i === len1;
}
console.log(isSubsequence("abc", "ahbgdabdc"));
function isSubsequence1(s, t) {
    /**
        dp[i][j]: s的前i-1个，t的前j-1个，最长公共子序列的长度
     */
    var sLen = s.length;
    var tLen = t.length;
    var dp = new Array(sLen + 1).fill(0).map(function (_) { return new Array(tLen + 1).fill(0); });
    for (var i = 1; i <= sLen; i++) {
        for (var j = 1; j <= tLen; j++) {
            if (s[i - 1] === t[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            // 只需要取 j-2 的 dp 值即可，不用考虑 i-2
            else
                dp[i][j] = dp[i][j - 1];
        }
    }
    return dp[sLen][tLen] === s.length;
}
console.log(isSubsequence1("abc", "ahbgdabdc"));
function isSubsequence2(s, t) {
    var sLen = s.length;
    var tLen = t.length;
    var dp = new Array(tLen + 1).fill(0);
    for (var i = 1; i <= sLen; i++) {
        var prev = 0;
        var temp = 0;
        for (var j = 1; j <= tLen; j++) {
            // 备份一下当前状态（经过上层迭代后的）
            temp = dp[j];
            // prev 相当于 dp[j-1]（累加了上层的状态）
            // 如果单纯 dp[j-1] 则不会包含上层状态
            if (s[i - 1] === t[j - 1])
                dp[j] = prev + 1;
            else
                dp[j] = dp[j - 1];
            // 继续使用上一层状态更新参数用于当前层下一个状态
            prev = temp;
        }
    }
    return dp[tLen] === sLen;
}
console.log(isSubsequence2("abc", "ahbgdabdc"));
