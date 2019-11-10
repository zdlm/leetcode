/**
 * Question:
 * Given a non-empty integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing a selected element by 1 or decrementing a selected element by 1.
 * 
 * You may assume the array's length is at most 10,000.
 * 
 * Example:
 * Input:
 * [1,2,3]
 * Output:2
 * Explanation:
 * Only two moves are needed (remember each move increments or decrements one element):
 *
 * [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
 */

/**
 * Explanation:
 * Sort the array first
 * Find the middle number of the array
 * The sum of distance is the result
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    let sorted = nums.sort((a,b) => a-b);
    let mid = sorted[Math.floor(nums.length/2)];
    return sorted.reduce((count,cur) => count + Math.abs(cur-mid),0);
};
