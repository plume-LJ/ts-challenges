function largestRectangleArea(heights: number[]): number {
  let resMax: number = 0;
  for (let i = 0, length = heights.length; i < length; i++) {
      // 左开右开
      let left: number = i - 1,
          right: number = i + 1;
      while (left >= 0 && heights[left] >= heights[i]) {
          left--;
      }
      while (right < length && heights[right] >= heights[i]) {
          right++;
      }
      resMax = Math.max(resMax, heights[i] * (right - left - 1));
  }
  return resMax;
};

function largestRectangleArea1(heights: number[]): number {
  const length: number = heights.length;
  const leftHeightDp: number[] = [],
      rightHeightDp: number[] = [];
  leftHeightDp[0] = -1;
  rightHeightDp[length - 1] = length;
  for (let i = 1; i < length; i++) {
      let j = i - 1;
      while (j >= 0 && heights[i] <= heights[j]) {
          j = leftHeightDp[j];
      }
      leftHeightDp[i] = j;
  }
  for (let i = length - 2; i >= 0; i--) {
      let j = i + 1;
      while (j < length && heights[i] <= heights[j]) {
          j = rightHeightDp[j];
      }
      rightHeightDp[i] = j;
  }
  let resMax: number = 0;
  for (let i = 0; i < length; i++) {
      let area = heights[i] * (rightHeightDp[i] - leftHeightDp[i] - 1);
      resMax = Math.max(resMax, area);
  }
  return resMax;
};

function largestRectangleArea2(heights: number[]): number {
  heights.push(0);
  const length: number = heights.length;
  // 栈底->栈顶：严格单调递增
  const stack: number[] = [];
  stack.push(0);
  let resMax: number = 0;
  for (let i = 1; i < length; i++) {
      let top = stack[stack.length - 1];
      if (heights[top] < heights[i]) {
          stack.push(i);
      } else if (heights[top] === heights[i]) {
          stack.pop();
          stack.push(i);
      } else {
          while (stack.length > 0 && heights[top] > heights[i]) {
              let mid = stack.pop();
              let left = stack.length > 0 ? stack[stack.length - 1] : -1;
              let w = i - left - 1;
              let h = heights[mid];
              resMax = Math.max(resMax, w * h);
              top = stack[stack.length - 1];
          }
          stack.push(i);
      }
  }
  return resMax;
};