"use strict";
exports.__esModule = true;
exports.stream = void 0;
var dir_1 = require("./dir");
function dfs(grid, visited, x, y) {
    if (visited[x][y])
        return;
    visited[x][y] = true;
    for (var i = 0; i < 4; i++) {
        var nx = x + dir_1.dir[i][0];
        var ny = y + dir_1.dir[i][1];
        if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
            continue;
        if (grid[x][y] > grid[nx][ny])
            continue;
        dfs(grid, visited, nx, ny);
    }
}
function stream(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var visited = new Array(m).fill(0).map(function () { return new Array(n).fill(false); });
    var visited1 = new Array(m).fill(0).map(function () { return new Array(n).fill(false); });
    for (var i = 0; i < m; i++) {
        dfs(grid, visited, i, 0);
        dfs(grid, visited1, i, n - 1);
    }
    for (var j = 0; j < n; j++) {
        dfs(grid, visited, 0, j);
        dfs(grid, visited1, m - 1, j);
    }
    var result = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (visited[i][j] && visited1[i][j])
                result.push([i, j]);
        }
    }
    return result;
}
exports.stream = stream;
console.log(stream([
    [1, 3, 1, 2, 4],
    [1, 2, 1, 3, 2],
    [2, 4, 7, 2, 1],
    [4, 5, 6, 1, 1],
    [1, 4, 1, 2, 1],
]));
