/**
 * 题目描述
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
    / \
  9  20
    /  \
    15   7
*
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// runtime:76 ms; memory：37.1 MB
var maxDepth = function (root) {
  if (!root) return 0;
  if (root.left || root.right) {
    if (!root.left) return 1 + getDepth(root.right)
    if (!root.right) return 1 + getDepth(root.left)
    return 1 + Math.max(getDepth(root.left), getDepth(root.right))
  } else {
    return 1;
  }
}

// runtime: 80 ms; memory：37.3 MB
// var maxDepth = function (root) {
//   if (!root) return 0;
//   return getDepth(root);
// }
// function getDepth(node) {
//   if (node.left || node.right) {
//     if (!node.left) return 1 + getDepth(node.right)
//     if (!node.right) return 1 + getDepth(node.left)
//     return 1 + Math.max(getDepth(node.left), getDepth(node.right))
//   } else {
//     return 1;
//   }
// }