/**
 * 题目描述
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 * 比如n=3时，2*3的矩形块有3种覆盖方法：
 * 题解：
 * 同为斐波那契问题，但第二项为2
 * @param {number} number 
 */
function rectCover(number) {
    /*
      f(n) = f(n-1) + f(n-2)
      f(1) = 1;
      f(2) = 2;
      f(3) = 3;
    */
    if (number <= 0) return 0;
    if (number === 1) return 1;
    if (number === 2) return 2;
    else {
        return rectCover(number - 1) + rectCover(number - 2)
    }
}