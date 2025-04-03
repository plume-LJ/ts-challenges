"use strict";
exports.__esModule = true;
exports.dropIsland = void 0;
var dir_1 = require("./dir");
function dfs(grid, x, y) {
    grid[x][y] = 2;
    for (var i = 0; i < 4; i++) {
        var nx = x + dir_1.dir[i][0];
        var ny = y + dir_1.dir[i][1];
        if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
            continue;
        if (grid[nx][ny] === 1)
            dfs(grid, nx, ny);
    }
}
function dropIsland(grid) {
    var m = grid.length;
    var n = grid[0].length;
    for (var i = 0; i < m; i++) {
        if (grid[i][0] === 1)
            dfs(grid, i, 0);
        if (grid[i][n - 1] === 1)
            dfs(grid, i, n - 1);
    }
    for (var j = 0; j < n; j++) {
        if (grid[0][j] === 1)
            dfs(grid, 0, j);
        if (grid[m - 1][j] === 1)
            dfs(grid, m - 1, j);
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] === 1)
                grid[i][j] = 0;
            if (grid[i][j] === 2)
                grid[i][j] = 1;
        }
    }
    return grid;
}
exports.dropIsland = dropIsland;
console.log(dropIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
]));
