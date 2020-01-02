/**
 * Question:
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3. 
 *
 * Example 2:
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring. 
 * 
 */

/**
 * Explanation:
 * 1. Use map to save all the chars in the string
 * 2. Change the start and max length
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let maxLen = 0;
    let map = new Map();
    for(let i=0;i<s.length;i++) {
        const ch = s[i];
        if(map.get(ch) >= start) {
            start = map.get(ch) + 1;
        }
        map.set(ch, i);
        if(i - start + 1 > maxLen) {
            maxLen = i - start + 1;
        }
    }
    return maxLen;
};
