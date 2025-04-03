import { dir } from './dir';

function bfs(grid: number[][], visited: boolean[][], x: number, y: number) {
	const queue = new Array<{ x: number; y: number }>();
	queue.push({ x, y });
	visited[x][y] = true;
	while (queue.length) {
		const { x, y } = queue.shift()!;
		for (let i = 0; i < 4; i++) {
			const nx = x + dir[i][0];
			const ny = y + dir[i][1];
			if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid[0].length)
				continue;
			if (visited[nx][ny] || grid[nx][ny] === 0) continue;
			queue.push({ x: nx, y: ny });
			visited[nx][ny] = true;
			console.log(nx, ny); // 只要加入队列立刻标记
		}
	}
}

console.log(
	bfs(
		[
			[1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1],
		],
		new Array(5).fill(0).map(() => new Array(5).fill(false)),
		2,
		2
	)
);
