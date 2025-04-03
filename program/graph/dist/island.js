"use strict";
exports.__esModule = true;
exports.island = exports.bfs = exports.dfs2 = exports.dfs1 = void 0;
var dir_1 = require("./dir");
function dfs1(grid, visited, x, y) {
    for (var i = 0; i < 4; i++) {
        var nx = x + dir_1.dir[i][0];
        var ny = y + dir_1.dir[i][1];
        if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
            continue;
        if (!visited[nx][ny] && grid[nx][ny] === 1) {
            visited[nx][ny] = true;
            dfs1(grid, visited, nx, ny);
        }
    }
}
exports.dfs1 = dfs1;
function dfs2(grid, visited, x, y) {
    if (visited[x][y] || grid[x][y] === 0)
        return;
    visited[x][y] = true;
    for (var i = 0; i < 4; i++) {
        var nx = x + dir_1.dir[i][0];
        var ny = y + dir_1.dir[i][1];
        if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
            continue;
        dfs2(grid, visited, nx, ny);
    }
}
exports.dfs2 = dfs2;
function bfs(grid, visited, x, y) {
    var queue = [[x, y]];
    visited[x][y] = true;
    while (queue.length) {
        var _a = queue.shift(), x_1 = _a[0], y_1 = _a[1];
        for (var i = 0; i < 4; i++) {
            var nx = x_1 + dir_1.dir[i][0];
            var ny = y_1 + dir_1.dir[i][1];
            if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
                continue;
            if (visited[nx][ny] || grid[nx][ny] === 0)
                continue;
            queue.push([nx, ny]);
            visited[nx][ny] = true;
        }
    }
}
exports.bfs = bfs;
function island(grid) {
    var result1 = 0;
    var result2 = 0;
    var result3 = 0;
    var n = grid.length;
    var m = grid[0].length;
    var visited = Array(n)
        .fill(0)
        .map(function () { return Array(m).fill(false); });
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (!visited[i][j] && grid[i][j] === 1) {
                visited[i][j] = true;
                result1++;
                dfs1(grid, visited, i, j);
            }
        }
    }
    var visited1 = Array(n)
        .fill(0)
        .map(function () { return Array(m).fill(false); });
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (!visited1[i][j] && grid[i][j] === 1) {
                result2++;
                dfs1(grid, visited1, i, j);
            }
        }
    }
    var visited2 = Array(n)
        .fill(0)
        .map(function () { return Array(m).fill(false); });
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (!visited2[i][j] && grid[i][j] === 1) {
                result3++;
                bfs(grid, visited2, i, j);
            }
        }
    }
    return [result1, result2, result3];
}
exports.island = island;
console.log(island([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
]));
