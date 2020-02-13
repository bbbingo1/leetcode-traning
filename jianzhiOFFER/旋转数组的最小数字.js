/**
 * 题目描述：把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let i = 0
    for (; i < numbers.length-1; i++) {
        if(numbers[i+1] < numbers[i]) return numbers[i+1]
    }
    return numbers[0]
};

/**
 * 题解一：直接用Math方法
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return Math.min(...nums)   
};

/**
 * 题解二：二分查找法
 * 分析：
    设置low,high左右边界，算出中间数nums[mid]
    当nums[mid] > nums[high]时，说明出现了无序的地方在右边
    low = mid+1
    否则无序点在左侧
    high = mid
    两边夹逼直到low == high ，剩下的一个元素即为无序点
 * 归纳解题技巧
    while(left < right) 在循环体外输出
    while(left <= right) 在循环体内输出
    n除以2^k可以换成位运算，提升代码性能
    n>>k
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var low = 0;
    var high = nums.length-1;
    while(low < high){
        var mid = (low+high)>>1;
        if(nums[mid] > nums[high]){
            low = mid+1;
        }else if(nums[mid] == nums[high]){
            high--;
        }else{
            high = mid
        }
    }
    return nums[low];
};