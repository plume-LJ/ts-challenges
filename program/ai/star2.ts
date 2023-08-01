function dfs(x: number, y: number, z: number, energy: number, maxEnergy: number, maxPoint: [number, number, number] | null, path: [number, number, number][]) {
  if (x < 0 || x >= N || y < 0 || y >= N || z < 0 || z >= N || visited[x][y][z]) {
    return;
  }
  visited[x][y][z] = true;
  energy += cube[x][y][z];
  if (energy > maxEnergy) {
    maxEnergy = energy;
    maxPoint = [x, y, z];
  }
  const directions: [number, number, number][] = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
  for (const [dx, dy, dz] of directions) {
    dfs(x + dx, y + dy, z + dz, energy, maxEnergy, maxPoint, [...path, [x, y, z]]);
  }
}

// 初始化空间魔方的能量分布图
const cube: number[][][] = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]],
                            [[10, 11, 12], [13, 14, 15], [16, 17, 18]],
                            [[19, 20, 21], [22, 23, 24], [25, 26, 27]]];
const N: number = cube.length;

// 初始化访问标记数组
const visited: boolean[][][] = new Array(N).fill(false).map(() => new Array(N).fill(false).map(() => new Array(N).fill(false)));

// 设置起始点
const startPoint: [number, number, number] = [0, 0, 0];
const startEnergy: number = 0;

// 初始化最高能量值和路径
let maxEnergy: number = 0;
let maxPoint: [number, number, number] | null = null;
let maxPath: [number, number, number][] = [];

// 调用DFS函数进行搜索
dfs(startPoint[0], startPoint[1], startPoint[2], startEnergy, maxEnergy, maxPoint, []);

console.log("能量值最高的点：", maxPoint);
console.log("最高能量值：", maxEnergy);
console.log("收集能量最多的路径：", maxPath);

export {}