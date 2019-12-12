/**
 * 两数相加
 * 题目描述
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Runtime：124ms
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let p1 = l1.val;
  let p2 = l2.val;
  if (p1 == 0 && l1.next == null) return l2;
  if (p2 == 0 && l2.next == null) return l1;
  const list = new ListNode();
  let dynamicList = list;
  while (l1 || l2 || carry) {
    let sum = p1 + p2 + carry;
    if (sum > 9) {
      dynamicList.next = new ListNode(sum % 10);
      carry = 1;
    } else {
      dynamicList.next = new ListNode(sum);
      carry = 0;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    p1 = l1 ? l1.val : 0;
    p2 = l2 ? l2.val : 0;
    dynamicList = dynamicList.next
  }
  return list.next;
};