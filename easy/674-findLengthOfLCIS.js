/**
 * 给定一个未经排序的整数数组，找到最长且连续的的递增序列。
    示例 1:
    输入: [1,3,5,4,7]
    输出: 3
    解释: 最长连续递增序列是 [1,3,5], 长度为3。
    尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if(nums.length === 0) return 0;
    let max = 1;
    let auth = 1;
    nums.reduce((pre, cur) => {
      if (pre < cur) {
        auth++;
      }
      else{
        max = Math.max(max,auth);
        auth = 1;
      }
      return cur;
    })
    return Math.max(max,auth);
  };