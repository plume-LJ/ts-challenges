function strTransform(str: string[], start: string, end: string) {
	const n = str.length;
	const queue: string[] = [];
	const visitMap = new Map<string, number>();

	queue.push(start);
	visitMap.set(start, 1);
	while (queue.length) {
		const node = queue.shift()!;
		let count = visitMap.get(node)!;
		for (let i = 0; i < node.length; i++) {
			let newWord = node;
			for (let j = 0; j < 26; j++) {
				newWord =
					node.slice(0, i) + String.fromCharCode(97 + j) + node.slice(i + 1);
				if (newWord === end) return count + 1;
				if (!visitMap.has(newWord) && str.includes(newWord)) {
					queue.push(newWord);
					visitMap.set(newWord, count + 1);
				}
			}
		}
	}
	return 0;
}

console.log(`让我们加一些数字吧！`);
console.write(`计数：0\n> `);


let count = 0;
for await (const line of console) {
	count += Number(line);
	if (count > 0) {
		console.write(`让我们加一些字符串吧！${count}\n> `);
		break;
	}
	// console.write(`计数：${count}\n> `);
}
let i = 0;
const lines = [];
let start = '';
let end = '';
for await (const line of console) {
	if (i === 0) {
		start = line;
    i++;
    console.write(`${start} \n> `)
		continue;
	} else if (i === 1) {
		end = line;
    i++;
    console.write(`${end} \n> `)
		continue;
	}
	i++;
	lines.push(line);
	console.write(`${lines}\n> `);
	if (i >= count + 2) break;
}

console.log(strTransform(lines, start, end))

// console.log(
// 	strTransform(['edf', 'dbc', 'ebc', 'dec', 'dfc', 'yhn'], 'abc', 'def')
// );
// console.log(
// 	strTransform(['hot', 'dot', 'dog', 'lot', 'log', 'cog'], 'hit', 'cog')
// );
