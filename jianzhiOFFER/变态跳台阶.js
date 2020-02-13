/**
 * 题目描述
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * 题解：
 * n = n时，会有n中跳的方式，1阶、2阶...n阶，得出结论：
 *  f(n) = f(n-1)+f(n-2)+...+f(n-(n-1)) + f(n-n) => f(0) + f(1) + f(2) + f(3) + ... + f(n-1)
 * 由以上公式得出解法1
 * 进一步简化：
 *  f(n-1) = f(0) + f(1)+f(2)+f(3) + ... + f((n-1)-1) = f(0) + f(1) + f(2) + f(3) + ... + f(n-2)
 *  f(n) = f(0) + f(1) + f(2) + f(3) + ... + f(n-2) + f(n-1) = f(n-1) + f(n-1)
 * 可以得出：
 *  f(n) = 2*f(n-1)
 * 由以上公式得出解法2、3
 * @param {number} number 
 */
// 递归解法1
// 运行时间：23ms
// 占用内存：5548k
function jumpFloorII(number) {
  if (number === 0 || number === 1)
    return 1;
  else if (number >= 2) {
    let sum = 0;
    while (number > 0) {
      sum += jumpFloorII(--number)
    }
    return sum;
  }
}
console.log(jumpFloorII(3))

// 递归解法2
// 运行时间：14ms
// 占用内存：5304k
function jumpFloorII(number) {
  if (number === 0 || number === 1)
    return 1;
  else if (number >= 2) {
    return 2*jumpFloorII(number-1);
  }
}
console.log(jumpFloorII(3))

// 解法3（非递归）
// 运行时间：14ms
// 占用内存：5304k
function jumpFloorII(number)
{
    let i = 1;
    while(-- number) {
        i *= 2;
    }
    return i;
}
/* function jumpFloorII(number)
{
    return 1<<(--number);
}
 */