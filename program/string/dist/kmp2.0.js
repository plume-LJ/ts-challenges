"use strict";
exports.__esModule = true;
exports.KMP = void 0;
function KMP(t, p) {
    var i = 0;
    var j = 0;
    var n = t.length;
    var m = p.length;
    var next = calculateNext(p);
    while (i < n && j < m) {
        if (j === -1 || t[i] === p[j]) {
            i++;
            j++;
        }
        else {
            j = next[j];
        }
        console.log(i, j);
    }
    if (j === m) {
        return i - j;
    }
    else {
        return -1;
    }
}
exports.KMP = KMP;
function calculateNext(p) {
    var m = p.length;
    var next = new Array(m);
    next[0] = -1;
    var i = 0;
    var j = -1;
    while (i < m - 1) {
        if (j === -1 || p[i] === p[j]) {
            i++;
            j++;
            next[i] = j;
        }
        else {
            j = next[j];
        }
    }
    return next;
}
console.log(KMP("abcdababcda", "ababcda"));
function strToInt(str) {
    var INT_MAX = Math.pow(2, 31) - 1;
    var INT_MIN = -Math.pow(2, 31);
    var stateMachine = {
        start: {
            whitespace: "start",
            sign: "signed",
            digit: "inNumber",
            other: "end"
        },
        signed: {
            digit: "inNumber",
            other: "end"
        },
        inNumber: {
            digit: "inNumber",
            other: "end"
        },
        end: {
            other: "end"
        }
    };
    var state = "start";
    var sign = 1;
    var result = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        var type = getCharType(char);
        if (stateMachine[state])
            // @ts-ignore
            state = stateMachine[state][type];
        if (state === "signed") {
            sign = char === "-" ? -1 : 1;
        }
        else if (state === "inNumber") {
            var digit = Number(char);
            if (result > Math.floor(INT_MAX / 10) ||
                (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
                return sign === 1 ? INT_MAX : INT_MIN;
            }
            result = result * 10 + digit;
        }
        else if (state === "end") {
            break;
        }
    }
    return result === 0 ? 0 : sign * result;
}
function getCharType(char) {
    if (char === " " || char === "\t") {
        return "whitespace";
    }
    else if (char === "+" || char === "-") {
        return "sign";
    }
    else if (/[0-9]/.test(char)) {
        return "digit";
    }
    else {
        return "other";
    }
}
// Example usage
console.log(strToInt("42")); // Output: 42
console.log(strToInt("   -42")); // Output: -42
console.log(strToInt("4193 with words")); // Output: 4193
console.log(strToInt("words and 987")); // Output: 0
console.log(strToInt("-91283472332")); // Output: -2147483648
console.log(strToInt("-+2")); // Output: 0
function generateParenthesis(n) {
    var result = [];
    backtrack(result, "", 0, 0, n);
    return result;
}
function backtrack(result, current, openCount, closeCount, n) {
    if (current.length === 2 * n) {
        result.push(current);
        return;
    }
    if (openCount < n) {
        backtrack(result, current + "(", openCount + 1, closeCount, n);
    }
    if (closeCount < openCount) {
        backtrack(result, current + ")", openCount, closeCount + 1, n);
    }
}
