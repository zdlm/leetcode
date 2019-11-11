/**
 * Question:
 * Given a non-empty list of words, return the k most frequent elements.
 * 
 * Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.
 * 
 * Example 1:
 * Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 * Output: ["i", "love"]
 * Explanation: "i" and "love" are the two most frequent words. Note that "i" comes before "love" due to a lower alphabetical order.
 * 
 * Example 2:
 * Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
 * Output: ["the", "is", "sunny", "day"]
 * Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 * 
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Input words contain only lowercase letters.
 */

/**
 * Explanation:
 * 1. Use map to store the frequent words
 * 2. Make a for loop to fill the map
 * 3. Sort the map by value
 * 4. Return the most k frequent words
 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = new Map();
    words.forEach(w => {
       if(map.has(w)) {
           const count = map.get(w);
           map.set(w,count+1);
       } else {
           map.set(w, 1);
       }
    });
    const sorted = [...map.entries()].sort((a,b) => {
        if(a[1] === b[1]){
            return a[0] > b[0] ? 1 : -1;
        }
        
        return b[1] - a[1];
    });
    return sorted.slice(0,k).map(w => w[0]);
};
