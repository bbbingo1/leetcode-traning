/**
 * 题目描述：
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，
 * 使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let i = 0, j, k;
    let result = nums[0] + nums[1] + nums[2];
    let sum;
    let len = nums.length;
    nums.sort((a, b) => a - b);
    while (i < nums.length) {
      left = i + 1;
      right = len - 1;
      while (left < right) {
        sum = nums[i] + nums[left] + nums[right]
        if (sum - target === 0) {
          return sum;
        } else if (Math.abs(sum - target) < Math.abs(result - target)) {
          result = sum;
        }
        if (sum - target > 0) {
          right--;
        } else {
          left++;
        }
      }
      i++;
    }
    return result;
  };