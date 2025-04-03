"use strict";
exports.__esModule = true;
var dayjs_1 = require("dayjs");
var size6 = ['大安', '留连', '速喜', '赤口', '小吉', '空亡'];
var size9 = [
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
var getSize = function (size) {
    if (size === 6) {
        return size6;
    }
    else if (size === 9) {
        return size9;
    }
};
var divine = function (size, values) {
    var a = values[0], b = values[1], c = values[2];
    var sizeArr = getSize(size);
    if (!sizeArr)
        return [];
    var result = [];
    var round = 1;
    for (var i = 1, j = 0, num = a; i <= num; i++, j++) {
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
            }
            else if (round === 3) {
                num = c;
                i = 1;
            }
        }
    }
    return result;
};
console.log(divine(6, [4, 8, 8]));
console.log(divine(9, [4, 8, 8]));
// console.log(divine(9, [1994, 2, 30]));
var day = dayjs_1["default"]('2025-1-13').diff('2024-10-05', 'day');
console.log(day);
