function totalFruit(fruits) {
    var result = 0;
    var i = 0;
    var j = 0;
    var s = new Set();
    for (; j < fruits.length; j++) {
        s.add(fruits[j]);
        if (s.size > 2) {
            s["delete"](fruits[i++]);
            result = Math.max(j - i + 1, result);
            while (fruits[i - 1] === fruits[i]) {
                i++;
            }
        }
        if (j === fruits.length - 1) {
            result = Math.max(j - i + 1, result);
        }
    }
    return result;
}
function totalFruit1(fs) {
    var n = fs.length, ans = 0;
    var cnts = new Array(n + 10).fill(0);
    for (var i = 0, j = 0, tot = 0; i < n; i++) {
        if (++cnts[fs[i]] == 1)
            tot++;
        while (tot > 2) {
            if (--cnts[fs[j++]] == 0)
                tot--;
        }
        ans = Math.max(ans, i - j + 1);
    }
    return ans;
}
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
