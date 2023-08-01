function badge(weights: number[], value: number[], capacity: number) {
  const n = weights.length;
  const dp = Array.from({ length: n }, () => Array(capacity + 1).fill(0));
  for (let i = weights[0]; i < capacity; i++) {
    dp[0][i] = value[0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (j < weights[i]) dp[i][j] = dp[i - 1][j];
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i]] + value[i]);
    }
  }
  return dp[n - 1][capacity];
}

console.log(badge([2, 3, 4, 5], [3, 4, 5, 6], 8));

export {};

function badge1(weights: number[], value: number[], capacity: number) {
  const n = weights.length;
  const dp = Array.from({ length: capacity + 1 }, () => 0);
  for (let i = 0; i < n; i++) {
    for (let j = capacity; j >= weights[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weights[i]] + value[i]);
    }
  }
  return dp[capacity];
}

console.log(badge1([2, 3, 4, 5], [3, 4, 5, 6], 8));
