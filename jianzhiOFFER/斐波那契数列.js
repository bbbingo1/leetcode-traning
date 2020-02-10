/**
 * 题目描述
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
 * n<=39
 * @param {number} n 
 */
function Fibonacci(n)
{
  if(n == 0) return 0;
  let i = 0;
  let sum = 1;
  while(n > 1){
    sum = i + sum;
    i = sum - i;
    n--;
  }
  return sum;
}