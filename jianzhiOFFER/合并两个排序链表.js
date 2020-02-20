/**
 * 题目描述
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 * @param {ListNode} pHead1 
 * @param {ListNode} pHead2 
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 递归解法
function Merge(pHead1, pHead2)
{
    // write code here
  if(!pHead1) return pHead2;
  if(!pHead2) return pHead1;
  else{
    let node = new ListNode();
    if(pHead1.val < pHead2.val){
      node.val = pHead1.val;
      node.next = Merge(pHead1.next, pHead2);
    }else{
      node.val = pHead2.val;
      node.next = Merge(pHead1, pHead2.next);
    }
    return node;
  }
}

// 迭代解法
var mergeTwoLists = function (l1, l2) {
    if(!l1 && !l2) return null;
    let head = new ListNode();
    let list = head;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        list.val = l1.val;
        l1 = l1.next;
      } else {
        list.val = l2.val;
        l2 = l2.next;
      }
      list.next = new ListNode();
      list = list.next;
    }
    list.val = l1?l1.val:l2.val;
    list.next = l1?l1.next:l2.next;
    return head;
  };