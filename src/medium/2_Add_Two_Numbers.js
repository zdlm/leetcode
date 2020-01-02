/**
 * Question:
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */

/**
 * Explanation:
 * 1. Use recoursion if it is linked list
 * 2. The hard part is carry if you the sum > 10
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1) {
        return l2;
    }
    if(!l2) {
        return l1;
    }
    var sum = l1.val + l2.val;
    if(sum >= 10) {
        l1.val = sum % 10;
        l1.next = carry(l1.next);
    } else {
        l1.val = sum;
    }
    l1.next = addTwoNumbers(l1.next, l2.next);
    return l1;
};

var carry = function(l) {
    if(!l) {
        return {
            val: 1,
            next: null
        }
    }
    if (l.val + 1 >= 10) {
        l.val = (l.val + 1) % 10;
        l.next = carry(l.next);
    } else {
        l.val = l.val + 1;
    }
    return l;
}
