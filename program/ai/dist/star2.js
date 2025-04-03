"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function dfs(x, y, z, energy, maxEnergy, maxPoint, path) {
    if (x < 0 || x >= N || y < 0 || y >= N || z < 0 || z >= N || visited[x][y][z]) {
        return;
    }
    visited[x][y][z] = true;
    energy += cube[x][y][z];
    if (energy > maxEnergy) {
        maxEnergy = energy;
        maxPoint = [x, y, z];
    }
    var directions = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
    for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
        var _a = directions_1[_i], dx = _a[0], dy = _a[1], dz = _a[2];
        dfs(x + dx, y + dy, z + dz, energy, maxEnergy, maxPoint, __spreadArrays(path, [[x, y, z]]));
    }
}
// 初始化空间魔方的能量分布图
var cube = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[10, 11, 12], [13, 14, 15], [16, 17, 18]],
    [[19, 20, 21], [22, 23, 24], [25, 26, 27]]];
var N = cube.length;
// 初始化访问标记数组
var visited = new Array(N).fill(false).map(function () { return new Array(N).fill(false).map(function () { return new Array(N).fill(false); }); });
// 设置起始点
var startPoint = [0, 0, 0];
var startEnergy = 0;
// 初始化最高能量值和路径
var maxEnergy = 0;
var maxPoint = null;
var maxPath = [];
// 调用DFS函数进行搜索
dfs(startPoint[0], startPoint[1], startPoint[2], startEnergy, maxEnergy, maxPoint, []);
console.log("能量值最高的点：", maxPoint);
console.log("最高能量值：", maxEnergy);
console.log("收集能量最多的路径：", maxPath);
