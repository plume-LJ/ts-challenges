function combine(n, k) {
    var resArr = [];
    function backTracking(n, k, startIndex, tempArr) {
        if (tempArr.length === k) {
            resArr.push(tempArr.slice());
            return;
        }
        for (var i = startIndex; i <= n - k + 1 + tempArr.length; i++) {
            tempArr.push(i);
            backTracking(n, k, i + 1, tempArr);
            tempArr.pop();
        }
    }
    backTracking(n, k, 1, []);
    return resArr;
}
;
function combinationSum3(k, n) {
    var resArr = [];
    function backTracking(k, n, sum, startIndex, tempArr) {
        if (sum > n)
            return;
        if (tempArr.length === k) {
            if (sum === n) {
                resArr.push(tempArr.slice());
            }
            return;
        }
        for (var i = startIndex; i <= 9 - (k - tempArr.length) + 1; i++) {
            tempArr.push(i);
            backTracking(k, n, sum + i, i + 1, tempArr);
            tempArr.pop();
        }
    }
    backTracking(k, n, 0, 1, []);
    return resArr;
}
;
