"use strict";
exports.__esModule = true;
exports.multiPack = void 0;
function multiPack(weights, values, nums, capacity) {
    var dp = new Array(capacity + 1).fill(0);
    for (var i = 0; i < weights.length; i++) {
        for (var j = capacity; j >= weights[i]; j--) {
            for (var k = 1; k <= nums[i] && j - weights[i] * k >= 0; k++) {
                dp[j] = Math.max(dp[j], dp[j - weights[i] * k] + values[i] * k);
            }
        }
    }
    return dp[capacity];
}
exports.multiPack = multiPack;
