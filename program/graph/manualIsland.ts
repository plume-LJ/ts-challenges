import { dir } from './dir';

let count = 0;
function dfs(
	grid: number[][],
	visited: boolean[][],
	x: number,
	y: number,
	mark: number
) {
	if (visited[x][y] || grid[x][y] === 0) return;
	visited[x][y] = true;
	grid[x][y] = mark;
  count++;
	for (let i = 0; i < 4; i++) {
		const nx = x + dir[i][0];
		const ny = y + dir[i][1];
		if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) continue;
		dfs(grid, visited, nx, ny, mark);
	}
}

export function manualIsland(grid: number[][]) {
	const m = grid.length;
	const n = grid[0].length;
	let mark = 2;
	let isAllGrid = true;
  const gridNum = new Map<number, number>();
	const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (isAllGrid && grid[i][j] === 0) isAllGrid = false;
			if (grid[i][j] === 1 && !visited[i][j]) {
				count = 0;
				dfs(grid, visited, i, j, mark);
        gridNum.set(mark, count);
				mark++;
			}
		}
	}

  if (isAllGrid) return m * n;

  let result = 0;
  const visitedGrid = new Set<number>();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      count = 1;
      visitedGrid.clear();
      if (grid[i][j] !== 0) continue;
      for (let k = 0; k < 4; k++) {
        const nx = i + dir[k][0];
        const ny = j + dir[k][1];
        if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
        if (visitedGrid.has(grid[nx][ny])) continue;
        count += gridNum.get(grid[nx][ny]) ?? 0;
        visitedGrid.add(grid[nx][ny]);
      }
      result = Math.max(result, count);
    }
  }
  return result;
}

console.log(
  manualIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1],
  ])
  )