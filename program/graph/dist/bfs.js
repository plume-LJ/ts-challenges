"use strict";
exports.__esModule = true;
var dir_1 = require("./dir");
function bfs(grid, visited, x, y) {
    var queue = new Array();
    queue.push({ x: x, y: y });
    visited[x][y] = true;
    while (queue.length) {
        var _a = queue.shift(), x_1 = _a.x, y_1 = _a.y;
        for (var i = 0; i < 4; i++) {
            var nx = x_1 + dir_1.dir[i][0];
            var ny = y_1 + dir_1.dir[i][1];
            if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
                continue;
            if (visited[nx][ny] || grid[nx][ny] === 0)
                continue;
            queue.push({ x: nx, y: ny });
            visited[nx][ny] = true;
            console.log(nx, ny); // 只要加入队列立刻标记
        }
    }
}
console.log(bfs([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
], new Array(5).fill(0).map(function () { return new Array(5).fill(false); }), 2, 2));
