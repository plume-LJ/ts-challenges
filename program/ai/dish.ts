function eatMaxNumberOfDishes(
  n: number,
  m: number,
  dishes: [number, number][]
): number {
  dishes.sort((a, b) => a[1] - b[1]); // 按变熟时间从小到大排序
  n = Math.min(n, dishes.length);
  let current_time = 0;
  let count = 0;
  for (const dish of dishes) {
    if (dish[0] <= current_time + m && dish[0] + dish[1] >= current_time) {
      count += 1;
      current_time = Math.max(current_time, dish[0]) + m; // 更新当前时间
    }
  }

  return count;
}

// 示例用法
const n = 2;
const m = 1;
const dishes: [number, number][] = [
  [1, 2],
  [2, 1],
];

const maxNumberOfDishes = eatMaxNumberOfDishes(n, m, dishes);
console.log(maxNumberOfDishes);

function t() {
  const n1 = 3;
  const m1 = 2;
  const dishes1: [number, number][] = [
    [1, 4],
    [2, 3],
    [3, 5],
  ];

  const maxNumberOfDishes1 = eatMaxNumberOfDishes(n1, m1, dishes1);
  console.log(maxNumberOfDishes1);
}
function t2() {
  const n2 = 4;
  const m2 = 3;
  const dishes2: [number, number][] = [
    [1, 7],
    [2, 5],
    [4, 3],
    [6, 2],
  ];

  const maxNumberOfDishes2 = eatMaxNumberOfDishes(n2, m2, dishes2);
  console.log(maxNumberOfDishes2);
}
t();
t2();
