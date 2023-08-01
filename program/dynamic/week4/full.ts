// 先遍历物品，再遍历背包容量
function test_CompletePack(): void {
  const weight: number[] = [1, 3, 4];
  const value: number[] = [15, 20, 30];
  const bagSize: number = 4;
  const dp: number[] = new Array(bagSize + 1).fill(0);
  for (let i = 0; i < weight.length; i++) {
    for (let j = weight[i]; j <= bagSize; j++) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }
  console.log(dp);
}
test_CompletePack();

// 先遍历背包容量，再遍历物品
function test_CompletePack1(): void {
  const weight: number[] = [1, 3, 4];
  const value: number[] = [15, 20, 30];
  const bagSize: number = 4;
  const dp: number[] = new Array(bagSize + 1).fill(0);
  for (let j = 0; j <= bagSize; j++) {
    for (let i = 0; i < weight.length; i++) {
      if (j >= weight[i]) dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }
  console.log(dp);
}
test_CompletePack1();

export {}