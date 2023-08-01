function sqrtBinarySearch(num: number, precision: number = 0.0001): number {
  if (num < 0) {
    throw new Error("无法计算负数的平方根");
  }

  let low = 0;
  let high = num;
  let mid = low + (high -low) / 2;

  while (Math.abs(mid * mid - num) > precision) {
    if (mid * mid < num) {
      low = mid;
    } else {
      high = mid;
    }
    mid = (low + high) / 2;
  }

  return mid;
}

const num: number = 25;
const sqrtNum: number = sqrtBinarySearch(num);
console.log(sqrtNum);
