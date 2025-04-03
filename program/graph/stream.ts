import { dir } from './dir';

function dfs(grid: number[][], visited: boolean[][], x: number, y: number) {
	if (visited[x][y]) return;
	visited[x][y] = true;
	for (let i = 0; i < 4; i++) {
		const nx = x + dir[i][0];
		const ny = y + dir[i][1];
		if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) continue;
		if (grid[x][y] > grid[nx][ny]) continue;
		dfs(grid, visited, nx, ny);
	}
}

export function stream(grid: number[][]) {
	const m = grid.length;
	const n = grid[0].length;
	const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
	const visited1 = new Array(m).fill(0).map(() => new Array(n).fill(false));
	for (let i = 0; i < m; i++) {
		dfs(grid, visited, i, 0);
		dfs(grid, visited1, i, n - 1);
	}
	for (let j = 0; j < n; j++) {
		dfs(grid, visited, 0, j);
		dfs(grid, visited1, m - 1, j);
	}

	const result: [number, number][] = [];

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (visited[i][j] && visited1[i][j]) result.push([i, j]);
		}
	}
	return result;
}

console.log(
	stream([
		[1, 3, 1, 2, 4],
		[1, 2, 1, 3, 2],
		[2, 4, 7, 2, 1],
		[4, 5, 6, 1, 1],
		[1, 4, 1, 2, 1],
	])
);
