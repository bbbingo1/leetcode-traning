/**
 * 在排序数组中查找元素的第一个和最后一个位置
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
	你的算法时间复杂度必须是 O(log n) 级别。

	如果数组中不存在目标值，返回 [-1, -1]。

	示例 1:

	输入: nums = [5,7,7,8,8,10], target = 8
	输出: [3,4]
	示例 2:

	输入: nums = [5,7,7,8,8,10], target = 6
	输出: [-1,-1]

	链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let result = [-1, -1];
    let start = 0, end = nums.length - 1;
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (nums[middle] === target) {
        result = [middle, middle]
        let l = middle,r = middle;
        while (nums[--l] == target);
        result[0] = ++l;
        while (nums[++r] == target);
        result[1] = --r;
        break;
      }
      else if (nums[middle] > target) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
    return result;
  };