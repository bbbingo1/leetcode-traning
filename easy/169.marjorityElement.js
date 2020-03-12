/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * @param {number[]} nums
 * @return {number}
 */
// 哈希解法 o(n)
var majorityElement = function (nums) {
    var n = nums.length / 2;
    var obj = {};
    for (let i of nums) {
      if (!obj.hasOwnProperty(i)) {
        obj[i] = 1;
      }
      else {
        obj[i]++;
      }
      if (obj[i] > n) {
        return i
      }
    }
  };