import { TreeNode } from "../node";

function postBuildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (postorder.length === 0) return null;
  const rootVal: number = postorder.pop()!;
  const rootValIndex: number = inorder.indexOf(rootVal);
  const rootNode: TreeNode = new TreeNode(rootVal);
  rootNode.left = postBuildTree(inorder.slice(0, rootValIndex), postorder.slice(0, rootValIndex));
  rootNode.right = postBuildTree(inorder.slice(rootValIndex + 1), postorder.slice(rootValIndex));
  return rootNode;
};
function arrayPostBuildTree(inorder: number[], postorder: number[]): TreeNode | null {
  function recur(
      inorder: number[], postorder: number[],
      inBegin: number, inEnd: number,
      postBegin: number, postEnd: number
  ): TreeNode | null {
      if (postBegin === postEnd) return null;
      const rootVal: number = postorder[postEnd - 1]!;
      const rootValIndex: number = inorder.indexOf(rootVal, inBegin);
      const rootNode: TreeNode = new TreeNode(rootVal);

      const leftInorderBegin: number = inBegin;
      const leftInorderEnd: number = rootValIndex;
      const rightInorderBegin: number = rootValIndex + 1;
      const rightInorderEnd: number = inEnd;

      const leftPostorderBegin: number = postBegin;
      const leftPostorderEnd: number = postBegin + rootValIndex - inBegin;
      const rightPostorderBegin: number = leftPostorderEnd;
      const rightPostorderEnd: number = postEnd - 1;

      rootNode.left = recur(
          inorder, postorder,
          leftInorderBegin, leftInorderEnd,
          leftPostorderBegin, leftPostorderEnd
      );
      rootNode.right = recur(
          inorder, postorder,
          rightInorderBegin, rightInorderEnd,
          rightPostorderBegin, rightPostorderEnd
      );
      return rootNode;
  }
  return recur(inorder, postorder, 0, inorder.length, 0, inorder.length);
};

function preBuildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null;
  const rootVal: number = preorder[0];
  const rootNode: TreeNode = new TreeNode(rootVal);
  const rootValIndex: number = inorder.indexOf(rootVal);
  rootNode.left = preBuildTree(preorder.slice(1, rootValIndex + 1), inorder.slice(0, rootValIndex));
  rootNode.right = preBuildTree(preorder.slice(rootValIndex + 1), inorder.slice(rootValIndex + 1));
  return rootNode;
};

function arrayPreBuildTree(preorder: number[], inorder: number[]): TreeNode | null {
  function recur(
      preorder: number[], inorder: number[],
      preBegin: number, preEnd: number,
      inBegin: number, inEnd: number
  ): TreeNode | null {
      if (preBegin === preEnd) return null;
      const rootVal: number = preorder[preBegin];
      const rootNode: TreeNode = new TreeNode(rootVal);
      const rootValIndex: number = inorder.indexOf(rootVal, inBegin);

      const leftPreBegin: number = preBegin + 1;
      const leftPreEnd: number = preBegin + rootValIndex - inBegin + 1;
      const leftInBegin: number = inBegin;
      const leftInEnd: number = rootValIndex;

      const rightPreBegin: number = leftPreEnd;
      const rightPreEnd: number = preEnd;
      const rightInBegin: number = rootValIndex + 1;
      const rightInEnd: number = inEnd;

      rootNode.left = recur(preorder, inorder, leftPreBegin, leftPreEnd, leftInBegin, leftInEnd);
      rootNode.right = recur(preorder, inorder, rightPreBegin, rightPreEnd, rightInBegin, rightInEnd);
      return rootNode;
  };
  return recur(preorder, inorder, 0, preorder.length, 0, inorder.length);
};