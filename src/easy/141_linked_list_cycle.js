/**
 * Question:
 * Given a linked list, determine if it has a cycle in it.
 * 
 * To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
 * 
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where tail connects to the second node.
 * 
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where tail connects to the first node.
 * 
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 * 
 * Follow up:
 * Can you solve it using O(1) (i.e. constant) memory?
 */

/**
 * Explanation:
 * 1. Use two pointers, walker and runner.
 * 2. walker moves step by step. runner moves two steps at time.
 * 3. if the Linked List has a cycle walker and runner will meet at some point.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) {
        return false;
    }
    let walker = head;
    let runner = head;
    while(walker && walker.next && runner && runner.next && runner.next.next) {
        walker = walker.next;
        runner = runner.next.next;
        if(walker === runner) {
            return true;
        }
    }
    return false;
};