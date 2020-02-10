/**
 * 题目描述：
 * 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
 * @param {object} head 
 */
function printListFromTailToHead(head) {
    let arr = [];
    for (let i = head; i != null; i = i.next) { arr.push(i.val) }
    return arr.reverse()
}