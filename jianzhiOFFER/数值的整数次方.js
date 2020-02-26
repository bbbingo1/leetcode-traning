/**
 * 题目描述
 * 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 * 保证base和exponent不同时为0
 * @param {double} base 
 * @param {number} exponent 
 */
function Power(base, exponent)
{
    // write code here
    if(!base) return 0;
    if(exponent < 0){
        let result = 1;
        while(exponent++){
            result  = result*base
        }
        return 1/result
    }
    if(exponent == 0) return 1;
    else{
        let result = 1;
        while(exponent--){
            result *= base;
        }
        return result;
    }
}