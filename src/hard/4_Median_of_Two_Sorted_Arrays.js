/**
 * Question:
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *You may assume nums1 and nums2 cannot be both empty.
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * https://www.youtube.com/watch?v=KB9IcSCDQ9k
 * 
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 * 
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 */

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;
    if (m > n) {
        return findMedianSortedArrays(nums2, nums1);
    }
    var k = Math.floor((m + n + 1)/2);
    var l = 0;
    var r = m;
    while(l < r) {
        var m1 = l + Math.floor((r - l)/2);
        var m2 = k - m1;
        if(nums1[m1] < nums2[m2 - 1]){
            l = m1 + 1;
        }else {
            r = m1
        }
    }
    var m1 = l;
    var m2 = k - l;
    var c1 = Math.max(m1 <= 0 ? -Infinity : nums1[m1-1], m2 <= 0 ? -Infinity : nums2[m2 - 1]);
    if((m+n)%2===1) {
        return c1;
    }
    var c2 = Math.min(m1 >= m ? Infinity : nums1[m1], m2 >= n ? Infinity : nums2[m2]);
    return (c1+c2) * 0.5;
};
