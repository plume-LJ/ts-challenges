function combinationSum(candidates, target) {
    var resArr = [];
    function backTracking(candidates, target, startIndex, route, curSum) {
        if (curSum > target)
            return;
        if (curSum === target) {
            resArr.push(route.slice());
            return;
        }
        for (var i = startIndex, length = candidates.length; i < length; i++) {
            var tempVal = candidates[i];
            route.push(tempVal);
            backTracking(candidates, target, i, route, curSum + tempVal);
            route.pop();
        }
    }
    backTracking(candidates, target, 0, [], 0);
    return resArr;
}
;
function combinationSum1(candidates, target) {
    var resArr = [];
    function backTracking(candidates, target, startIndex, route, curSum) {
        // if (curSum > target) return;
        if (curSum === target) {
            resArr.push(route.slice());
            return;
        }
        for (var i = startIndex, length = candidates.length; i < length && curSum + candidates[i] <= target; i++) {
            var tempVal = candidates[i];
            route.push(tempVal);
            backTracking(candidates, target, i, route, curSum + tempVal);
            route.pop();
        }
    }
    backTracking(candidates, target, 0, [], 0);
    return resArr;
}
;
console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum1([2, 3, 6, 7, 5], 12));
