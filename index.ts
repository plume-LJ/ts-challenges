console.log('Hello via Bun!');

console.time('fetch');
fetch(
	'https://www.vlr.gg/378829/edward-gaming-vs-team-heretics-valorant-champions-2024-gf/?game=180435&tab=overview'
).then((res) => {
	console.log(res);
  console.time('arrayBuffer -> decoder -> string');
	res.arrayBuffer().then((buf) => {
		const decoder = new TextDecoder();
		const str = decoder.decode(buf);
		// console.log(str);
    console.timeEnd('arrayBuffer -> decoder -> string');
	});
	console.timeEnd('fetch');
});
