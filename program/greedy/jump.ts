function jump(nums: number[]): number {
  const length: number = nums.length;
  let curFarthestIndex: number = 0,
    nextFarthestIndex: number = 0;
  let curIndex: number = 0;
  let stepNum: number = 0;
  while (curIndex < length - 1) {
    nextFarthestIndex = Math.max(nextFarthestIndex, curIndex + nums[curIndex]!);
    if (curIndex === curFarthestIndex) {
      curFarthestIndex = nextFarthestIndex;
      stepNum++;
    }
    curIndex++;
  }
  return stepNum;
}

console.log(jump([2,3,1,1,4]));

export {  }