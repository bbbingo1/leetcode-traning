/**
 * 题目描述
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 * @param {TreeNode} root 
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 该题解决关键在于一层一层地来，也就是顺序并不是常规的遍历顺序，于是考虑到队列的特性，设置一个队列来存放有用的节点，按队列顺序打印。
function PrintFromTopToBottom(root)
{
    const arr = [];
    const queue = [root]
    while(queue[0]){
        arr.push(queue[0].val); // 将队列中第一个元素打印
        queue[0].left && queue.push(queue[0].left); // 将该元素的左节点进队列
        queue[0].right && queue.push(queue[0].right); // 将该元素的右节点进队列
        queue.shift(); // 元素失去意义，出队列。
    }
    return arr;
}