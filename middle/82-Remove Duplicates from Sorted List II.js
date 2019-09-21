/**
 * Definition for singly-linked list.(中级)
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *  给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
    示例 1:

    输入: 1->2->3->3->4->4->5
    输出: 1->2->5
    示例 2:

    输入: 1->1->1->2->3
    输出: 2->3
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//使用链表
var deleteDuplicates = function (head) {
  if (!head && !head.next) {
    return head;
  }
  else {
    let beforeHead = new ListNode(null);
    beforeHead.next = head;
    //{el:null,next:head}
    let p = beforeHead;
    let q = p.next;//用p和q来截断重复的部分；p代表重复部分的开头的前驱位，q代表重复部分的末尾位
    let flag = false;//表示出现了重复部分
    while (q.next) {
      if (q.val == q.next.val) {
        q = q.next;
        flag = true;
        if (!q.next) {
          //若q此时已是最后一个节点
          p.next = q.next;//截断重复部分
          break;
        }
      } else if (flag) {
        //出现重复且到此重复终止
        p.next = q.next;//截断重复部分
        flag = false;
        q = q.next;
      } else {
        p = q;
        q = q.next;
      }
    }
    return beforeHead.next;
  }
};
/**
输入
[1,2,3,4,4,5,6,7,7]
输出
[1,2,3,5,6]
预期结果
[1,2,3,5,6]
*/