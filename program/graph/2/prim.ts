async function main() {
	let v: number = 0,
		e: number = 0;
	console.log('请输入顶点数和边数');
	for await (const line of console) {
		[v, e] = line.split(' ').map(Number);
		break;
	}
	const grid = new Array(v + 1).fill(0).map(() => new Array(v + 1).fill(10001));
	console.log('请输入边的起点、终点和权重');
	let i = 0;
	for await (const line of console) {
		const [x, y, k] = line.split(' ').map(Number);
		grid[x][y] = k;
		grid[y][x] = k;
		i++;
		if (i === e) break;
	}

	// const v = 7;
	// const e = 11;

	// const grid = [
	// 	[10001, 10001, 10001, 10001, 10001, 10001, 10001, 10001],
	// 	[10001, 10001, 1, 1, 10001, 10001, 10001, 10001],
	// 	[10001, 1, 10001, 10001, 2, 1, 10001, 10001],
	// 	[10001, 1, 10001, 10001, 1, 10001, 10001, 10001],
	// 	[10001, 10001, 2, 1, 10001, 1, 1, 1],
	// 	[10001, 10001, 1, 10001, 1, 10001, 2, 1],
	// 	[10001, 10001, 10001, 10001, 1, 2, 10001, 1],
	// 	[10001, 10001, 10001, 10001, 1, 1, 1, 10001],
	// ];
	// console.log(grid);

	const minDist = new Array(v + 1).fill(10001);
	const isInTree = new Array(v + 1).fill(false);

	// 我们只需要循环 n-1次，建立 n - 1条边，就可以把n个节点的图连在一起
	for (let i = 0; i < v; i++) {
		// 1、prim三部曲，第一步：选距离生成树最近节点
		let cur = -1;
		let minVal = Infinity;
		for (let j = 1; j <= v; j++) {
			//  选取最小生成树节点的条件：
			//  （1）不在最小生成树里
			//  （2）距离最小生成树最近的节点
			if (!isInTree[j] && minDist[j] < minVal) {
				cur = j;
				minVal = minDist[j];
			}
		}
		// 2、prim三部曲，第二步：最近节点（cur）加入生成树
		isInTree[cur] = true;
		// 3、prim三部曲，第三步：更新非生成树节点到生成树的距离（即更新minDist数组）
		// cur节点加入之后， 最小生成树加入了新的节点，那么所有节点到 最小生成树的距离（即minDist数组）需要更新一下
		// 由于cur节点是新加入到最小生成树，那么只需要关心与 cur 相连的 非生成树节点 的距离 是否比 原来 非生成树节点到生成树节点的距离更小了呢
		for (let j = 1; j <= v; j++) {
			if (!isInTree[j] && grid[cur][j] < minDist[j]) {
				minDist[j] = grid[cur][j];
			}
		}
	}
	let result = 0;
	console.log(minDist);
	for (let i = 2; i <= v; i++) {
		result += minDist[i];
	}
	console.log(result);
	return result;
}

await main();
