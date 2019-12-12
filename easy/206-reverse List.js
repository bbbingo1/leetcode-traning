/**
 * 反转一个单链表。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代解法
// runtime:60 ms, memoryConsumption:35 MB
var reverseList = function(head) {
  let pre,cur;
  pre = null;
  cur = head;
  while(cur){
    var p = cur.next;
    cur.next = pre;
    pre = cur;
    cur = p;
  }
  head = pre;
  return head;
};

// 递归解法
// runtime:68 ms, memoryConsumption:35.8 MB
var reverseList = function(head) {
  if(!head) return ''
  return reverseArrow(head,null);
}
var reverseArrow = function(cur,pre){
  if(cur.next == null){
    cur.next = pre;
    return cur;
  }
  var p = cur.next;
  cur.next = pre;
  return reverseArrow(p,cur);
}