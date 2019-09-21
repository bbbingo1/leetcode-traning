/**
 * 给定两个整数 n 和 k，你需要实现一个数组，这个数组包含从 1 到 n 的 n 个不同整数，同时满足以下条件：
  ① 如果这个数组是 [a1, a2, a3, ... , an] ，那么数组 [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] 中应该有且仅有 k 个不同整数；.
  ② 如果存在多种答案，你只需实现并返回其中任意一种.
  示例 1:
  输入: n = 3, k = 1
  输出: [1, 2, 3]
  解释: [1, 2, 3] 包含 3 个范围在 1-3 的不同整数， 并且 [1, 1] 中有且仅有 1 个不同整数 : 1
  示例 2:
  输入: n = 3, k = 2
  输出: [1, 3, 2]
  解释: [1, 3, 2] 包含 3 个范围在 1-3 的不同整数， 并且 [2, 1] 中有且仅有 2 个不同整数: 1 和 2
  提示:
   n 和 k 满足条件 1 <= k < n <= 104.
 * 
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
//方法一
/*
执行用时：120 ms
*/
var constructArray = function (n, k) {
  //找规律：第一位定为0，后面偶数位(i为奇数)就是前一位+k，奇数位就是前一位-k；同时每过一位k递减，直到k为零时就按位数输出值
  let arr = [];
  arr[0] = 1;
  for (let i = 1; i < n; i++) {
    if (k) {
      arr[i] = i % 2 ? arr[i - 1] + k : arr[i - 1] - k
      k--;
    }
    else {
      arr[i] = i + 1;
    }
  }
  return arr;
};

//方法二：初始化为1到n，此时差值为1种，然后从第二位到末位开始不停翻转即可，翻转一次增加一种差值
/*
执行用时 :
188 ms
内存消耗 :
36.9 MB
 */
var constructArray = function (n, k) {
  let arr = [];
  let i;
  for (i = 0; i < n; i++) {
    arr[i] = i + 1
  }
  for (i = 1; k > 1; i++) {
    temporarySwapHalf(arr, i)
    k--
    // console.log(arr,i)
  }
  return arr;
};
function temporarySwapHalf(array, left) {
  //数组从指定项到末尾实现翻转
  let right = null
  let length = array.length - left
  for (let j = 0; j < length / 2; left++ , j++) {
    right = array.length - 1 - j;
    var temporary = array[left];
    array[left] = array[right];
    array[right] = temporary;
  }
}

