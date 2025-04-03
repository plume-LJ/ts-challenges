import { dir } from './dir';
function dfs(grid: number[][], visited: boolean[][], x: number, y: number) {
	for (let i = 0; i < 4; i++) {
		const nx = x + dir[i][0];
		const ny = y + dir[i][1];
		if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) continue;
		if (!visited[nx][ny] && grid[nx][ny] === 1) {
			visited[nx][ny] = true;
			dfs(grid, visited, nx, ny);
		}
	}
}

function dfs2(grid: number[][], visited: boolean[][], x: number, y: number) {
	if (visited[x][y] || grid[x][y] === 0) return;
	visited[x][y] = true;
	for (let i = 0; i < 4; i++) {
		const nx = x + dir[i][0];
		const ny = y + dir[i][1];
		if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length) continue;
		dfs2(grid, visited, nx, ny);
	}
}

async function main() {
	let m: number = 0,
		n: number = 0;
	console.log('请输入矩阵的行数和列数');
	for await (const line of console) {
		[n, m] = line.split(' ').map(Number);
		break;
	}
	const grid = new Array(n).fill(0).map(() => new Array(m).fill(0));
	const visited = new Array(n).fill(0).map(() => new Array(m).fill(false));
	let count = 0;
	let i = 0;
	console.log('请输入矩阵的值');
	for await (const line of console) {
		const numbers = line.split(' ').map(Number);
		for (let j = 0; j < m; j++) {
			grid[i][j] = Number(numbers[j]);
		}
		i++;
		if (i === n) break;
	}
	// for  (let i = 0; i < n; i++) {
	//   console.log(line);
	//   // const line = await console.next();
	//   for (let j = 0; j < m; j++) {
	//     grid[i][j] = Number(line[j]);
	//   }
	// }
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (!visited[i][j] && grid[i][j] === 1) {
				visited[i][j] = true;
				dfs(grid, visited, i, j);
				count++;
			}
		}
	}
	console.log(count);
}

await main();
