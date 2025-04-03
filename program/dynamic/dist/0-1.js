"use strict";
exports.__esModule = true;
/**
 * A function that calculates the maximum value that can be obtained
 * by selecting items with given weights and values, while not exceeding
 * a given capacity.
 *
 * @param {number[]} weights - An array of numbers representing the weights of the items.
 * @param {number[]} values - An array of numbers representing the values of the items.
 * @param {number} capacity - The maximum capacity that can be carried.
 * @return {number} The maximum value that can be obtained.
 */
function badge(weights, values, capacity) {
    var dp = Array(capacity + 1).fill(0);
    for (var i = 0; i < weights.length; i++) {
        for (var j = capacity; j >= weights[i]; j--) {
            console.log(dp[j], dp[j - weights[i]] + values[i]);
            dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i]);
        }
        console.log(dp);
    }
    return dp[capacity];
}
// console.log(badge([2, 3, 4, 5], [3, 4, 5, 6], 8));
console.log(badge([2, 3, 4], [4, 5, 6], 5));
