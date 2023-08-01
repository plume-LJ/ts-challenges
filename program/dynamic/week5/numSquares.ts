// 先遍历物品
function numSquares(n: number): number {
  const goodsNum: number = Math.floor(Math.sqrt(n));
  const dp: number[] = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= goodsNum; i++) {
      const tempVal: number = i * i;
      for (let j = tempVal; j <= n; j++) {
          dp[j] = Math.min(dp[j], dp[j - tempVal] + 1);
      }
  }
  return dp[n];
};

// 先遍历背包
function numSquares1(n: number): number {
  const dp = Array(n + 1).fill(Infinity)
  dp[0] = 0;
  for(let i = 1; i <= n; i++){
      for(let j = 1; j * j <= i; j++){
          dp[i] = Math.min(dp[i], dp[i -j * j] + 1)
      }
  }
  return dp[n]
};


export {}