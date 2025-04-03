function letterCombinations(digits) {
    if (digits === '')
        return [];
    var strMap = {
        1: [],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    var resArr = [];
    function backTracking(digits, curIndex, route) {
        if (curIndex === digits.length) {
            resArr.push(route.join(''));
            return;
        }
        var tempArr = strMap[digits[curIndex]];
        for (var i = 0, length = tempArr.length; i < length; i++) {
            route.push(tempArr[i]);
            backTracking(digits, curIndex + 1, route);
            route.pop();
        }
    }
    backTracking(digits, 0, []);
    return resArr;
}
;
console.log(letterCombinations('23'));
