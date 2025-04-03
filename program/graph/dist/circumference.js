"use strict";
exports.__esModule = true;
var dir_1 = require("./dir");
function getC(grid) {
    var result = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                for (var k = 0; k < 4; k++) {
                    var nx = i + dir_1.dir[k][0];
                    var ny = j + dir_1.dir[k][1];
                    if (nx < 0 ||
                        ny < 0 ||
                        nx >= grid.length ||
                        ny >= grid[0].length ||
                        grid[nx][ny] === 0)
                        result++;
                }
            }
        }
    }
    return result;
}
function getC1(grid) {
    var sum = 0;
    var cover = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                sum++;
                if (i - 1 >= 0 && grid[i - 1][j] === 1)
                    cover++;
                if (j - 1 >= 0 && grid[i][j - 1] === 1)
                    cover++;
            }
        }
    }
    return sum * 4 - cover * 2;
}
console.log(getC([
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
]), getC1([
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
]));
