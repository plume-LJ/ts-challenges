import { TreeNode } from "../node";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;
  let maxIndex: number = 0;
  let maxVal: number = nums[0];
  for (let i = 1, length = nums.length; i < length; i++) {
      if (nums[i] > maxVal) {
          maxIndex = i;
          maxVal = nums[i];
      }
  }
  const rootNode: TreeNode = new TreeNode(maxVal);
  rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  rootNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return rootNode;
};

function arrayConstructMaximumBinaryTree(nums: number[]): TreeNode | null {
  // 左闭右开区间[begin, end)
  function recur(nums: number[], begin: number, end: number): TreeNode | null {
      if (begin === end) return null;
      let maxIndex: number = begin;
      let maxVal: number = nums[begin];
      for (let i = begin + 1; i < end; i++) {
          if (nums[i] > maxVal) {
              maxIndex = i;
              maxVal = nums[i];
          }
      }
      const rootNode: TreeNode = new TreeNode(maxVal);
      rootNode.left = recur(nums, begin, maxIndex);
      rootNode.right = recur(nums, maxIndex + 1, end);
      return rootNode;
  }
  return recur(nums, 0, nums.length);
};