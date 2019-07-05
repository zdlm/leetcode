/**
 * Question:
 * You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.
 * 
 * Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.
 * 
 * Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.
 * 
 * Example 1:
 * Input: [[1,2], [2,3], [3,4]]
 * Output: 2
 * Explanation: The longest chain is [1,2] -> [3,4]
 * 
 * Note:
 * The number of given pairs will be in the range [1, 1000].
 */

/**
 * Explanation:
 * 1. Check the empty status.
 * 2. Sort the array based on the right value
 * 3. Count the number follow the patten
 * 4. Update the current right value
 */

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    if(pairs.length < 1) {
        return 0;
    }
    let count = 1;
    pairs.sort((a,b) => a[1]-b[1]);
    let currentRight = pairs[0][1];
    for(let i=1;i<pairs.length;i++) {
        if(currentRight < pairs[i][0]) {
            count ++;
            currentRight = pairs[i][1];
        }
    }
    return count;
};