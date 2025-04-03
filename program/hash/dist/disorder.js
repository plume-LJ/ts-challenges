function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    var helperArr = new Array(26).fill(0);
    var pivot = 'a'.charCodeAt(0);
    for (var i = 0, length = s.length; i < length; i++) {
        helperArr[s.charCodeAt(i) - pivot]++;
        helperArr[t.charCodeAt(i) - pivot]--;
    }
    return helperArr.every(function (i) { return i === 0; });
}
;
