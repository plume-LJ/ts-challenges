var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var e_1, _a, e_2, _b;
function strTransform(str, start, end) {
    var n = str.length;
    var queue = [];
    var visitMap = new Map();
    queue.push(start);
    visitMap.set(start, 1);
    while (queue.length) {
        var node = queue.shift();
        var count_1 = visitMap.get(node);
        for (var i_1 = 0; i_1 < node.length; i_1++) {
            var newWord = node;
            for (var j = 0; j < 26; j++) {
                newWord =
                    node.slice(0, i_1) + String.fromCharCode(97 + j) + node.slice(i_1 + 1);
                if (newWord === end)
                    return count_1 + 1;
                if (!visitMap.has(newWord) && str.includes(newWord)) {
                    queue.push(newWord);
                    visitMap.set(newWord, count_1 + 1);
                }
            }
        }
    }
    return 0;
}
console.log("\u8BA9\u6211\u4EEC\u52A0\u4E00\u4E9B\u6570\u5B57\u5427\uFF01");
console.write("\u8BA1\u6570\uFF1A0\n> ");
var count = 0;
try {
    for (var console_1 = __asyncValues(console), console_1_1; console_1_1 = await console_1.next(), !console_1_1.done;) {
        var line = console_1_1.value;
        count += Number(line);
        if (count > 0) {
            console.write("\u8BA9\u6211\u4EEC\u52A0\u4E00\u4E9B\u5B57\u7B26\u4E32\u5427\uFF01" + count + "\n> ");
            break;
        }
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (console_1_1 && !console_1_1.done && (_a = console_1["return"])) await _a.call(console_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var i = 0;
var lines = [];
var start = '';
var end = '';
try {
    for (var console_2 = __asyncValues(console), console_2_1; console_2_1 = await console_2.next(), !console_2_1.done;) {
        var line = console_2_1.value;
        if (i === 0) {
            start = line;
            i++;
            console.write(start + " \n> ");
            continue;
        }
        else if (i === 1) {
            end = line;
            i++;
            console.write(end + " \n> ");
            continue;
        }
        i++;
        lines.push(line);
        console.write(lines + "\n> ");
        if (i >= count + 2)
            break;
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (console_2_1 && !console_2_1.done && (_b = console_2["return"])) await _b.call(console_2);
    }
    finally { if (e_2) throw e_2.error; }
}
console.log(strTransform(lines, start, end));
// console.log(
// 	strTransform(['edf', 'dbc', 'ebc', 'dec', 'dfc', 'yhn'], 'abc', 'def')
// );
// console.log(
// 	strTransform(['hot', 'dot', 'dog', 'lot', 'log', 'cog'], 'hit', 'cog')
// );
