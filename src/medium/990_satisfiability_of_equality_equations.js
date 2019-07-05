/**
 * Question:
 * Given an array equations of strings that represent relationships between variables, each string equations[i] has length 4 and takes one of two different forms: "a==b" or "a!=b".  Here, a and b are lowercase letters (not necessarily different) that represent one-letter variable names.
 * 
 * Return true if and only if it is possible to assign integers to variable names so as to satisfy all the given equations.
 * 
 * Example 1:
 * Input: ["a==b","b!=a"]
 * Output: false
 * Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.  There is no way to assign the variables to satisfy both equations.
 * 
 * Example 2:
 * Input: ["b==a","a==b"]
 * Output: true
 * Explanation: We could assign a = 1 and b = 1 to satisfy both equations.
 * 
 * Example 3:
 * Input: ["a==b","b==c","a==c"]
 * Output: true
 * 
 * Example 4:
 * Input: ["a==b","b!=c","c==a"]
 * Output: false
 * 
 * Example 5:
 * Input: ["c==c","b==d","x!=z"]
 * Output: true
 * 
 * Note:
 * 1 <= equations.length <= 500
 * equations[i].length == 4
 * equations[i][0] and equations[i][3] are lowercase letters
 * equations[i][1] is either '=' or '!'
 * equations[i][2] is '='
 */

/**
 * Explanation:
 * 1. Find out all the equal ones.
 * 2. Generate a map, which includes all equal letter
 * 3. Union all the equal letters
 * 4. Find out the unequal letters 
 * 5. Check them if they break the equal rules
 */

/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let map = new Map();
    equations.filter(e => e.charAt(1) === '=').forEach(e => {
        let left = e.charAt(0);
        let right = e.charAt(3);
        if (left !== right) {
            if(!map.has(left) && !map.has(right)) {
                map.set(left,new Set([left, right]));
                map.set(right,new Set([left, right]));
            }
            if(map.has(left) && !map.has(right)) {
                map.get(left).add(right);
                map.set(right, map.get(left));
            }
            if(!map.has(left) && map.has(right)) {
                map.get(right).add(left);
                map.set(left, map.get(right));
            }
            if(map.has(left) && map.has(right)) {
                map.get(left).add(right);
                map.get(right).add(left);
                map.get(left).forEach(l => {
                    map.set(l,new Set([...map.get(left),...map.get(right)]));
                });
                map.get(right).forEach(r => {
                    map.set(r,new Set([...map.get(left),...map.get(right)]));
                });
            }
        }
    });
    
    for(let i=0;i<equations.length;i++) {
        if(equations[i].charAt(1) === '!') {
            let left = equations[i].charAt(0);
            let right = equations[i].charAt(3);
            if(left === right) {
                return false;
            }
            if(map.has(left) && map.get(left).has(right)) {
                return false;
            }
        }
    }
    return true;
};