function dfs(matrix, x, y, z, visited) {
    // 判断当前点是否合法
    if (x < 0 ||
        x >= matrix.length ||
        y < 0 ||
        y >= matrix.length ||
        z < 0 ||
        z >= matrix.length) {
        return 0;
    }
    // 判断当前点是否被访问过
    if (visited[x][y][z]) {
        return 0;
    }
    // 标记当前点为已访问
    visited[x][y][z] = true;
    // 获取当前点的能量值
    var energy = matrix[x][y][z];
    // 从当前点的六个方向中选择一个能量值最大的方向
    var directions = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1],
    ];
    var maxEnergy = 0;
    for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
        var _a = directions_1[_i], dx = _a[0], dy = _a[1], dz = _a[2];
        var nextX = x + dx;
        var nextY = y + dy;
        var nextZ = z + dz;
        var nextEnergy = dfs(matrix, nextX, nextY, nextZ, visited);
        maxEnergy = Math.max(maxEnergy, nextEnergy);
    }
    // 返回当前点的能量值加上能量值最大的方向的能量值
    return energy + maxEnergy;
}
function findHighestEnergy(matrix) {
    // 初始化访问状态矩阵
    var visited = Array.from({ length: matrix.length }, function () {
        return Array.from({ length: matrix.length }, function () { return Array(matrix.length).fill(false); });
    });
    // 遍历所有点，找到能量值最高的点
    var highestEnergy = 0;
    var highestEnergyPoint = null;
    for (var x = 0; x < matrix.length; x++) {
        for (var y = 0; y < matrix.length; y++) {
            for (var z = 0; z < matrix.length; z++) {
                var energy = dfs(matrix, x, y, z, visited);
                if (energy > highestEnergy) {
                    highestEnergy = energy;
                    highestEnergyPoint = [x, y, z];
                }
            }
        }
    }
    if (highestEnergyPoint === null) {
        return [0, []];
    }
    // 继续寻找路径并吸收尽可能多的能量
    var path = [];
    dfs1(matrix, highestEnergyPoint[0], highestEnergyPoint[1], highestEnergyPoint[2], visited, path);
    return [highestEnergy, path];
}
function dfs1(matrix, x, y, z, visited, path) {
    // 判断当前点是否合法
    if (x < 0 ||
        x >= matrix.length ||
        y < 0 ||
        y >= matrix.length ||
        z < 0 ||
        z >= matrix.length) {
        return;
    }
    // 判断当前点是否被访问过
    if (visited[x][y][z]) {
        return;
    }
    // 标记当前点为已访问
    visited[x][y][z] = true;
    // 将当前点添加到路径中
    path.push([x, y, z]);
    // 从当前点的六个方向中选择一个能量值最大的方向
    var directions = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1],
    ];
    var maxEnergy = 0;
    var maxEnergyDirection = null;
    for (var _i = 0, directions_2 = directions; _i < directions_2.length; _i++) {
        var _a = directions_2[_i], dx = _a[0], dy = _a[1], dz = _a[2];
        var nextX = x + dx;
        var nextY = y + dy;
        var nextZ = z + dz;
        if (nextX < 0 ||
            nextX >= matrix.length ||
            nextY < 0 ||
            nextY >= matrix.length ||
            nextZ < 0 ||
            nextZ >= matrix.length) {
            continue;
        }
        var nextEnergy = matrix[nextX][nextY][nextZ];
        if (nextEnergy > maxEnergy) {
            maxEnergy = nextEnergy;
            maxEnergyDirection = [dx, dy, dz];
        }
    }
    // 继续沿着最大能量值的方向寻找路径并吸收能量
    if (maxEnergyDirection !== null) {
        var dx = maxEnergyDirection[0], dy = maxEnergyDirection[1], dz = maxEnergyDirection[2];
        var nextX = x + dx;
        var nextY = y + dy;
        var nextZ = z + dz;
        dfs1(matrix, nextX, nextY, nextZ, visited, path);
    }
}
