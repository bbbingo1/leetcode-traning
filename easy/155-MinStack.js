/**
 * 最小栈
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.

 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.arr = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.arr.push(x);
  // this.arr[this.arr.length] = x
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.arr.pop();
  // delete this.arr[arr.length-1]
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.arr[this.arr.length-1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  let min = this.arr[0];
  this.arr.forEach(x => min = Math.min(min,x))
  return min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/