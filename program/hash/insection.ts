function intersection(nums1: number[], nums2: number[]): number[] {
  let resSet: Set<number> = new Set(),
      nums1Set: Set<number> = new Set(nums1);
  for (let i of nums2) {
      if (nums1Set.has(i)) {
          resSet.add(i);
      }
  }
  return Array.from(resSet);
};

function intersection1(nums1: number[], nums2: number[]): number[] {
  return Array.from(new Set(nums1.filter(i => nums2.includes(i))))
};