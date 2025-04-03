function repeatedSubstringPattern(s) {
    function getNext(str) {
        var next = [];
        var j = -1;
        next[0] = j;
        for (var i = 1, length = str.length; i < length; i++) {
            while (j >= 0 && str[i] !== str[j + 1]) {
                j = next[j];
            }
            if (str[i] === str[j + 1]) {
                j++;
            }
            next[i] = j;
        }
        return next;
    }
    var next = getNext(s);
    var sLength = s.length;
    var nextLength = next.length;
    var suffixLength = next[nextLength - 1] + 1;
    if (suffixLength > 0 && sLength % (sLength - suffixLength) === 0)
        return true;
    return false;
}
;
function repeatedSubstringPattern1(s) {
    function getNext(str) {
        var next = [];
        var j = 0;
        next[0] = j;
        for (var i = 1, length = str.length; i < length; i++) {
            while (j > 0 && str[i] !== str[j]) {
                j = next[j - 1];
            }
            if (str[i] === str[j]) {
                j++;
            }
            next[i] = j;
        }
        return next;
    }
    var next = getNext(s);
    var sLength = s.length;
    var nextLength = next.length;
    var suffixLength = next[nextLength - 1];
    if (suffixLength > 0 && sLength % (sLength - suffixLength) === 0)
        return true;
    return false;
}
;
