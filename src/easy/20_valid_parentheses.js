/**
 * Question:
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * Input: "()"
 * Output: true
 * 
 * Example 2:
 * Input: "()[]{}"
 * Output: true
 * 
 * Example 3:
 * Input: "(]"
 * Output: false
 * 
 * Example 4:
 * Input: "([)]"
 * Output: false
 * 
 * Example 5:
 * Input: "{[]}"
 * Output: true
 */

/**
 * Explanation:
 * 1. Use stack to hold '(' '[' '{'.
 * 2. Check the ')' ']' '}' match the pop of the stack
 * 3. If the stack is empty return true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s) {
        return true;
    }
    const left = ['(','[','{'];
    const right = [')',']','}'];
    let arr = [];
    for(let i=0;i<s.length;i++) {
        if(left.includes(s[i])) {
            arr.push(s[i]);
        }
        if(right.includes(s[i])) {
            if(right.indexOf(s[i]) !== left.indexOf(arr.pop())) {
                return false
            }
        }
    }
    return arr.length === 0;
};