function trap(height: number[]): number {
  const length: number = height.length;
  const stack: number[] = [];
  stack.push(0);
  let resVal: number = 0;
  for (let i = 1; i < length; i++) {
      let top = stack[stack.length - 1];
      if (height[top] > height[i]) {
          stack.push(i);
      } else if (height[top] === height[i]) {
          stack.pop();
          stack.push(i);
      } else {
          while (stack.length > 0 && height[top] < height[i]) {
              let mid = stack.pop();
              if (stack.length > 0) {
                  let left = stack[stack.length - 1];
                  let h = Math.min(height[left], height[i]) - height[mid];
                  let w = i - left - 1;
                  resVal += h * w;
                  top = stack[stack.length - 1];
              }
          }
          stack.push(i);
      }
  }
  return resVal;
};

function trap1(height: number[]): number {
  const length: number = height.length;
  const leftMaxHeightDp: number[] = [],
      rightMaxHeightDp: number[] = [];
  leftMaxHeightDp[0] = height[0];
  rightMaxHeightDp[length - 1] = height[length - 1];
  for (let i = 1; i < length; i++) {
      leftMaxHeightDp[i] = Math.max(height[i], leftMaxHeightDp[i - 1]);
  }
  for (let i = length - 2; i >= 0; i--) {
      rightMaxHeightDp[i] = Math.max(height[i], rightMaxHeightDp[i + 1]);
  }
  let resVal: number = 0;
  for (let i = 0; i < length; i++) {
      resVal += Math.min(leftMaxHeightDp[i], rightMaxHeightDp[i]) - height[i];
  }
  return resVal;
};

function trap2(height: number[]): number {
  const length: number = height.length;
  let resVal: number = 0;
  for (let i = 0; i < length; i++) {
      let leftMaxHeight: number = height[i],
          rightMaxHeight: number = height[i];
      let leftIndex: number = i - 1,
          rightIndex: number = i + 1;
      while (leftIndex >= 0) {
          if (height[leftIndex] > leftMaxHeight)
              leftMaxHeight = height[leftIndex];
          leftIndex--;
      }
      while (rightIndex < length) {
          if (height[rightIndex] > rightMaxHeight)
              rightMaxHeight = height[rightIndex];
          rightIndex++;
      }
      resVal += Math.min(leftMaxHeight, rightMaxHeight) - height[i];
  }
  return resVal;
};
