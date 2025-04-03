"use strict";
exports.__esModule = true;
function minPathSum(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var queue = [{ row: 0, col: 0 }];
    var visited = new Set(["0,0"]);
    while (queue.length) {
        var _a = queue.shift(), row = _a.row, col = _a.col;
        if (row === m - 1 && col === n - 1) {
            return grid[row][col];
        }
        var neighbors = [
            { row: row + 1, col: col },
            { row: row, col: col + 1 },
        ];
        for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
            var neighbor = neighbors_1[_i];
            var nextRow = neighbor.row, nextCol = neighbor.col;
            if (nextRow >= 0 &&
                nextRow < m &&
                nextCol >= 0 &&
                nextCol < n &&
                !visited.has(nextRow + "," + nextCol)) {
                queue.push(neighbor);
                visited.add(nextRow + "," + nextCol);
                grid[nextRow][nextCol] += grid[row][col];
            }
        }
    }
    return -1;
}
// const readline = require("readline-sync");
// const m: number = parseInt(readline.question("Enter the number of rows: "));
// const n: number = parseInt(readline.question("Enter the number of columns: "));
// const grid: number[][] = [];
// for (let i = 0; i < m; i++) {
//   const row: number[] = readline
//     .question(`Enter the numbers for row ${i + 1}: `)
//     .split(" ")
//     .map(Number);
//   grid.push(row);
// }
var result = minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]);
console.log(result);
setTimeout(function () { return console.log('a'); });
Promise.resolve().then(function () { return console.log('b'); }).then(function () { return Promise.resolve('c').then(function (data) {
    setTimeout(function () { return console.log('d'); });
    console.log('f');
    return data;
}); }).then(function (data) { return console.log(data); });
