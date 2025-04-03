var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function Permutation(arr) {
    var resArr = [];
    function backTracking(path, used) {
        if (path.length === arr.length) {
            resArr.push(__spreadArrays(path));
            return;
        }
        for (var i = 0; i < arr.length; i++) {
            if (used[i])
                continue;
            used[i] = 1;
            path.push(arr[i]);
            backTracking(path, used);
            used[i] = 0;
            path.pop();
        }
    }
    backTracking([], []);
    return resArr;
}
function permute(nums) {
    var resArr = [];
    var helperSet = new Set();
    backTracking(nums, []);
    return resArr;
    function backTracking(nums, route) {
        if (route.length === nums.length) {
            resArr.push(__spreadArrays(route));
            return;
        }
        var tempVal;
        for (var i = 0, length = nums.length; i < length; i++) {
            tempVal = nums[i];
            if (!helperSet.has(tempVal)) {
                route.push(tempVal);
                helperSet.add(tempVal);
                backTracking(nums, route);
                route.pop();
                helperSet["delete"](tempVal);
            }
        }
    }
}
;
console.log(Permutation([1, 2, 3]));
console.log(permute([1, 2, 3]));
