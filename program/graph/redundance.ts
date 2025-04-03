function redundance(grid: [number, number][]) {
	const n = grid.length;
	const inDegree = new Array(n + 1).fill(0);
	const father = new Array(1001).fill(0);
	const result: string[] = [];

	function init() {
		for (let i = 0; i < n + 1; i++) {
			father[i] = i;
		}
	}

	function find(x: number) {
		if (x !== father[x]) {
			father[x] = find(father[x]);
		}
		return father[x];
	}

	function join(x: number, y: number) {
		const nx = find(x);
		const ny = find(y);
		if (nx === ny) return;
		father[ny] = nx;
	}

	function isSame(x: number, y: number) {
		const nx = find(x);
		const ny = find(y);
		return nx === ny;
	}

	function getRemoveEdge(edges: [number, number][]) {
		init();
		for (let i = 0; i < n; i++) {
			if (isSame(edges[i][0], edges[i][1])) {
				result.push(`${edges[i][0]} ${edges[i][1]}`);
				return;
			} else {
				join(edges[i][0], edges[i][1]);
			}
		}
	}

	function isTreeAfterRemoveEdge(
		edges: [number, number][],
		deleteEdge: number
	) {
		init();
		for (let i = 0; i < n; i++) {
			if (i === deleteEdge) continue;
			if (isSame(edges[i][0], edges[i][1])) {
				return false;
			} else {
				join(edges[i][0], edges[i][1]);
			}
		}
		return true;
	}

	const edges: [number, number][] = [];
	for (let [x, y] of grid) {
		inDegree[y]++;
		edges.push([x, y]);
	}
	const vec: number[] = [];
	for (let i = n - 1; i >= 0; i--) {
		if (inDegree[edges[i][1]] === 2) vec.push(i);
	}
	if (vec.length > 0) {
		if (isTreeAfterRemoveEdge(edges, vec[0])) {
			console.log(edges[vec[0]][0], edges[vec[0]][1]);
		} else {
			console.log(edges[vec[1]][0], edges[vec[1]][1]);
		}
		return;
	}

	getRemoveEdge(edges);
}

console.log(
	redundance([
		[1, 2],
		[1, 3],
		[2, 3],
	])
);
console.log(
	redundance([
		[1, 3],
		[2, 1],
		[3, 2],
		[3, 4],
	])
);
