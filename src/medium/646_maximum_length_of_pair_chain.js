/**
 * Question:
 * Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.
 * 
 * Example 1:
 * Input: [1,2,3,4,5], k=4, x=3
 * Output: [1,2,3,4]
 * 
 * Example 2:
 * Input: [1,2,3,4,5], k=4, x=-1
 * Output: [1,2,3,4]
 * 
 * Note:
 * The value k is positive and will always be smaller than the length of the sorted array.
 * Length of the given array is positive and will not exceed 104
 * Absolute value of elements in the array and x will not exceed 104
 */

/**
 * Explanation:
 * 1. Divide into 3 parts: x < arr[0] arr[0]< x < arr[length] arr[length] < x.
 * 2. First part is arr.slice(0,k)
 * 3. Third part is return arr.slice(length-k,length)
 * 4. Second part is use bineray search find the low index
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    if(arr[0] > x) {
        return arr.slice(0,k);
    }
    const len = arr.length;
    if(arr[len-1] < x) {
        return arr.slice(len-k,len);
    }
    let low = 0, high = len-k;
    while(low<high) {
        let mid = Math.floor((low+high)/2);
        if(x-arr[mid] > arr[mid+k]-x) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return arr.slice(low,low+k);
};