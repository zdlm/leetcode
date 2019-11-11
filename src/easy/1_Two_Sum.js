/**
 * Question:
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * Explanation:
 * 1. Make loop for each number
 * 2. If the lastIndexOf(target - num) exit
 * 3. Return the result
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    nums.forEach(function(num,index){
        var num2 = nums.lastIndexOf(target-num);
        if(num2 > 0 && num2 !== index){
            result = [index, num2];
            return;
        }
    });
    return result;
};
