/**
 * 题目描述
给你两个数组，arr1 和 arr2，
arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

示例：
输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
 
提示：
arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
arr2 中的元素 arr2[i] 各不相同
arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// 思路，通过对照将arr1中与arr2相同的相对项向前插入，设置insertIndex记录前插入的当前项号，之后再对后面的进行排序
// Runtime: 136ms
var relativeSortArray = function (arr1, arr2) {
  let insertIndex = 0; // 作为前插入的当前项号
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] == arr2[i]) {
        arr1.splice(j, 1);
        arr1.splice(insertIndex, 0, arr2[i]);
        insertIndex++;
      }
    }
  }
  console.log(insertIndex,arr1)
  // 后续排序
  let preIdx, currentVal;
  for (let i = insertIndex+1; i < arr1.length; i++) {
    preIdx = i - 1;
    currentVal = arr1[i];
    console.log(currentVal)
    while (preIdx >= insertIndex && arr1[preIdx] > currentVal) {
      arr1[preIdx + 1] = arr1[preIdx]
      preIdx--;
    }
    arr1[preIdx+1] = currentVal;
    console.log(arr1)
  }
  return arr1;
};
// console.log(relativeSortArray(arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19, 12, 323, 4, 23], arr2 = [2, 1, 4, 3, 9, 6]))
console.log(relativeSortArray([2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31], [2, 42, 38, 0, 43, 21]))
