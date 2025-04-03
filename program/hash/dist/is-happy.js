function isHappy(n) {
    // Utils
    // 计算val各位的平方和
    function calcSum(val) {
        return String(val).split("").reduce(function (pre, cur) { return (pre + Number(cur) * Number(cur)); }, 0);
    }
    var storeSet = new Set();
    while (n !== 1 && !storeSet.has(n)) {
        storeSet.add(n);
        n = calcSum(n);
    }
    return n === 1;
}
;
