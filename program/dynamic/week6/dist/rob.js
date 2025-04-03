"use strict";
exports.__esModule = true;
exports.rob4 = exports.rob3 = exports.rob2 = exports.rob = void 0;
var node_1 = require("program/tree/node");
function rob(nums) {
    var dp = [nums[0], Math.max(nums[0], nums[1])];
    for (var i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[nums.length - 1];
}
exports.rob = rob;
// console.log(rob([1, 2, 3, 1]));
// console.log(rob([2, 7, 9, 3, 1]));
function rob2(nums) {
    var len = nums.length;
    if (!len)
        return 0;
    if (len === 1)
        return nums[0];
    return Math.max(robRange(nums, 0, len - 2), robRange(nums, 1, len - 1));
}
exports.rob2 = rob2;
function robRange(nums, start, end) {
    if (start === end)
        return nums[start];
    var dp = [nums[start], Math.max(nums[start], nums[start + 1])];
    for (var i = start + 2; i <= end; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[end];
}
function rob3(tree) {
    var set = new Map();
    function rob(tree) {
        if (tree === null)
            return 0;
        if (tree.left === null && tree.right === null)
            return tree.val;
        if (set.has(tree))
            return set.get(tree);
        var num1 = tree.val;
        if (tree.left)
            num1 += rob(tree.left.left) + rob(tree.left.right);
        if (tree.right)
            num1 += rob(tree.right.left) + rob(tree.right.right);
        var num2 = rob(tree.left) + rob(tree.right);
        var result = Math.max(num1, num2);
        set.set(tree, result);
        return result;
    }
    return rob(tree);
}
exports.rob3 = rob3;
console.log(rob3(new node_1.TreeNode(3, new node_1.TreeNode(2, new node_1.TreeNode(3), new node_1.TreeNode(3)), new node_1.TreeNode(3, null, new node_1.TreeNode(1)))));
function rob4(tree) {
    function robTree(tree) {
        if (tree === null)
            return [0, 0];
        var left = robTree(tree.left);
        var right = robTree(tree.right);
        var val1 = tree.val + left[0] + right[0];
        var val2 = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return [val1, val2];
    }
    var result = robTree(tree);
    return Math.max(result[0], result[1]);
}
exports.rob4 = rob4;
