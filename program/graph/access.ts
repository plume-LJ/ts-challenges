function dfs(
	graph: Map<number, number[]>,
	key: number,
	visited: Map<number, boolean>
) {
	if (visited.get(key)) return;
	visited.set(key, true);
	for (const next of graph.get(key) ?? []) {
		dfs(graph, next, visited);
	}
}

function dfs1(graph: Map<number, number[]>, key: number, visited: boolean[]) {
	visited[key] = true;
	const keys = graph.get(key) ?? [];
	for (let key of keys) {
		if (visited[key] === false) {
			visited[key] = true;
			dfs1(graph, key, visited);
		}
	}
}

function access(data: [number, number][]) {
	const graph = new Map<number, number[]>();
	const visited = new Map<number, boolean>();
	const visited1: boolean[] = [];
	for (const [a, b] of data) {
		if (!graph.has(a)) graph.set(a, []);
		graph.get(a)!.push(b);
		visited.set(a, false);
		visited1[a] = false;
	}
	visited1[0] = true;
	dfs(graph, 1, visited);
	dfs1(graph, 1, visited1);
	// console.log(visited, visited1);
	const result: boolean[] = [];
	for (let [_, value] of visited) {
		if (value === false) {
			result.push(false);
			break;
		}
	}
	if (result.length === 0) {
		result.push(true);
	}
	for (let value of visited1) {
		if (value === false) {
			result.push(false);
			break;
		}
	}
	if (result.length === 1) {
		result.push(true);
	}
	// console.log(visited);
	return result;
}

function accessBfs(data: [number, number][]) {
	const visited = Array.from({ length: data.length + 1 }, () => false);
	visited[1] = true;
	const graph = new Map<number, number[]>();
	for (const [a, b] of data) {
		if (!graph.has(a)) graph.set(a, []);
		graph.get(a)!.push(b);
	}
	const queue = [1];
	while (queue.length) {
		const key = queue.shift()!;
		const keys = graph.get(key) ?? [];
		for (const next of keys) {
			if (!visited[next]) {
				visited[next] = true;
				queue.push(next);
			}
		}
	}
	return visited;
}

// console.log(
// 	access([
// 		[1, 2],
// 		[2, 3],
// 		[3, 4],
// 		[4, 5],
// 		[5, 6],
// 	])
// );

// console.log(
// 	access([
// 		[1, 2],
// 		[2, 1],
// 		[1, 3],
// 		[3, 4],
//     [5,8]
// 	])
// );

console.log(
	accessBfs([
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 6],
	])
);
