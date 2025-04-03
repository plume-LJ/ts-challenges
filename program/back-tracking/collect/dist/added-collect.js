function findSubsequences(nums) {
    var resArr = [];
    backTracking(nums, 0, []);
    return resArr;
    function backTracking(nums, startIndex, route) {
        var length = nums.length;
        if (route.length >= 2) {
            resArr.push(route.slice());
        }
        var usedSet = new Set();
        for (var i = startIndex; i < length; i++) {
            if (nums[i] < route[route.length - 1] ||
                usedSet.has(nums[i]))
                continue;
            usedSet.add(nums[i]);
            route.push(nums[i]);
            backTracking(nums, i + 1, route);
            route.pop();
        }
    }
}
;
console.log(findSubsequences([5, 2, 3,]));
