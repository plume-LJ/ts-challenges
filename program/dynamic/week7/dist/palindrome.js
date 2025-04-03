function countSubstrings(s) {
    /**
        dp[i][j]: [i,j]区间内的字符串是否为回文(左闭右闭)
     */
    var length = s.length;
    var dp = new Array(length).fill(0)
        .map(function (_) { return new Array(length).fill(false); });
    var resCount = 0;
    // 自下而上，自左向右遍历
    for (var i = length - 1; i >= 0; i--) {
        for (var j = i; j < length; j++) {
            if (s[i] === s[j] &&
                (j - i <= 1 || dp[i + 1][j - 1] === true)) {
                dp[i][j] = true;
                resCount++;
            }
        }
    }
    return resCount;
}
;
function countSubstrings1(s) {
    var length = s.length;
    var resCount = 0;
    for (var i = 0; i < length; i++) {
        resCount += expandRange(s, i, i);
        resCount += expandRange(s, i, i + 1);
    }
    return resCount;
}
;
function expandRange(s, left, right) {
    var palindromeNum = 0;
    while (left >= 0 && right < s.length &&
        s[left] === s[right]) {
        palindromeNum++;
        left--;
        right++;
    }
    return palindromeNum;
}
