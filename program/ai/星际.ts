function dfs(
  matrix: number[][][],
  x: number,
  y: number,
  z: number,
  visited: boolean[][][]
): number {
  // 判断当前点是否合法
  if (
    x < 0 ||
    x >= matrix.length ||
    y < 0 ||
    y >= matrix.length ||
    z < 0 ||
    z >= matrix.length
  ) {
    return 0;
  }

  // 判断当前点是否被访问过
  if (visited[x][y][z]) {
    return 0;
  }

  // 标记当前点为已访问
  visited[x][y][z] = true;

  // 获取当前点的能量值
  const energy = matrix[x][y][z];

  // 从当前点的六个方向中选择一个能量值最大的方向
  const directions: [number, number, number][] = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];
  let maxEnergy = 0;
  for (const [dx, dy, dz] of directions) {
    const nextX = x + dx;
    const nextY = y + dy;
    const nextZ = z + dz;
    const nextEnergy = dfs(matrix, nextX, nextY, nextZ, visited);
    maxEnergy = Math.max(maxEnergy, nextEnergy);
  }

  // 返回当前点的能量值加上能量值最大的方向的能量值
  return energy + maxEnergy;
}

function findHighestEnergy(matrix: number[][][]): [number, [number, number, number][]] {
  // 初始化访问状态矩阵
  const visited: boolean[][][] = Array.from({ length: matrix.length }, () =>
    Array.from({ length: matrix.length }, () => Array(matrix.length).fill(false))
  );

  // 遍历所有点，找到能量值最高的点
  let highestEnergy = 0;
  let highestEnergyPoint: [number, number, number] | null = null;
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      for (let z = 0; z < matrix.length; z++) {
        const energy = dfs(matrix, x, y, z, visited);
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
  const path: [number, number, number][] = [];
  dfs1(matrix, highestEnergyPoint[0], highestEnergyPoint[1], highestEnergyPoint[2], visited, path);

  return [highestEnergy, path];
}

function dfs1(
  matrix: number[][][],
  x: number,
  y: number,
  z: number,
  visited: boolean[][][],
  path: [number, number, number][]
): void {
  // 判断当前点是否合法
  if (
    x < 0 ||
    x >= matrix.length ||
    y < 0 ||
    y >= matrix.length ||
    z < 0 ||
    z >= matrix.length
  ) {
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
  const directions: [number, number, number][] = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];
  let maxEnergy = 0;
  let maxEnergyDirection: [number, number, number] | null = null;
  for (const [dx, dy, dz] of directions) {
    const nextX = x + dx;
    const nextY = y + dy;
    const nextZ = z + dz;
    if (
      nextX < 0 ||
      nextX >= matrix.length ||
      nextY < 0 ||
      nextY >= matrix.length ||
      nextZ < 0 ||
      nextZ >= matrix.length
    ) {
      continue;
    }
    const nextEnergy = matrix[nextX][nextY][nextZ];
    if (nextEnergy > maxEnergy) {
      maxEnergy = nextEnergy;
      maxEnergyDirection = [dx, dy, dz];
    }
  }

  // 继续沿着最大能量值的方向寻找路径并吸收能量
  if (maxEnergyDirection !== null) {
    const [dx, dy, dz] = maxEnergyDirection;
    const nextX = x + dx;
    const nextY = y + dy;
    const nextZ = z + dz;
    dfs1(matrix, nextX, nextY, nextZ, visited, path);
  }
}
