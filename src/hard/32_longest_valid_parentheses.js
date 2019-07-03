/**
 * Question:
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 * 
 * Example 1:
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 * 
 * Example 2:
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 */

/**
 * Explanation:
 * 1. Mapping all the string char to an array.
 * 2. The left '(' without close is 1.
 * 3. The right ')' without open is 2.
 * 4. In the loop change the valid '()' to 0.
 * 5. Count the longest continuously 0 is the result.
 */

 /**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max = 0;
    let cur = 0;
    let arr = []
    for(let i=0;i<s.length;i++) {
        if(s[i] === '(') {
            arr.push(1);
        } 
        if(s[i] === ')') {
            let index = arr.lastIndexOf(1);
            if(index >= 0) {
                arr[index] = 0;
                arr.push(0);
            } else {
                arr.push(2);
            }
        }
    }
    for(let i=0;i<=arr.length;i++) {
        if(arr[i] === 0) {
            cur++;
        } else {
            max = Math.max(max, cur);
            cur = 0;
        }
        if(i === arr.length) {
            max = Math.max(max, cur);
        }
    }
    return max;
};