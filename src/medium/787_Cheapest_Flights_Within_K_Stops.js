/**
 * Question:
 * There are n cities connected by m flights. Each fight starts from city u and arrives at v with a price w.
 * Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.
 * 
 * 
 * Example:
 * Input: 
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]] src = 0, dst = 2, k = 1
 * Output: 200
 * Explanation: 
 * The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.
 *
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/

/**
 * Explanation:
 * Dynamic programming
 */

 
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let cost = new Array(n+1).fill(Infinity);
    cost[src] = 0;
    for(let k=0; k<K+1; k++) {
        const newCost = [].concat(cost);
        for(let i=0; i<flights.length; i++) {
            const f = flights[i], s = f[0], d = f[1], c = f[2];
            newCost[d] = Math.min(newCost[d], cost[s] + c);
        }
        cost = [].concat(newCost);
    }
    return cost[dst] !== Infinity ? cost[dst] : -1;
};
