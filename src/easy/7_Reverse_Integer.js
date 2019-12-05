/**
 * Question:
 * Given a 32-bit signed integer, reverse digits of an integer.
 * https://leetcode.com/problems/reverse-integer/
 * 
 * Example 1:
 * Input: 123
 * Output: 321
 * 
 * Example 2:
 * Input: -123
 * Output: -321
 * 
 * Example 3:
 * Input: 120
 * Output: 21
 */

 /**
 * Explanation:
 * Js array revert
 */

 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < 0) {
        return -reverse(-x);
    }
    var res = parseInt(x.toString().split('').reverse().join(''));
    if(res > 2**31-1) {
        return 0;
    }
    return res;
};
