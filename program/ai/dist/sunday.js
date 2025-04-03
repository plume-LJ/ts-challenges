function sundaySearch(text, pattern) {
    var textLength = text.length;
    var patternLength = pattern.length;
    if (patternLength > textLength) {
        return -1;
    }
    var patternMap = new Map();
    for (var i_1 = 0; i_1 < patternLength; i_1++) {
        patternMap.set(pattern[i_1], patternLength - i_1);
    }
    console.log(patternMap);
    var i = 0;
    while (i <= textLength - patternLength) {
        var j = 0;
        while (j < patternLength && text[i + j] === pattern[j]) {
            j++;
        }
        if (j === patternLength) {
            return i;
        }
        var nextChar = text[i + patternLength];
        var shift = patternMap.get(nextChar) || patternLength + 1;
        i += shift;
    }
    return -1;
}
console.log(sundaySearch("asdfasdfsafabababafabababcacasdf", "abcabcd"));
