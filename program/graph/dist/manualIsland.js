"use strict";
exports.__esModule = true;
exports.manualIsland = void 0;
var dir_1 = require("./dir");
var count = 0;
function dfs(grid, visited, x, y, mark) {
    if (visited[x][y] || grid[x][y] === 0)
        return;
    visited[x][y] = true;
    grid[x][y] = mark;
    count++;
    for (var i = 0; i < 4; i++) {
        var nx = x + dir_1.dir[i][0];
        var ny = y + dir_1.dir[i][1];
        if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
            continue;
        dfs(grid, visited, nx, ny, mark);
    }
}
function manualIsland(grid) {
    var _a;
    var m = grid.length;
    var n = grid[0].length;
    var mark = 2;
    var isAllGrid = true;
    var gridNum = new Map();
    var visited = new Array(m).fill(0).map(function () { return new Array(n).fill(false); });
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (isAllGrid && grid[i][j] === 0)
                isAllGrid = false;
            if (grid[i][j] === 1 && !visited[i][j]) {
                count = 0;
                dfs(grid, visited, i, j, mark);
                gridNum.set(mark, count);
                mark++;
            }
        }
    }
    if (isAllGrid)
        return m * n;
    var result = 0;
    var visitedGrid = new Set();
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            count = 1;
            visitedGrid.clear();
            if (grid[i][j] !== 0)
                continue;
            for (var k = 0; k < 4; k++) {
                var nx = i + dir_1.dir[k][0];
                var ny = j + dir_1.dir[k][1];
                if (nx < 0 || ny < 0 || nx >= m || ny >= n)
                    continue;
                if (visitedGrid.has(grid[nx][ny]))
                    continue;
                count += (_a = gridNum.get(grid[nx][ny])) !== null && _a !== void 0 ? _a : 0;
                visitedGrid.add(grid[nx][ny]);
            }
            result = Math.max(result, count);
        }
    }
    return result;
}
exports.manualIsland = manualIsland;
console.log(manualIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1],
]));
