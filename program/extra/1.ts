var countSubarrays = function(nums: number[], k: number) {
  const n = nums.length;
  let kIndex = -1;
  for (let i = 0; i < n; i++) {
      if (nums[i] === k) {
          kIndex = i;
          break;
      }
  }
  let ans = 0;
  const counts = new Map();
  counts.set(0, 1);
  let sum = 0;
  for (let i = 0; i < n; i++) {
      sum += sign(nums[i] - k);
      if (i < kIndex) {
          counts.set(sum, (counts.get(sum) || 0) + 1);
      } else {
          const prev0 = (counts.get(sum) || 0);
          const prev1 = (counts.get(sum - 1) || 0);
          ans += prev0 + prev1;
      }
  }
  return ans;
}

const sign = (num: number) => {
  if (num === 0) {
      return 0;
  }
  return num > 0 ? 1 : -1;
};

var countSubarrays1 = function(nums: number[], k: number) {
  const n = nums.length;
  let kIndex = -1;
  for (let i = 0; i < n; i++) {
      if (nums[i] === k) {
          kIndex = i;
          break;
      }
  }
  let ans = 0;
  let result: number[][] = []
  const counts = new Map<number,number[]>();
  counts.set(0, [-1]);
  let sum = 0;
  for (let i = 0; i < n; i++) {
      sum += sign(nums[i] - k);
      if (i < kIndex) {
          counts.set(sum, [...(counts.get(sum) ||[]), i]);
      } else {
          const prev0 = counts.get(sum) || [];
          const prev1 = counts.get(sum - 1) || [];
          // console.log(prev0, prev1)
          result.push(...prev0.concat(prev1).map(item => nums.slice(item+1,i+1)))
          // ans += prev0 + prev1;
      }
  }
  console.log(counts)
  return result;
}

console.log(countSubarrays1([4,6,2,1,5,3,7,8], 5))
console.log(countSubarrays([4,6,2,1,5,3,7,8], 5))