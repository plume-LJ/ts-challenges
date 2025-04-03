function sqrtBinarySearch(num, precision) {
    if (precision === void 0) { precision = 0.0001; }
    if (num < 0) {
        throw new Error("无法计算负数的平方根");
    }
    var low = 0;
    var high = num;
    var mid = low + (high - low) / 2;
    while (Math.abs(mid * mid - num) > precision) {
        if (mid * mid < num) {
            low = mid;
        }
        else {
            high = mid;
        }
        mid = (low + high) / 2;
    }
    return mid;
}
var num = 25;
var sqrtNum = sqrtBinarySearch(num);
console.log(sqrtNum);
