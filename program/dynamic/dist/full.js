// 先遍历物品，再遍历背包容量
function test_CompletePack() {
    var weight = [1, 3, 4];
    var value = [15, 20, 30];
    var bagSize = 4;
    var dp = new Array(bagSize + 1).fill(0);
    for (var i = 0; i < weight.length; i++) {
        for (var j = weight[i]; j <= bagSize; j++) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    console.log(dp);
}
test_CompletePack();
// 先遍历背包容量，再遍历物品
function test_CompletePack1() {
    var weight = [1, 3, 4];
    var value = [15, 20, 30];
    var bagSize = 4;
    var dp = new Array(bagSize + 1).fill(0);
    for (var j = 0; j <= bagSize; j++) {
        for (var i = 0; i < weight.length; i++) {
            if (j >= weight[i])
                dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    console.log(dp);
}
test_CompletePack1();
