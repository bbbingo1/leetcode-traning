/*
 * @url: https://leetcode-cn.com/problems/single-number
 * @Description: 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * @example:
 *  示例 1:
 *    输入: [2,2,1]
 *    输出: 1
 *    示例 2:
 *    输入: [4,1,2,1,2]
 *    输出: 4
 * 
 * @summary: 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1:
// Runtime: 164 ms
var singleNumber = function (nums) {

  return nums.reduce(function (pre, cur) {
    return pre ^ cur;
  });
};
/**
 * @param {number[]} nums
 * @return {number}
 */
// solution 2
var singleNumber = function (nums) {

  var ob = {};
  nums.forEach(num => {
    if (ob[num]) {
      delete ob[num]
    } else {
      ob[num] = true
    }
  })
  return Object.keys(ob)[0]
};

/**
* @param {number[]} nums
* @return {number}
*/
// Solution 3:
//Runtime: 140 ms
var singleNumber = function (nums) {

  var res;
  for (var i in nums) {
    res ^= nums[i];
  }
  return res;
};

/**
* @param {number[]} nums
* @return {number}
*/
// Solution 4:
// Runtime: 128 ms
var singleNumber = function (nums) {

  var res = nums[0];
  for (var i = 1, l = nums.length; i < l; ++i) {
    res ^= nums[i];
  }
  return res;
};