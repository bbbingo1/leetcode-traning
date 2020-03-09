/**
 * 解题思路
 * n个骰子，每个骰子6个面，总情况数为6^n
 * 设F(n,s)F(n,s)为当骰子数为n，和为s的情况数量。
 * 当n=1时，F(1,s)=1,其中s=1,2,3,4,5,6
 * 当n≥2时，F(n,s)=F(n−1,s−1)+F(n−1,s−2)+F(n−1,s−3)+F(n−1,s−4)+F(n−1,s−5)+F(n−1,s−6)
 * 又因为s-d>=n-1，所以d<=s-n+1
 * 
 * 时间复杂度：O(n^2)；空间复杂度：O((n+1)(6n+1))=O(n^2)
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function (n) {
  if (n === 1) return [0.16667, 0.16667, 0.16667, 0.16667, 0.16667, 0.16667];
  else if (n >= 2) {
    let arr = [];
    for (let i = 0; i < 5 * n + 1; i++) { //  根据推算，共有6n-(n-1)种结果；i表示数组的第i项，同时n+0是可取到的最小的值
      arr[i] = getCount(n, n + i) * 1.0 / (6 ** n);  //  每种结果出现的次数除以总的次数
    }
    return arr;
  }

};
function getCount(n, s) {
  if (n == 1) return 1; // F(1,s)=1,其中s=1,2,3,4,5,6
  else if (n >= 2) {
    let sum = 0;
    for (let i = 1; i <= 6 && s - i >= n - 1; i++) {
      // i表示最后一个数掷出的结果为i
      if (s - i > (n - 1) * 6) continue;
      // F(n,s)=F(n−1,s−1)+F(n−1,s−2)+F(n−1,s−3)+F(n−1,s−4)+F(n−1,s−5)+F(n−1,s−6)，且同时满足n-1个骰子的投掷情况：s-i>=n-1及s-i<6(n-1)
      sum += getCount(n - 1, s - i)
    }
    return sum;
  }
}

console.log(twoSum(1))
console.log(twoSum(2))
console.log(twoSum(3))