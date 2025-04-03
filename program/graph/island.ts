import { dir } from "./dir";

export function dfs1(
	grid: number[][],
	visited: boolean[][],
	x: number,
	y: number
) {
	for (let i = 0; i < 4; i++) {
		const nx = x + dir[i][0];
		const ny = y + dir[i][1];
		if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) continue;
		if (!visited[nx][ny] && grid[nx][ny] === 1) {
			visited[nx][ny] = true;
			dfs1(grid, visited, nx, ny);
		}
	}
}

export function dfs2(
	grid: number[][],
	visited: boolean[][],
	x: number,
	y: number
) {
	if (visited[x][y] || grid[x][y] === 0) return;
	visited[x][y] = true;
	for (let i = 0; i < 4; i++) {
		const nx = x + dir[i][0];
		const ny = y + dir[i][1];
		if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) continue;
		dfs2(grid, visited, nx, ny);
	}
}

export function bfs(
	grid: number[][],
	visited: boolean[][],
	x: number,
	y: number
) {
	const queue = [[x, y]];
	visited[x][y] = true;
	while (queue.length) {
		const [x, y] = queue.shift()!;
		for (let i = 0; i < 4; i++) {
			const nx = x + dir[i][0];
			const ny = y + dir[i][1];
			if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
				continue;
			if (visited[nx][ny] || grid[nx][ny] === 0) continue;
			queue.push([nx, ny]);
			visited[nx][ny] = true;
		}
	}
}

export function island(grid: number[][]) {
	let result1 = 0;
	let result2 = 0;
	let result3 = 0;
	const n = grid.length;
	const m = grid[0].length;
	const visited = Array(n)
		.fill(0)
		.map(() => Array(m).fill(false));
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (!visited[i][j] && grid[i][j] === 1) {
				visited[i][j] = true;
				result1++;
				dfs1(grid, visited, i, j);
			}
		}
	}

	const visited1 = Array(n)
		.fill(0)
		.map(() => Array(m).fill(false));

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (!visited1[i][j] && grid[i][j] === 1) {
				result2++;
				dfs1(grid, visited1, i, j);
			}
		}
	}

	const visited2 = Array(n)
		.fill(0)
		.map(() => Array(m).fill(false));
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (!visited2[i][j] && grid[i][j] === 1) {
				result3++;
				bfs(grid, visited2, i, j);
			}
		}
	}

	return [result1, result2, result3];
}

console.log(
	island([
		[1, 1, 0, 0, 0],
		[1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1],
		[0, 0, 0, 1, 1],
	])
);
