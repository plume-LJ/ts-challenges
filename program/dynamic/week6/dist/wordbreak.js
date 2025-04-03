"use strict";
exports.__esModule = true;
function wordBreak(s, wordDict) {
    var dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (var i = 1; i <= s.length; i++) {
        for (var j = 0; j < i; j++) {
            var tempStr = s.slice(j, i);
            if (wordDict.includes(tempStr) && dp[j] === true) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
}
function wordBreakWrong(s, wordDict) {
    var dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (var j = 0; j < wordDict.length; j++) {
        var tempStr = wordDict[j];
        for (var i = tempStr.length; i <= s.length; i++) {
            if (dp[i - tempStr.length] === true &&
                s.slice(i - tempStr.length, i) === tempStr) {
                dp[i] = true;
            }
        }
    }
    console.log(dp);
    return dp[s.length];
}
console.log('wrong result', wordBreakWrong("applepenapple", ["apple", "pen"]));
function wordBreak1(s, wordDict) {
    // 只需要记忆结果为false的情况
    var memory = [];
    return backTracking(s, wordDict, 0, memory);
    function backTracking(s, wordDict, startIndex, memory) {
        if (startIndex >= s.length)
            return true;
        if (memory[startIndex] === false)
            return false;
        for (var i = startIndex + 1, length = s.length; i <= length; i++) {
            var str = s.slice(startIndex, i);
            if (wordDict.includes(str) && backTracking(s, wordDict, i, memory))
                return true;
        }
        memory[startIndex] = false;
        return false;
    }
}
