"use strict";
exports.__esModule = true;
var node_1 = require("../node");
function constructMaximumBinaryTree(nums) {
    if (nums.length === 0)
        return null;
    var maxIndex = 0;
    var maxVal = nums[0];
    for (var i = 1, length = nums.length; i < length; i++) {
        if (nums[i] > maxVal) {
            maxIndex = i;
            maxVal = nums[i];
        }
    }
    var rootNode = new node_1.TreeNode(maxVal);
    rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    rootNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
    return rootNode;
}
;
function arrayConstructMaximumBinaryTree(nums) {
    // 左闭右开区间[begin, end)
    function recur(nums, begin, end) {
        if (begin === end)
            return null;
        var maxIndex = begin;
        var maxVal = nums[begin];
        for (var i = begin + 1; i < end; i++) {
            if (nums[i] > maxVal) {
                maxIndex = i;
                maxVal = nums[i];
            }
        }
        var rootNode = new node_1.TreeNode(maxVal);
        rootNode.left = recur(nums, begin, maxIndex);
        rootNode.right = recur(nums, maxIndex + 1, end);
        return rootNode;
    }
    return recur(nums, 0, nums.length);
}
;
