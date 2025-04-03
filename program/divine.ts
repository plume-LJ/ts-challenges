import dayjs from 'dayjs'
const size6 = ['大安', '留连', '速喜', '赤口', '小吉', '空亡'];
const size9 = [
	'大安',
	'留连',
	'速喜',
	'赤口',
	'小吉',
	'空亡',
	'病符',
	'桃花',
	'天德',
];

const getSize = (size: number) => {
	if (size === 6) {
		return size6;
	} else if (size === 9) {
		return size9;
	}
};
const divine = (size: number, values: [number, number, number]) => {
	const [a, b, c] = values;

	const sizeArr = getSize(size);
	if (!sizeArr) return [];
	const result = [];
	let round = 1;
	for (let i = 1, j = 0, num = a; i <= num; i++, j++) {
		if (j === sizeArr.length) {
			j = 0;
		}
		if (i === num) {
			result.push(sizeArr[j]);
			round++;
			if (j === 0) {
				j = sizeArr.length - 1;
			}
			if (round === 2) {
				i = 1;
				num = b;
			} else if (round === 3) {
				num = c;
				i = 1;
			}
		}
	}
	return result;
};

console.log(divine(6, [4,8,8]));
console.log(divine(9, [4,8,8]));
// console.log(divine(9, [1994, 2, 30]));
const day = dayjs('2025-1-13').diff('2024-10-05', 'day')
console.log(day)