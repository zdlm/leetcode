/**
 * Question:
 * Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.
 * 
 * The length of path between two nodes is represented by the number of edges between them.
 * 
 * Example 1:
 * Input: 
 *            5
 *           / \
 *          4   5
 *         / \   \
 *        1   1   5
 * Output: 2
 * 
 * Example 2:
 * Input: 
 * 
 *            1
 *           / \
 *          4   5
 *         / \   \
 *        4   4   5
 * Output: 2
 * 
 * Note:
 * The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.
 */

/**
 * Explanation:
 * This solution is based on understanding the problem definition as follows. The longest Univalue Path falls into ONE of the three possible scenarios:
 * 1. It exists somewhere in the Left subtree
 * 2. It exists somewhere in the Right subtree
 * 3. It exists as a straight path from the Left subtree, through the Root, and to a path in the Right subtree.
 * Therefore, the helper function returns the longest values through the root. The uniVal is root.val.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    if(!root) {
        return 0;
    }
    return Math.max(longestUnivaluePath(root.left), 
                    longestUnivaluePath(root.right),
                    helper(root.left,root.val)+helper(root.right, root.val));
};

var helper = function(root, uniVal) {
    if(!root || root.val !== uniVal) {
        return 0;
    }
    return Math.max(helper(root.left, uniVal), helper(root.right, uniVal)) + 1;
}