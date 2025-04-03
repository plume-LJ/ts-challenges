import { dir } from './dir';

function dfs(grid: number[][], x: number, y: number) {
	grid[x][y] = 2;
	for (let i = 0; i < 4; i++) {
		const nx = x + dir[i][0];
		const ny = y + dir[i][1];
		if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) continue;
		if (grid[nx][ny] === 1) dfs(grid, nx, ny);
	}
}

export function dropIsland(grid: number[][]) {
	const m = grid.length;
	const n = grid[0].length;
	for (let i = 0; i < m; i++) {
		if (grid[i][0] === 1) dfs(grid, i, 0);
		if (grid[i][n - 1] === 1) dfs(grid, i, n - 1);
	}
	for (let j = 0; j < n; j++) {
		if (grid[0][j] === 1) dfs(grid, 0, j);
		if (grid[m - 1][j] === 1) dfs(grid, m - 1, j);
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) grid[i][j] = 0;
			if (grid[i][j] === 2) grid[i][j] = 1;
		}
	}
	return grid;
}

console.log(
	dropIsland([
		[1, 1, 0, 0, 0],
		[1, 1, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 1, 1],
		[0, 0, 0, 1, 1],
	])
);
