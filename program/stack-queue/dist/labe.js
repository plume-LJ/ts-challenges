function removeDuplicates(s) {
    var helperStack = [];
    var i = 0;
    while (i < s.length) {
        var top = helperStack[helperStack.length - 1];
        if (top === s[i]) {
            helperStack.pop();
        }
        else {
            helperStack.push(s[i]);
        }
        i++;
    }
    var res = '';
    while (helperStack.length > 0) {
        res = helperStack.pop() + res;
    }
    return res;
}
;
