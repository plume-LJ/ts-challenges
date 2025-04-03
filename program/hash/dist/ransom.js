function canConstruct(ransomNote, magazine) {
    var helperArr = new Array(26).fill(0);
    var base = 'a'.charCodeAt(0);
    var index;
    for (var i = 0, length = magazine.length; i < length; i++) {
        helperArr[magazine[i].charCodeAt(0) - base]++;
    }
    for (var i = 0, length = ransomNote.length; i < length; i++) {
        index = ransomNote[i].charCodeAt(0) - base;
        helperArr[index]--;
        if (helperArr[index] < 0) {
            return false;
        }
    }
    return true;
}
;
