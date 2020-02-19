/**
 * 题目描述
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 * @param {TreeNode} pRoot1 
 * @param {TreeNode} pRoot2 
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
    if (!(pRoot1 && pRoot2)) return false;
    return isSubTree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}
function isSubTree(pRoot1, pRoot2) {
    // B树遍历完了，说明B是A的子结构
    if (!pRoot2) return true;
    // A遍历完了，但是B还没有遍历完，那么B肯定不是A的子结构
    if (!pRoot1) return false;
    if (pRoot1.val == pRoot2.val)
        return isSubTree(pRoot1.left, pRoot2.left) && isSubTree(pRoot1.right, pRoot2.right);
    return false;
}