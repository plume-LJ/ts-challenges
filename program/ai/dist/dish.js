function eatMaxNumberOfDishes(n, m, dishes) {
    dishes.sort(function (a, b) { return a[1] - b[1]; }); // 按变熟时间从小到大排序
    n = Math.min(n, dishes.length);
    var current_time = 0;
    var count = 0;
    for (var _i = 0, dishes_1 = dishes; _i < dishes_1.length; _i++) {
        var dish = dishes_1[_i];
        if (dish[0] <= current_time + m && dish[0] + dish[1] >= current_time) {
            count += 1;
            current_time = Math.max(current_time, dish[0]) + m; // 更新当前时间
        }
    }
    return count;
}
// 示例用法
var n = 2;
var m = 1;
var dishes = [
    [1, 2],
    [2, 1],
];
var maxNumberOfDishes = eatMaxNumberOfDishes(n, m, dishes);
console.log(maxNumberOfDishes);
function t() {
    var n1 = 3;
    var m1 = 2;
    var dishes1 = [
        [1, 4],
        [2, 3],
        [3, 5],
    ];
    var maxNumberOfDishes1 = eatMaxNumberOfDishes(n1, m1, dishes1);
    console.log(maxNumberOfDishes1);
}
function t2() {
    var n2 = 4;
    var m2 = 3;
    var dishes2 = [
        [1, 7],
        [2, 5],
        [4, 3],
        [6, 2],
    ];
    var maxNumberOfDishes2 = eatMaxNumberOfDishes(n2, m2, dishes2);
    console.log(maxNumberOfDishes2);
}
t();
t2();
