function backtrackKnapsack(
  weights: number[],
  values: number[],
  capacity: number,
  currentWeight: number,
  currentValue: number,
  index: number
): number {
  if (index >= weights.length) {
    return currentValue;
  }

  // 不选当前物品
  const maxValue = backtrackKnapsack(
    weights,
    values,
    capacity,
    currentWeight,
    currentValue,
    index + 1
  );

  // 选当前物品
  if (currentWeight + weights[index] <= capacity) {
    const newValue = currentValue + values[index];
    return Math.max(
      maxValue,
      backtrackKnapsack(
        weights,
        values,
        capacity,
        currentWeight + weights[index],
        newValue,
        index + 1
      )
    );
  }

  return maxValue;
}

// 调用函数
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 8;

const maxValue = backtrackKnapsack(weights, values, capacity, 0, 0, 0);
console.log("Maximum value:", maxValue);

function badge(weights: number[], values: number[], capacity: number) {
  let dp = Array.from({ length: weights.length }, () =>
    Array(capacity + 1).fill(0)
  );
  for (let j = weights[0]; j <= capacity; j++) {
    dp[0][j] = values[0];
  }
  for (let i = 1; i < weights.length; i++) {
    console.log(dp);
    for (let j = 0; j <= capacity; j++) {
      if (j < weights[i]) dp[i][j] = dp[i - 1][j];
      else
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - weights[i]] + values[i]
        );
    }
  }
  // console.log(dp);
  // for (let j = 0; j <= capacity; j++) {
  //   console.log(dp);
  //   for (let i = 1; i < weights.length; i++) {
  //     if (j < weights[i]) dp[i][j] = dp[i - 1][j];
  //     else
  //       dp[i][j] = Math.max(
  //         dp[i - 1][j],
  //         dp[i - 1][j - weights[i]] + values[i]
  //       );
  //   }
  // }
  // console.log(dp);
  return dp[weights.length - 1][capacity];
}

console.log(badge([2, 3, 4, 5], [3, 4, 5, 6], 8));