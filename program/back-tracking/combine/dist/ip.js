"use strict";
exports.__esModule = true;
function isValidIpSegment(str) {
    var resBool = true;
    var tempVal = Number(str);
    if (str.length === 0 ||
        isNaN(tempVal) ||
        tempVal > 255 ||
        tempVal < 0 ||
        (str.length > 1 && str[0] === "0")) {
        resBool = false;
    }
    return resBool;
}
function isValid(str, startIndex, endIndex) {
    if (startIndex > endIndex)
        return false;
    if (str.charAt(startIndex) === "0" && startIndex === endIndex)
        return false;
    var num = 0;
    for (var i = startIndex; i < endIndex; i++) {
        num = num * 10 + Number(str.charAt(i));
        if (num > 255)
            return false;
    }
    return true;
}
function restoreIpAddresses(s) {
    var resArr = [];
    backTracking(s, 0, []);
    return resArr;
    function backTracking(s, startIndex, route) {
        var length = s.length;
        if (route.length === 4 && startIndex >= length) {
            resArr.push(route.join("."));
            return;
        }
        if (route.length === 4 || startIndex >= length)
            return;
        // let tempStr: string = "";
        for (var i = startIndex + 1; i <= Math.min(length, startIndex + 3); i++) {
            // tempStr = s.slice(startIndex, i);
            if (isValid(s, startIndex, i)) {
                route.push(s.slice(startIndex, i));
                backTracking(s, i, route);
                route.pop();
            }
        }
    }
}
console.log(restoreIpAddresses("25525511135"));
