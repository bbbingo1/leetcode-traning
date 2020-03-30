/**
 *题目描述：
  给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
	示例 1:
    输入: 3
    输出:
    [
    [ 1, 2, 3 ],
    [ 8, 9, 4 ],
    [ 7, 6, 5 ]
    ]
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    if (!n) return [];
    let left = 0, top = 0, right = n - 1, bottom = n - 1;
    let result = new Array(n).fill(0); // 这里发现，map方法生效，必须满足a中元素不为空，也就是说，map会跳过数组中的空位。
    result = result.map(i => new Array(n));
    let k = 1;
    let i = 0, j = 0;
    result[0][0] = 1;
    while (k < n * n) {
        goRight();
        goBottom();
        goLeft();
        goTop();
    }
    function goRight() {
        while (j < right) {
            j++;
            result[i][j] = ++k;
        }
        top++;
    }

    function goBottom() {
        while (i < bottom) {
            i++;
            result[i][j] = ++k;
        }
        right--;
    }

    function goLeft() {
        while (j > left) {
            j--;
            result[i][j] = ++k;
        }
        bottom--;
    }

    function goTop() {
        while (i > top) {
            i--;
            result[i][j] = ++k;
        }
        left++;
    }
    return result;
};