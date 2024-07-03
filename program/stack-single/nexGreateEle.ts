function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const resArr: number[] = new Array(nums1.length).fill(-1);
  const stack: number[] = [];
  const helperMap: Map<number, number> = new Map();
  nums1.forEach((num, index) => {
      helperMap.set(num, index);
  })
  stack.push(0);
  for (let i = 1, length = nums2.length; i < length; i++) {
      let top = stack[stack.length - 1];
      while (stack.length > 0 && nums2[top] < nums2[i]) {
          let index = helperMap.get(nums2[top]);
          if (index !== undefined) {
              resArr[index] = nums2[i];
          }
          stack.pop();
          top = stack[stack.length - 1];
      }
      if (helperMap.get(nums2[i]) !== undefined) {
          stack.push(i);
      }
  }
  return resArr;
};

function nextGreaterElements(nums: number[]): number[] {
  const length: number = nums.length;
  const stack: number[] = [];
  stack.push(0);
  const resArr: number[] = new Array(length).fill(-1);
  for (let i = 1; i < length * 2; i++) {
      const index = i % length;
      let top = stack[stack.length - 1];
      while (stack.length > 0 && nums[top] < nums[index]) {
          resArr[top] = nums[index];
          stack.pop();
          top = stack[stack.length - 1];
      }
      if (i < length) {
          stack.push(i);
      }
  }
  return resArr;
};