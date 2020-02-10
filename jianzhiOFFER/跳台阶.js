/**
 * 题目描述
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 * @param {number} number 
 */
// 递归解法1：
function jumpFloor(number) {
    let sum = 0;
    function canJump(n) {
        // console.log(n)
        if (n >= 2) {
            canJump(n - 1)
            canJump(n - 2)
        }
        if (n === 0 || n === 1) {
            sum++;
        }
    }
    canJump(number);
    return sum;
}
console.log(jumpFloor(1))

// 递归解法2：
function jumpFloor(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else if (number >= 2) {
        return jumpFloor(number - 1) + jumpFloor(number - 2)
    }
}
console.log(jumpFloor(7))

/**
 * 题解：
 * 对于本题,前提只有 一次 1阶或者2阶的跳法。
 * a.如果两种跳法，1阶或者2阶，那么假定第一次跳的是一阶，那么剩下的是n-1个台阶，跳法是f(n-1);
 * b.假定第一次跳的是2阶，那么剩下的是n-2个台阶，跳法是f(n-2)
 * c.由a\b假设可以得出总跳法为: f(n) = f(n-1) + f(n-2) 
 * d.然后通过实际的情况可以得出：只有一阶的时候 f(1) = 1 ,只有两阶的时候可以有 f(2) = 2
 * e.可以发现最终得出的是一个斐波那契数列：
           | 1, (n=1)
 * f(n) =  | 2, (n=2) 
           | f(n-1)+f(n-2) ,(n>2,n为整数)
 *  即求数列的第n项      
 */

// 非递归，循环解法：
function jumpFloor(number) {
    if (number === 1) return 1;
    let sum = 2;
    let i = 1;
    while (--number > 1) {
        sum += i;
        i = sum - i;
    }
    return sum;
}
