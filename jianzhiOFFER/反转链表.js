/**
 * 题目描述:输入一个链表，反转链表后，输出新链表的表头。
 * @param {object} pHead 
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    if (pHead == null || pHead.next == null) return pHead;
    let p = null, q = null, m = pHead;
    while (m) {
        p = m.next;
        m.next = q;
        q = m;
        m = p;
    }
    return q;
}