"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function partition(s) {
    var res = [];
    var path = [];
    var isHuiwen = function (str, startIndex, endIndex) {
        for (; startIndex < endIndex; startIndex++, endIndex--) {
            if (str[startIndex] !== str[endIndex]) {
                return false;
            }
        }
        return true;
    };
    var rec = function (str, index) {
        if (index === str.length) {
            res.push(__spreadArrays(path));
            return;
        }
        for (var i = index; i < str.length; i++) {
            if (!isHuiwen(str, index, i)) {
                continue;
            }
            path.push(str.substring(index, i + 1));
            rec(str, i + 1);
            path.pop();
        }
    };
    rec(s, 0);
    return res;
}
;
console.log(partition("abab"));
