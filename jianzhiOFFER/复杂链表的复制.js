/**
 * 题目描述
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
 * 另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 * @param {RandomListNode} pHead 
 */
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    if (!pHead) {
      return null;
    }
    const map = new Map();
    let node = pHead;
    const newHead = new RandomListNode(node.val)
    let newNode = newHead;
    map.set(node, newNode)
  
    while (node.next) {
      node = node.next;
      newNode.next = new RandomListNode(node.val);
      newNode = newNode.next;
      map.set(node, newNode)
    }
    node = pHead;
    newNode = newHead;
  
    while (newNode) {
      newNode.random = map.get(node.random)
      node = node.next;
      newNode = newNode.next;
    }
    return newHead;
}