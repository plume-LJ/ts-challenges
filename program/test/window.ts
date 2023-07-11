function totalFruit(fruits: number[]): number {
  let result = 0;
  let i = 0;
  let j = 0;
  let s = new Set();

  for (; j < fruits.length; j++) {
    s.add(fruits[j]);
    if (s.size > 2) {
      s.delete(fruits[i++]);
      result = Math.max(j - i + 1, result);
      while (fruits[i-1] === fruits[i]) {
        i++;
      }
    }
    if (j === fruits.length - 1) {
      result = Math.max(j - i + 1, result);
    }
  }
  return result;
}

function totalFruit1(fs: number[]): number {
  let n = fs.length,
    ans = 0;
  const cnts = new Array<number>(n + 10).fill(0);
  for (let i = 0, j = 0, tot = 0; i < n; i++) {
    if (++cnts[fs[i]!] == 1) tot++;
    while (tot > 2) {
      if (--cnts[fs[j++]!] == 0) tot--;
    }
    ans = Math.max(ans, i - j + 1);
  }
  return ans;
}

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
