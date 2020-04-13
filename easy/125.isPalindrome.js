/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome
 */

/**
* @param {string} s
* @return {boolean}
*/
// 时间：172 ms  内存消耗 :43.5 MB
var isPalindrome = function (s) {
    let j = Array.from(s.replace(/[^A-Za-z0-9]/g, '')).map(i => i.toLowerCase())
    return j.toString() == j.reverse().toString()
};

/**
 * @param {string} s
 * @return {boolean}
 */
// 执行用时 :92 ms 内存消耗 :37.7 MB
var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, '')
    let left = 0;
    let right = s.length - 1;
    if (!s) return true;
    while (left < right) {
      if (s[left].toString().toLocaleLowerCase() == s[right].toString().toLocaleLowerCase()) {
        left++;
        right--;
      } else {
        return false;
      }
    }
    return true;
  };